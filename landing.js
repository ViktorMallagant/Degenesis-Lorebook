const navToggle = document.querySelector("#lorebook-nav-toggle");
const sidebarScrim = document.querySelector("#sidebar-scrim");

const setSidebar = (open) => {
  document.body.classList.toggle("sidebar-open", open);
  navToggle?.setAttribute("aria-expanded", String(open));
};

setSidebar(false);
navToggle?.addEventListener("click", () => setSidebar(!document.body.classList.contains("sidebar-open")));
sidebarScrim?.addEventListener("click", () => setSidebar(false));

document.querySelectorAll('.lorebook-sidebar a[aria-disabled="true"]').forEach((link) => {
  link.addEventListener("click", (event) => event.preventDefault());
});

document.querySelectorAll('.lorebook-sidebar a:not([aria-disabled="true"])').forEach((link) => {
  link.addEventListener("click", () => {
    if (window.matchMedia("(max-width: 760px)").matches) setSidebar(false);
  });
});
