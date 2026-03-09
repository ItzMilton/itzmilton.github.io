(() => {
  const now = new Date();
  const year = document.getElementById("year");
  const updated = document.getElementById("updated");
  if (year) year.textContent = String(now.getFullYear());
  if (updated) updated.textContent = now.toISOString().slice(0, 10);

  const btn = document.querySelector('[data-action="toggle-news"]');
  const list = document.querySelector("[data-news]");
  if (btn && list) {
    btn.addEventListener("click", () => {
      const hidden = list.style.display === "none";
      list.style.display = hidden ? "" : "none";
      btn.textContent = hidden ? "Collapse" : "Expand";
      btn.setAttribute("aria-expanded", hidden ? "true" : "false");
    });
  }
})();