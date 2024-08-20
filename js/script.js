let lastScrollTop = 0;
const header = document.getElementById("header");
const menuIcon = document.getElementById("menu-icon");
const newMenu = document.getElementById("new_menu");

window.addEventListener("scroll", () => {
  const scroll = window.pageYOffset || document.documentElement.scrollTop;
  if (scroll > 5) {
    header.classList.add("sticky_header");
  } else {
    header.classList.remove("sticky_header");
  }
  lastScrollTop = scroll <= 0 ? 0 : scroll;
});

menuIcon.addEventListener("click", () => {
  newMenu.classList.toggle("show");
});
