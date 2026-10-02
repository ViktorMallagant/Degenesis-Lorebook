(() => {
  const toggle = document.querySelector('#lorebook-nav-toggle');
  const scrim = document.querySelector('#sidebar-scrim');
  const desktop = window.matchMedia('(min-width: 761px)');

  const setSidebar = (open) => {
    document.body.classList.toggle('sidebar-open', open);
    toggle?.setAttribute('aria-expanded', String(open));
  };

  // Respect the class set before first paint, then own the interaction from here.
  toggle?.setAttribute('aria-expanded', String(document.body.classList.contains('sidebar-open')));

  toggle?.addEventListener('click', (event) => {
    event.preventDefault();
    setSidebar(!document.body.classList.contains('sidebar-open'));
  });

  scrim?.addEventListener('click', () => setSidebar(false));

  document.querySelectorAll('.lorebook-sidebar a:not([aria-disabled="true"])').forEach((link) => {
    link.addEventListener('click', () => {
      if (!desktop.matches) setSidebar(false);
    });
  });
})();