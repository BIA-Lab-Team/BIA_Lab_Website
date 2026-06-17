(() => {
  /* Mobile nav toggle */
  const nav    = document.querySelector('.nav');
  const burger = document.querySelector('.nav__burger');
  burger?.addEventListener('click', () => nav.classList.toggle('nav--open'));

  /* Active link highlight */
  const page = location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav__links a').forEach(a => {
    const href = a.getAttribute('href');
    if (href === page || (page === '' && href === 'index.html')) {
      a.classList.add('active');
    }
  });
})();
