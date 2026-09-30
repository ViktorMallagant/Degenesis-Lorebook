// The Cultures heading opens its overview and toggles its existing tree.
(() => {
  const heading = document.querySelector('.lorebook-sidebar .culture-heading-link');
  const summary = heading?.closest('summary');
  const tree = summary?.parentElement;
  if (!summary || !(tree instanceof HTMLDetailsElement)) return;

  const destination = new URL(heading.href);
  const handoffKey = 'degenesis:lorebook:culture-tree-handoff';
  const onOverview = window.location.pathname === destination.pathname;

  if (onOverview) {
    try {
      const saved = sessionStorage.getItem(handoffKey);
      sessionStorage.removeItem(handoffKey);
      const handoff = saved && JSON.parse(saved);
      if (handoff?.pathname === destination.pathname && typeof handoff.open === 'boolean') {
        tree.open = handoff.open;
      }
    } catch {
      // Navigation and the native tree remain usable if storage is unavailable.
    }
  }

  summary.addEventListener('click', (event) => {
    if (event.button !== 0 || event.ctrlKey || event.metaKey || event.shiftKey || event.altKey) return;
    event.preventDefault();
    event.stopPropagation();
    const open = !tree.open;
    tree.open = open;
    if (onOverview) return;

    try {
      sessionStorage.setItem(handoffKey, JSON.stringify({ pathname: destination.pathname, open }));
    } catch {
      // A storage restriction must not prevent visitors from opening the page.
    }
    window.location.assign(destination.href);
  }, true);
})();
