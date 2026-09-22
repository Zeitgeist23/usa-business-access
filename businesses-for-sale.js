(() => {
  const form = document.querySelector('#listing-filters');
  if (!form) return;

  const search = document.querySelector('#listing-search');
  const state = document.querySelector('#state-filter');
  const industry = document.querySelector('#industry-filter');
  const price = document.querySelector('#price-filter');
  const cards = [...document.querySelectorAll('.inventory-card')];
  const count = document.querySelector('#result-count');
  const empty = document.querySelector('#inventory-empty');

  const matchesPrice = (amount, range) => {
    if (range === 'under-750000') return amount < 750000;
    if (range === '750000-1000000') return amount >= 750000 && amount <= 1000000;
    if (range === 'over-1000000') return amount > 1000000;
    return true;
  };

  const applyFilters = () => {
    const query = search.value.trim().toLowerCase();
    let visible = 0;

    cards.forEach((card) => {
      const show = (!query || card.dataset.search.includes(query))
        && (state.value === 'all' || card.dataset.state === state.value)
        && (industry.value === 'all' || card.dataset.industry === industry.value)
        && matchesPrice(Number(card.dataset.price), price.value);
      card.hidden = !show;
      if (show) visible += 1;
    });

    count.textContent = `Showing ${visible} ${visible === 1 ? 'business' : 'businesses'}`;
    empty.hidden = visible !== 0;
  };

  form.addEventListener('input', applyFilters);
  form.addEventListener('reset', () => requestAnimationFrame(applyFilters));
})();
