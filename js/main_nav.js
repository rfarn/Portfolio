var mainNavRight = document.querySelector(".nav-right");
var mainNavLeft = document.querySelector(".nav-left");
var navItems = document.querySelector(".desktop-menu");
var mediaSize = window.innerWidth;

window.addEventListener("resize", function() {
  mediaSize = window.innerWidth;
})

// NAV APPEAR ON SCROLL
var prevScrollpos = window.pageYOffset;

window.addEventListener("scroll", function() {
	var currentScrollpos = window.pageYOffset;

	mainNavRight.style.position = "fixed";
    mainNavRight.style.top = "0";
    mainNavLeft.style.position = "fixed";
    mainNavLeft.style.top = "0";
    if (mediaSize <= 499) {
         if (prevScrollpos > currentScrollpos) {
            mainNavRight.style.transform = "translateY(0px)";
            mainNavLeft.style.transform = "translateY(0px)";
            navItems.style.transform = "translateY(0px)";
        } else {
            mainNavRight.style.transform = "translateY(-" + mainNavRight.clientHeight + "px)";
            mainNavLeft.style.transform = "translateY(-" + mainNavRight.clientHeight + "px)";
            navItems.style.transform = "translateY(-" + mainNavRight.clientHeight + "px)";
        }
        prevScrollpos = currentScrollpos;
    }
   
})