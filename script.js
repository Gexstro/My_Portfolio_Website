const hamburger = document.querySelector(".hamburger");
const menu = document.querySelector(".nav-links");

hamburger.addEventListener("click", function(){
  menu.classList.toggle("active-hamburger");
});