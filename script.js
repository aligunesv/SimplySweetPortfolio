var closeButton = document.querySelector(".close-btn");
var navMenu = document.querySelector(".nav-menu");

var goTopBtn =document.querySelector(".go-top-btn")

closeButton.addEventListener("click", function() {
  if (navMenu.classList.contains("hidden")) {
    navMenu.classList.remove("hidden");
    closeButton.classList.remove("button-off");
  } else {
    navMenu.classList.add("hidden");
    closeButton.classList.add("button-off");
  }
});

window.addEventListener("scroll", function(){
    goTopBtn.classList.toggle("sticky", window.scrollY > 0);
});