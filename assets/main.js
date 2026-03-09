(() => {
  function setDates() {
    const now = new Date();
    const dateString = now.toISOString().slice(0, 10);

    const year = document.getElementById("year");
    const updated = document.getElementById("updated");
    const year2 = document.getElementById("year-2");
    const updated2 = document.getElementById("updated-2");

    if (year) year.textContent = String(now.getFullYear());
    if (updated) updated.textContent = dateString;
    if (year2) year2.textContent = String(now.getFullYear());
    if (updated2) updated2.textContent = dateString;
  }

  function currentRoute() {
    const hash = window.location.hash || "#home";
    if (hash === "#publications-page") return "publications-page";
    return "home";
  }

  function updateRoute() {
    const route = currentRoute();

    const homePage = document.getElementById("home-page");
    const publicationsPage = document.getElementById("publications-page-view");
    const navLinks = document.querySelectorAll(".nav a[data-route]");

    if (homePage && publicationsPage) {
      if (route === "publications-page") {
        homePage.classList.add("hidden");
        publicationsPage.classList.remove("hidden");
      } else {
        homePage.classList.remove("hidden");
        publicationsPage.classList.add("hidden");
      }
    }

    navLinks.forEach((link) => {
      const target = link.getAttribute("data-route");
      if (target === route) {
        link.classList.add("active");
      } else {
        link.classList.remove("active");
      }
    });

    window.scrollTo(0, 0);
  }

  window.addEventListener("hashchange", updateRoute);

  document.addEventListener("DOMContentLoaded", () => {
    setDates();

    if (!window.location.hash) {
      window.location.hash = "#home";
    }

    updateRoute();
  });
})();