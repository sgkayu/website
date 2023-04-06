const navbarNav = document.querySelector(".navigasi");
document.querySelector("#menu").onclick = () => {
navbarNav.classList.toggle("active");
};
var hamburger = document.querySelector("#menu");
document.addEventListener("click",function(e) {
  if(!navbarNav.contains(e.target) && !hamburger.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
});