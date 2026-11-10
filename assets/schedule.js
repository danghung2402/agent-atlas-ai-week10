'use strict';
(()=>{
 const data=window.scheduleTeachingData;if(!data)return;
 const select=document.querySelector('#case-select'),events=document.querySelector('#case-events'),input=document.querySelector('#case-input'),result=document.querySelector('#case-result');
 const labels={PASS:'通過 → 等待人確認',INVALID_DRAFT:'未通過 → 回草稿修正',NEEDS_INPUT:'資料不足 → 請人補充'};
 function show(){const c=data.cases[Number(select.value)];document.querySelector('#case-description').textContent=c.description;
  input.textContent=c.spec.tasks.map(t=>`${t.id} ${t.title}｜${t.duration_min??'缺少時長'} 分鐘｜截止 ${t.due??'缺少期限'}`).join('\n');
  events.replaceChildren();c.events.forEach(e=>{const row=document.createElement('tr');[e.id,e.title,`${e.start}–${e.end}`].forEach(v=>{const td=document.createElement('td');td.textContent=v;row.append(td);});events.append(row);});
  result.replaceChildren();const p=document.createElement('p');p.textContent='按「檢查這份草稿」查看此案例的規則驗收結果。';result.append(p);result.className='schedule-result';
 }
 // Same seven rule families as the Python validator. UI evaluates each fixture on click.

 document.querySelector('#check-case').addEventListener('click',()=>{
  const c=data.cases[Number(select.value)],observed=window.ScheduleValidator.validate(c.spec,c.events);
  const route=observed.status==='NEEDS_INPUT'?'ASK_USER':observed.passed?'READY_FOR_HUMAN':c.repair_round>=3?'STOP_LIMIT':'REVISE_DRAFT';
  result.replaceChildren();result.className='schedule-result '+(observed.passed?'passed':'failed');
  const heading=document.createElement('h3');heading.textContent=route==='STOP_LIMIT'?'達三輪上限 → 停止並回報':labels[observed.status];result.append(heading);
  const ul=document.createElement('ul');for(const e of observed.errors){const li=document.createElement('li');li.textContent=`${e.code}：${e.detail}`;ul.append(li);}if(!observed.errors.length){const li=document.createElement('li');li.textContent='固定事件、完整覆蓋、有效時間、允許時段、任務時長、期限與無重疊均通過。';ul.append(li);}result.append(ul);
  const parity=document.createElement('p');const matched=JSON.stringify(observed)===JSON.stringify(c.observed);parity.textContent=matched?'與保存的 Python 執行結果一致。':'與保存結果不一致，請停止採用並回報。';result.append(parity);
 });select.addEventListener('change',show);show();
})();
