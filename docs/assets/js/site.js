/* M2-BLAIPI public site — shared behavior */
(function(){
  var reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  // Animate the homepage signature curve (only if present)
  var mod = document.getElementById('mod');
  if(mod && !reduce){
    try{
      var len = mod.getTotalLength();
      mod.style.strokeDasharray = len;
      mod.style.strokeDashoffset = len;
      var started = false;
      var io1 = new IntersectionObserver(function(es){
        es.forEach(function(e){
          if(e.isIntersecting && !started){
            started = true;
            mod.style.transition = 'stroke-dashoffset 1.5s ease-out';
            requestAnimationFrame(function(){ mod.style.strokeDashoffset = '0'; });
          }
        });
      }, {threshold:0.3});
      io1.observe(mod.closest('figure'));
    }catch(err){}
  }

  // Reveal-on-scroll for any .reveal element
  var els = document.querySelectorAll('.reveal');
  if(!('IntersectionObserver' in window)){
    els.forEach(function(e){ e.classList.add('in'); });
  } else {
    var io2 = new IntersectionObserver(function(entries){
      entries.forEach(function(en){
        if(en.isIntersecting){ en.target.classList.add('in'); io2.unobserve(en.target); }
      });
    }, {threshold:0.12});
    els.forEach(function(e){ io2.observe(e); });
  }

  // Mobile "Sections" button scrolls to the first content anchor
  var mb = document.getElementById('menuBtn');
  if(mb){
    mb.addEventListener('click', function(){
      var t = document.querySelector('main section:nth-of-type(2)') || document.querySelector('main section');
      if(t) t.scrollIntoView({behavior:'smooth'});
    });
  }
})();
