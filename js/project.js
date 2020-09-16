var mainNavRight = document.querySelector(".nav-right");
var mainNavLeft = document.querySelector(".nav-left");
var navItems = document.querySelector(".desktop-menu");

var images = document.querySelectorAll(".modal-image");
var modals = document.querySelectorAll(".modal");
var modalImages = document.querySelectorAll(".modal img");

var button = document.querySelector(".back-to-top");

var fadeSections = document.querySelectorAll(".will-fade");

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

  if (mediaSize <= 575 && window.pageYOffset > 0) {
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
  } else {
    mainNavRight.style.transform = "translateY(0px)";
    mainNavLeft.style.transform = "translateY(0px)";
    navItems.style.transform = "translateY(0px)";
  }
})

// MODAL FUNCTION
if (mediaSize > 575) {
  function openCloseModal(image, modal) {
  	image.addEventListener("click", function() {
  		modal.style.display = "flex";
  	})	
  	window.addEventListener("click", function(event) {
  	if(event.target == modal) {
  		modal.style.display = "none";
  	}
  })
  }

  for(var i = 0; i < modals.length; i++) {
  	modalImages[i].setAttribute("src", images[i].getAttribute("src"));
  	openCloseModal(images[i], modals[i]);
  }
}

// // BACK TO TOP BUTTON
window.addEventListener("scroll", function() {
	if (window.scrollY > 0) {
		button.style.display = "block";
	} else {
		button.style.display = "none";
	}
})

button.addEventListener("click", function() {
	document.body.scrollTop = 0;
	document.documentElement.scrollTop = 0;
})

// CONTENT FADE IN
const appearOptions = {};

const appearOnScroll = new IntersectionObserver(function(entries, appearOnScroll) {
  entries.forEach(entry => {
  	entry.target.classList.add("fade");
    if (!entry.isIntersecting) {
      return;
    } else {
      entry.target.classList.add("appear");
      appearOnScroll.unobserve(entry.target);
    }
  })
}, appearOptions);

fadeSections.forEach(fadeSection => {
  appearOnScroll.observe(fadeSection);
});