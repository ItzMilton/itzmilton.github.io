function getCurrentRoute() {
  const hash = window.location.hash.replace("#", "").trim();
  if (hash === "publications") {
    return "publications";
  }
  return "home";
}

function updateRoute() {
  const route = getCurrentRoute();

  const homePage = document.getElementById("home-page");
  const publicationsPage = document.getElementById("publications-page");
  const navLinks = document.querySelectorAll(".nav-link");

  if (!homePage || !publicationsPage) return;

  homePage.classList.toggle("active", route === "home");
  publicationsPage.classList.toggle("active", route === "publications");

  navLinks.forEach((link) => {
    const linkRoute = link.dataset.route;
    link.classList.toggle("active", linkRoute === route);
  });

  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
}

window.addEventListener("hashchange", updateRoute);

window.addEventListener("DOMContentLoaded", () => {
  if (!window.location.hash) {
    window.location.hash = "#home";
  }
  updateRoute();
});