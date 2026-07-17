(function () {
  var hint = document.querySelector('.scroll-hint');
  if (!hint) return;
  window.addEventListener('scroll', function () {
    hint.classList.toggle('scroll-hint--hidden', window.scrollY > 80);
  }, { passive: true });
})();
