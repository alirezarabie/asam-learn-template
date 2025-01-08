const links = document.getElementById("navbar-links");
const menuButton = document.getElementById("icon-menu");
const navbarOverlay = document.getElementById("navbar-overlay");
const seachBox = document.getElementById("search-box");
const arrowButton = document.querySelectorAll(".dropdown-menu");

arrowButton.forEach((el) =>
  el.addEventListener("click", (event) => {
    console.log(event.target);
    const subMenu = event.target.parentElement.querySelector(".navbar-submenu");
    subMenu.classList.toggle("open");
  })
);
function openMenu() {
  links.classList.toggle("open");
  navbarOverlay.classList.toggle("open");
}

function closeMenu() {
  links.classList.remove("open");
  navbarOverlay.classList.remove("open");
}

function openSearch() {
  seachBox.classList.toggle("open");
}
