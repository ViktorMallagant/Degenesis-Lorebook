// Keep sidebar trees open across entries until their own heading closes them.
(() => {
  const trees = Array.from(document.querySelectorAll('.lorebook-sidebar details')).map((tree) => ({
    tree,
    key: tree.querySelector('summary')?.textContent.trim().toLowerCase()
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

  // Each main heading opens its overview without losing either tree's state.
  document.querySelectorAll('.lorebook-sidebar .culture-heading-link, .lorebook-sidebar .cult-heading-link, .lorebook-sidebar .concept-heading-link, .lorebook-sidebar .fauna-heading-link, .lorebook-sidebar .amsumos-heading-link, .lorebook-sidebar .sleepers-heading-link, .lorebook-sidebar .marauders-heading-link, .lorebook-sidebar .psychonauts-heading-link, .lorebook-sidebar .clanners-heading-link').forEach((heading) => {
    const summary = heading.closest('summary');
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
  });
})();
