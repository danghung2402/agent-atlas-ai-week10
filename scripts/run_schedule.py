"""Execute labelled fault-injection fixtures and preserve observed results."""
from pathlib import Path
import json,copy,datetime,hashlib
from schedule_validator import validate,next_step
R=Path(__file__).resolve().parents[1]
spec=dict(label='自編排程情境，非使用者真實行事曆',timezone='Asia/Taipei',day='教學日 D1',window=dict(start='15:00',end='21:00'),fixed=[dict(id='F1',title='固定工作',start='15:00',end='16:00'),dict(id='F2',title='固定課程',start='18:00',end='19:00')],tasks=[dict(id='T1',title='完成報告',duration_min=90,due='18:00'),dict(id='T2',title='AI 練習',duration_min=60,due='21:00'),dict(id='T3',title='課程複習',duration_min=30,due='21:00')])
good=copy.deepcopy(spec['fixed'])+[dict(id='T1',title='完成報告',start='16:00',end='17:30'),dict(id='T2',title='AI 練習',start='19:00',end='20:00'),dict(id='T3',title='課程複習',start='20:00',end='20:30')]
cases=[]
def add(id,title,description,fixture,events,expected,round=0):
 observed=validate(fixture,events);codes=sorted(set(e['code'] for e in observed['errors']))
 assert codes==sorted(expected),(id,codes,expected)
 cases.append(dict(id=id,title=title,description=description,spec=fixture,events=events,observed=observed,next=next_step(observed,round),repair_round=round))
bad=copy.deepcopy(good);bad[2].update(start='15:30',end='17:00')
add('overlap','初始衝突草稿','刻意注入：T1 與固定工作重疊。',spec,bad,['OVERLAP'])
add('repaired','局部修正版','AI 作者只把 T1 移到 16:00–17:30；程式重跑驗收。',spec,good,[],1)
missing=copy.deepcopy(spec);del missing['tasks'][0]['duration_min']
add('missing','缺少時長','刻意移除 T1 時長；應要求補資料，不能猜。',missing,good,['MISSING_INPUT'])
late=copy.deepcopy(good);late[2].update(start='19:30',end='21:00');late[3].update(start='16:00',end='17:00');late[4].update(start='17:00',end='17:30')
add('deadline','沒有重疊，卻逾期','T1 仍足 90 分鐘且無重疊，但超過 18:00 截止。',spec,late,['DEADLINE'])
short=copy.deepcopy(good);short[2]['end']='17:00'
add('duration','縮短任務的假修正','T1 縮成 60 分鐘，雖無重疊仍不合需求。',spec,short,['DURATION'])
deleted=copy.deepcopy(good);deleted.pop(4)
add('coverage','遺漏一項任務','移除 T3 不算排好全部任務。',spec,deleted,['COVERAGE'])
moved=copy.deepcopy(good);moved[0].update(start='15:00',end='15:30')
add('fixed','改動固定事件','把固定工作提早結束，不能當作合法修正。',spec,moved,['FIXED_CHANGED'])
add('limit','三輪仍失敗','沿用衝突草稿，修正輪數到三即停止回報。',spec,bad,['OVERLAP'],3)
assert cases[2]['next']=='ASK_USER' and cases[-1]['next']=='STOP_LIMIT'
assert cases[1]['next']=='READY_FOR_HUMAN' and cases[0]['next']=='REVISE_DRAFT'
unchanged=[x['id'] for x,y in zip(bad,good) if x==y];assert unchanged==['F1','F2','T2','T3']
report=dict(timestamp_utc=datetime.datetime.now(datetime.timezone.utc).isoformat(),kind='authored fault-injection and deterministic validator replay',not_model_benchmark=True,planner='AI-authored initial and repaired drafts; no autonomous repair code',rules=['fixed events unchanged','every required event exactly once','valid time interval','within allowed window','exact task duration','before task deadline','no overlap'],cases=cases,case_count=len(cases),expected_results_match=True,repair=dict(changed=['T1'],unchanged=unchanged),scope='One illustrative day; no priority optimization, cross-day travel constraints, or external calendar writes',validator_sha256=hashlib.sha256((R/'scripts/schedule_validator.py').read_bytes()).hexdigest())
out=R/'evidence/schedule-run.json';out.write_text(json.dumps(report,ensure_ascii=False,indent=2),encoding='utf-8')
print('SCHEDULE REPLAY:',len(cases),'fixtures; all expected outcomes matched')
for c in cases:print(c['id'],c['observed']['status'],','.join(e['code'] for e in c['observed']['errors']) or 'no violations',c['next'])
