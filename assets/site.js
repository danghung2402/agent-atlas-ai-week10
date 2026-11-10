'use strict';
const railToggle=document.querySelector('.rail-toggle');
if(railToggle)railToggle.addEventListener('click',()=>{
 const rail=document.querySelector('#site-rail');const expanded=railToggle.getAttribute('aria-expanded')!=='true';
 rail.classList.toggle('open',expanded);railToggle.setAttribute('aria-expanded',String(expanded));railToggle.textContent=expanded?'關閉目錄 −':'目錄 ＋';
});
const search=document.querySelector('#wiki-search');
if(search){
 let kind='all';const cards=[...document.querySelectorAll('.note-card')];
 function filter(){const q=search.value.trim().toLocaleLowerCase();let count=0;
  cards.forEach(card=>{const show=(kind==='all'||card.dataset.kind===kind)&&card.textContent.toLocaleLowerCase().includes(q);card.hidden=!show;if(show)count++;});
  document.querySelector('#result-count').textContent=`顯示 ${count} / ${cards.length} 篇`;
  document.querySelector('#no-results').hidden=count!==0;
 }
 search.addEventListener('input',filter);
 document.querySelectorAll('.chip').forEach(btn=>btn.addEventListener('click',()=>{
  kind=btn.dataset.filter;document.querySelectorAll('.chip').forEach(b=>b.setAttribute('aria-pressed',String(b===btn)));filter();
 }));filter();
}
