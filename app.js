const hiddenNavbarEl = document.getElementById("hiddenNavbar");

const showNavEl = document.getElementById("showNav");

const hLinksEl = document.querySelectorAll("#hLinks");

const moonBtn = document.getElementById("moon");

const bodyEl = document.querySelector("body");

showNavEl.addEventListener("click", () => {
  hiddenNavbarEl.classList.toggle("hidden");
  showNavEl.classList.toggle("bg-white");
});

hLinksEl.forEach((link) => {
  link.addEventListener("click", () => {
    hiddenNavbarEl.classList.toggle("hidden");
    showNavEl.classList.toggle("bg-white");
  });
});

moonBtn.addEventListener("click", () => {
  bodyEl.classList.toggle("dark");
  moonBtn.classList.toggle("dark:text-white");
});
