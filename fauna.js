(() => {
  const links = [...document.querySelectorAll('[data-fauna-link]')];
  const cards = [...document.querySelectorAll('[data-fauna]')];
  const setActive = id => links.forEach(link => link.classList.toggle('active', link.dataset.faunaLink === id));
  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver(entries => {
      const visible = entries.filter(entry => entry.isIntersecting).sort((a,b) => b.intersectionRatio - a.intersectionRatio)[0];
      if (visible) setActive(visible.target.dataset.fauna);
    }, { rootMargin:'-28% 0px -58% 0px', threshold:[0,.15,.4] });
    cards.forEach(card => observer.observe(card));
  }
  links.forEach(link => link.addEventListener('click', () => setActive(link.dataset.faunaLink)));
  if (location.hash) setActive(location.hash.slice(1));
})();
