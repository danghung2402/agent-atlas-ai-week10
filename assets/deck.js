'use strict';
(()=>{
 const slides=[...document.querySelectorAll('.slide')], total=slides.length;
 const select=document.querySelector('#slide-select');let current=0;
 function show(index,updateHash=true){
  current=Math.min(total-1,Math.max(0,index));
  slides.forEach((s,i)=>{s.hidden=i!==current;s.setAttribute('aria-hidden',String(i!==current));});
  document.querySelector('#counter').textContent=`${String(current+1).padStart(2,'0')} / ${total}`;
  document.querySelector('#progress-fill').style.width=`${(current+1)/total*100}%`;
  document.querySelector('#prev').disabled=current===0;document.querySelector('#next').disabled=current===total-1;
  document.querySelector('#speaker-text').textContent=slides[current].dataset.notes;
  select.value=String(current);document.title=`${current+1}. ${slides[current].dataset.title}｜Agent Atlas`;
  if(updateHash){const nextHash=`#slide-${current+1}`;if(location.protocol==='file:')location.hash=nextHash;else history.replaceState(null,'',nextHash);}
  window.scrollTo(0,0);
 }
 document.querySelector('#prev').addEventListener('click',()=>show(current-1));
 document.querySelector('#next').addEventListener('click',()=>show(current+1));
 select.addEventListener('change',()=>show(Number(select.value)));
 document.addEventListener('keydown',e=>{
  const focusedTag=document.activeElement.tagName;
  if(['INPUT','TEXTAREA','SELECT'].includes(focusedTag))return;
  if(e.key===' '&&['BUTTON','A'].includes(focusedTag))return;
  if(['ArrowRight','PageDown',' '].includes(e.key)){e.preventDefault();show(current+1);}
  if(['ArrowLeft','PageUp'].includes(e.key)){e.preventDefault();show(current-1);}
  if(e.key==='Home'){e.preventDefault();show(0);}if(e.key==='End'){e.preventDefault();show(total-1);}
 });
 document.querySelector('#notes-toggle').addEventListener('click',e=>{
  const speaker=document.querySelector('#speaker');speaker.hidden=!speaker.hidden;e.currentTarget.setAttribute('aria-expanded',String(!speaker.hidden));
 });
 document.querySelector('#fullscreen').addEventListener('click',async()=>{
  const button=document.querySelector('#fullscreen');try{if(document.fullscreenElement)await document.exitFullscreen();else await document.documentElement.requestFullscreen();}catch{button.textContent='此瀏覽器不支援全螢幕';}
 });
 document.querySelector('#print').addEventListener('click',()=>window.print());
 window.addEventListener('beforeprint',()=>slides.forEach(s=>{s.hidden=false;s.setAttribute('aria-hidden','false');}));
 window.addEventListener('afterprint',()=>show(current,false));
 window.addEventListener('hashchange',()=>{const m=location.hash.match(/^#slide-(\d+)$/);if(m)show(Number(m[1])-1,false);});
 let start=null;document.querySelector('#deck-main').addEventListener('touchstart',e=>{start=[e.changedTouches[0].clientX,e.changedTouches[0].clientY];},{passive:true});
 document.querySelector('#deck-main').addEventListener('touchend',e=>{if(!start||e.target.closest('button,a,select'))return;const dx=e.changedTouches[0].clientX-start[0],dy=e.changedTouches[0].clientY-start[1];if(Math.abs(dx)>70&&Math.abs(dx)>Math.abs(dy)*1.5)show(current+(dx<0?1:-1));start=null;},{passive:true});
 document.querySelectorAll('.quiz-card').forEach(card=>{
  card.querySelectorAll('.quiz-option').forEach((btn,i)=>btn.addEventListener('click',()=>{
   const correct=i===Number(card.dataset.answer);card.querySelectorAll('.quiz-option').forEach(b=>{b.classList.remove('selected','wrong');b.setAttribute('aria-pressed','false');});
   btn.classList.add(correct?'selected':'wrong');btn.setAttribute('aria-pressed','true');
   card.querySelector('.quiz-feedback').textContent=correct?`答對了。${card.dataset.why}`:'再想一想，可以重新選擇。';
  }));
 });
 const m=location.hash.match(/^#slide-(\d+)$/);show(m?Number(m[1])-1:0,false);
})();
