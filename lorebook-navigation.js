// Keep sidebar trees open across entries until their own heading closes them.
(() => {
  const trees = Array.from(document.querySelectorAll('.lorebook-sidebar details')).map((tree) => ({
    tree,
    key: tree.querySelector('nav')?.getAttribute('aria-label')?.toLowerCase()
  })).filter(({ key }) => key);
  const stateKey = 'degenesis:lorebook:tree-state';

  const restoreTrees = () => {
    try {
      const saved = JSON.parse(sessionStorage.getItem(stateKey));
      trees.forEach(({ tree, key }) => {
        if (typeof saved?.[key] === 'boolean') tree.open = saved[key];
      });
    } catch {
      // Fresh visits retain the collapsed defaults, including when storage is blocked.
    }
  };
  restoreTrees();
  window.addEventListener('pageshow', restoreTrees);

  const saveTrees = () => {
    try {
      sessionStorage.setItem(stateKey, JSON.stringify(Object.fromEntries(
        trees.map(({ tree, key }) => [key, tree.open])
      )));
    } catch {
      // Storage restrictions must not prevent navigation or native tree controls.
    }
  };
  trees.forEach(({ tree }) => tree.addEventListener('toggle', saveTrees));
  window.addEventListener('pagehide', saveTrees);

  // The Cultures heading also opens its overview without losing either tree's state.
  const heading = document.querySelector('.lorebook-sidebar .culture-heading-link');
  const summary = heading?.closest('summary');
  const tree = summary?.parentElement;
  if (!summary || !(tree instanceof HTMLDetailsElement)) return;

  const destination = new URL(heading.href);
  const onOverview = window.location.pathname === destination.pathname;

  summary.addEventListener('click', (event) => {
    if (event.button !== 0 || event.ctrlKey || event.metaKey || event.shiftKey || event.altKey) return;
    event.preventDefault();
    event.stopPropagation();
    const open = !tree.open;
    tree.open = open;
    saveTrees();
    if (onOverview) return;
    window.location.assign(destination.href);
  }, true);
})();
