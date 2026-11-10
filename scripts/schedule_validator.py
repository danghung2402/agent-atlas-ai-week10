"""Rule-based teaching validator, not a planner or model benchmark."""
import re
def minute(value):
 if not isinstance(value,str) or not re.fullmatch(r'(?:[01]\d|2[0-3]):[0-5]\d',value):raise ValueError('HH:MM required')
 h,m=map(int,value.split(':'));return 60*h+m
def validate(spec,events):
 errors=[]
 def err(code,detail):errors.append(dict(code=code,detail=detail))
 try:
  ws,we=minute(spec['window']['start']),minute(spec['window']['end'])
  if ws>=we:raise ValueError('window')
  tasks=spec['tasks'];fixed=spec['fixed']
  if len({x['id'] for x in tasks+fixed})!=len(tasks+fixed):raise ValueError('duplicate input IDs')
  for t in tasks:
   if any(k not in t for k in ['id','title','duration_min','due']):
    err('MISSING_INPUT',t.get('id','?')+' 缺少任務時長或期限');continue
   if type(t['duration_min']) is not int or t['duration_min']<=0:raise ValueError('duration')
   minute(t['due'])
  for f in fixed:
   if not ws<=minute(f['start'])<minute(f['end'])<=we:raise ValueError('fixed interval')
 except (KeyError,TypeError,ValueError):err('INVALID_INPUT','輸入資料的欄位、時間格式或範圍無效')
 if errors:return dict(status='NEEDS_INPUT',passed=False,errors=errors)
 if not isinstance(events,list):return dict(status='INVALID_DRAFT',passed=False,errors=[dict(code='INVALID_FORMAT',detail='草稿必須是事件清單')])
 expected={x['id']:x for x in fixed+tasks};by={};intervals=[]
 for event in events:
  try:
   eid=event['id'];start,end=minute(event['start']),minute(event['end'])
   if eid not in expected:err('UNKNOWN_EVENT',str(eid)+' 不是指定任務或固定事件');continue
   by.setdefault(eid,[]).append(event)
   if start>=end:err('INVALID_INTERVAL',eid+' 結束必須晚於開始');continue
   if start<ws or end>we:err('OUTSIDE_WINDOW',eid+' 超出允許時段')
   intervals.append((start,end,eid))
  except (KeyError,TypeError,ValueError):err('INVALID_FORMAT','草稿事件缺少 id 或有效的 HH:MM 時間')
 for item in fixed+tasks:
  eid=item['id'];found=by.get(eid,[])
  if len(found)!=1:err('COVERAGE',eid+' 必須恰好出現一次');continue
  e=found[0]
  try:
   a,b=minute(e['start']),minute(e['end'])
   if item in fixed:
    if e['start']!=item['start'] or e['end']!=item['end']:err('FIXED_CHANGED',eid+' 固定工作／課程不可移動')
   else:
    if b-a!=item['duration_min']:err('DURATION',eid+' 時長不符需求')
    if b>minute(item['due']):err('DEADLINE',eid+' 晚於截止時間')
  except (KeyError,ValueError,TypeError):pass
 for i,(a,b,eid) in enumerate(intervals):
  for c,d,other in intervals[i+1:]:
   if a<d and c<b:err('OVERLAP',eid+' 與 '+other+' 時段重疊')
 return dict(status='PASS' if not errors else 'INVALID_DRAFT',passed=not errors,errors=errors)
def next_step(result,repair_round):
 if result['status']=='NEEDS_INPUT':return 'ASK_USER'
 if result['passed']:return 'READY_FOR_HUMAN'
 return 'STOP_LIMIT' if repair_round>=3 else 'REVISE_DRAFT'
