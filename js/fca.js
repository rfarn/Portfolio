var interactions = document.querySelectorAll(".memory-interaction img");
var jpgs = ["../media/process/FCA_memories1.jpg", "../media/process/FCA_memories2.jpg", "../media/process/FCA_memories3.jpg", "../media/process/FCA_memories4.jpg", "../media/process/FCA_memories5.jpg"];
var gifs = ["../media/process/FCA_memories1.gif", "../media/process/FCA_memories2.gif", "../media/process/FCA_memories3.gif", "../media/process/FCA_memories4.gif", "../media/process/FCA_memories5.gif"];

function getPosition(element) {
    var yPosition = 0;

    while(element) {
        yPosition += (element.offsetTop - element.scrollTop + element.clientTop);
        element = element.offsetParent;
    }

    return yPosition;
}

// GIF PLAY ON SCROLL
window.addEventListener("load", function() {
	function gifOnScroll(feature, jpg, gif) {
		var topOfFeature = getPosition(feature);

		window.addEventListener("scroll", function() {
			if (window.scrollY >= (topOfFeature - window.innerHeight * 2 / 3)) {
				if(feature.getAttribute("src") === jpg) {
					feature.setAttribute("src", gif);
				}
			} else {
				feature.setAttribute("src", jpg);
			}

			if (window.scrollY >= topOfFeature) {
				if(feature.getAttribute("src") === gif) {
					feature.setAttribute("src", jpg);
				}
			}
		})
	}

	gifOnScroll(interactions[0], "../media/process/FCA_memories1.jpg", "../media/process/FCA_memories1.gif");
	gifOnScroll(interactions[1], "../media/process/FCA_memories2.jpg", "../media/process/FCA_memories2.gif");
	gifOnScroll(interactions[2], "../media/process/FCA_memories3.jpg", "../media/process/FCA_memories3.gif");
	gifOnScroll(interactions[3], "../media/process/FCA_memories4.jpg", "../media/process/FCA_memories4.gif");
	gifOnScroll(interactions[4], "../media/process/FCA_memories5.jpg", "../media/process/FCA_memories5.gif");
})
