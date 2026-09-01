(() => {
  const slides = Array.from(document.querySelectorAll('.hero-slide'));
  if (slides.length < 2) return;

  let index = 0;
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (reduceMotion) return;

  window.setInterval(() => {
    slides[index].classList.remove('is-active');
    index = (index + 1) % slides.length;
    slides[index].classList.add('is-active');
  }, 8000);
})();
