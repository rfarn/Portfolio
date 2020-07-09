var images = document.querySelectorAll(".modal-image");
var modals = document.querySelectorAll(".modal");
var modalImages = document.querySelectorAll(".modal img");

var button = document.querySelector(".back-to-top");

var fadeSections = document.querySelectorAll(".will-fade");

// MODAL FUNCTION
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