'use strict';
(function(root){
function validate(spec,events){
  const errors=[],err=(code,detail)=>errors.push({code,detail});
  const minute=s=>{if(typeof s!=='string'||!/^(?:[01]\d|2[0-3]):[0-5]\d$/.test(s))throw Error('time');const [h,m]=s.split(':').map(Number);return h*60+m;};
  let ws,we,tasks,fixed;
  try{ws=minute(spec.window.start);we=minute(spec.window.end);if(ws>=we)throw Error('window');tasks=spec.tasks;fixed=spec.fixed;
   if(new Set([...tasks,...fixed].map(x=>x.id)).size!==tasks.length+fixed.length)throw Error('duplicate IDs');
   for(const t of tasks){if(['id','title','duration_min','due'].some(k=>!(k in t))){err('MISSING_INPUT',`${t.id??'?'} 缺少任務時長或期限`);continue;}if(!Number.isInteger(t.duration_min)||t.duration_min<=0)throw Error('duration');minute(t.due);}
   for(const f of fixed)if(!(ws<=minute(f.start)&&minute(f.start)<minute(f.end)&&minute(f.end)<=we))throw Error('fixed');
  }catch{err('INVALID_INPUT','輸入資料的欄位、時間格式或範圍無效');}
  if(errors.length)return{status:'NEEDS_INPUT',passed:false,errors};
  if(!Array.isArray(events))return{status:'INVALID_DRAFT',passed:false,errors:[{code:'INVALID_FORMAT',detail:'草稿必須是事件清單'}]};
  const expected=new Map([...fixed,...tasks].map(x=>[x.id,x])),by=new Map(),intervals=[];
  for(const e of events){try{const a=minute(e.start),b=minute(e.end),id=e.id;if(!expected.has(id)){err('UNKNOWN_EVENT',`${id} 不是指定任務或固定事件`);continue;}
   if(!by.has(id))by.set(id,[]);by.get(id).push(e);if(a>=b){err('INVALID_INTERVAL',`${id} 結束必須晚於開始`);continue;}if(a<ws||b>we)err('OUTSIDE_WINDOW',`${id} 超出允許時段`);intervals.push([a,b,id]);
  }catch{err('INVALID_FORMAT','草稿事件缺少 id 或有效的 HH:MM 時間');}}
  for(const item of [...fixed,...tasks]){const found=by.get(item.id)??[];if(found.length!==1){err('COVERAGE',`${item.id} 必須恰好出現一次`);continue;}const e=found[0];try{
   const a=minute(e.start),b=minute(e.end);if(fixed.includes(item)){if(e.start!==item.start||e.end!==item.end)err('FIXED_CHANGED',`${item.id} 固定工作／課程不可移動`);}else{if(b-a!==item.duration_min)err('DURATION',`${item.id} 時長不符需求`);if(b>minute(item.due))err('DEADLINE',`${item.id} 晚於截止時間`);}
  }catch{}}
  intervals.forEach(([a,b,id],i)=>intervals.slice(i+1).forEach(([c,d,other])=>{if(a<d&&c<b)err('OVERLAP',`${id} 與 ${other} 時段重疊`);}));
  return{status:errors.length?'INVALID_DRAFT':'PASS',passed:!errors.length,errors};
 }
const api={validate};if(typeof module==='object'&&module.exports)module.exports=api;else root.ScheduleValidator=api;
})(typeof globalThis!=='undefined'?globalThis:this);
