var images = document.querySelectorAll(".modal-image");
var modals = document.querySelectorAll(".modal");
var modalImages = document.querySelectorAll(".modal img");

var button = document.querySelector(".back-to-top");

var fadeSections = document.querySelectorAll(".fade");

// MODAL FUNCTION
// function openCloseModal(image, modal) {
// 	image.addEventListener("click", function() {
// 		modal.style.display = "flex";
// 	})	
// 	window.addEventListener("click", function(event) {
// 	if(event.target == modal) {
// 		modal.style.display = "none";
// 	}
// })
// }

// for(var i = 0; i < modals.length; i++) {
// 	modalImages[i].setAttribute("src", images[i].getAttribute("src"));
// 	openCloseModal(images[i], modals[i]);
// }

// // BACK TO TOP BUTTON
// window.addEventListener("scroll", function() {
// 	if (window.scrollY > 0) {
// 		button.style.display = "block";
// 	} else {
// 		button.style.display = "none";
// 	}
// })

// button.addEventListener("click", function() {
// 	document.body.scrollTop = 0;
// 	document.documentElement.scrollTop = 0;
// })

// CONTENT FADE IN
// function findPosition(thing) {
// 	var y = 0;

// 	while(thing) {
//    	 	y += thing.offsetTop;
//     	thing = thing.offsetParent;
// 	}

// 	return y;
// }


function fadeOnScroll(item, offsetHeight) {
  	item.style.opacity = "0";
  	item.style.webkitTransform = "translateY(20px)";
  	item.style.transition = "all 0.75s ease-in-out";

  	// var signalHeight = findPosition(item) - (window.innerHeight * (4 / 5));


  	window.addEventListener("scroll", function() {
    	if (window.scrollY >= offsetHeight) {
      		item.style.webkitTransform = "translateY(0px)";
      		item.style.opacity = "1";
    	}
  	});
}

var bodyRect = document.body.getBoundingClientRect();
    

// console.log(fadeSections);
var sectionRect;

for(var c = 0; c < fadeSections.length; c++) {
	// console.log(fadeSections[c].offsetTop);
	// console.log("function", findPosition(fadeSections[c]));

	sectionRect = fadeSections[c].getBoundingClientRect();
	offset = sectionRect.top - bodyRect.top;

	// console.log("rect", offset);
	
	fadeOnScroll(fadeSections[c], offset);
}