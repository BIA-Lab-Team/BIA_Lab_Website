(() => {
  const INTERVAL = 5000;

  document.querySelectorAll('[data-carousel]').forEach(root => {
    const track    = root.querySelector('.carousel__track');
    const slides   = root.querySelectorAll('.carousel__slide');
    const dots     = root.querySelectorAll('.carousel__dot');
    const btnPrev  = root.querySelector('[data-carousel-prev]');
    const btnNext  = root.querySelector('[data-carousel-next]');
    const bar      = root.querySelector('.carousel__progress-bar');

    if (!track || !slides.length) return;

    let current = 0;
    let timer   = null;
    let touchX  = null;

    function goTo(idx) {
      current = (idx + slides.length) % slides.length;
      track.style.transform = `translateX(-${current * 100}%)`;
      dots.forEach((d, i) => d.classList.toggle('active', i === current));

      if (bar) {
        bar.style.transition = 'none';
        bar.style.width = '0';
        requestAnimationFrame(() => requestAnimationFrame(() => {
          bar.style.transition = `width ${INTERVAL}ms linear`;
          bar.style.width = '100%';
        }));
      }
    }

    function next() { goTo(current + 1); }
    function prev() { goTo(current - 1); }

    function startAuto() {
      stopAuto();
      timer = setInterval(next, INTERVAL);
    }
    function stopAuto() { clearInterval(timer); }

    btnPrev?.addEventListener('click', () => { prev(); startAuto(); });
    btnNext?.addEventListener('click', () => { next(); startAuto(); });
    dots.forEach((d, i) => d.addEventListener('click', () => { goTo(i); startAuto(); }));

    root.addEventListener('mouseenter', stopAuto);
    root.addEventListener('mouseleave', startAuto);

    root.addEventListener('touchstart', e => { touchX = e.touches[0].clientX; }, { passive: true });
    root.addEventListener('touchend', e => {
      if (touchX === null) return;
      const dx = e.changedTouches[0].clientX - touchX;
      if (Math.abs(dx) > 40) { dx < 0 ? next() : prev(); startAuto(); }
      touchX = null;
    });

    goTo(0);
    startAuto();
  });
})();
