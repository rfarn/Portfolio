var features = document.querySelectorAll(".feature-image");
var jpgs = ["../media/process/Impressions_feature1pic.jpg", "../media/process/Impressions_feature2pic.jpg", "../media/process/Impressions_feature3pic.jpg", "../media/process/Impressions_feature4pic.jpg"];
var gifs = ["../media/process/Impressions_feature1.gif", "../media/process/Impressions_feature2.gif", "../media/process/Impressions_feature3.gif", "../media/process/Impressions_feature4.gif"];


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
			if (window.scrollY >= (topOfFeature - window.innerHeight * 2 / 3) || window.pageYOffset >= (topOfFeature - window.innerHeight * 2 / 3)) {
				
				if(feature.getAttribute("src") === jpg) {
					feature.setAttribute("src", gif);
				}
			} else {
				feature.setAttribute("src", jpg);
			}

			if (window.scrollY >= topOfFeature || window.pageYOffset >= topOfFeature) {
				if(feature.getAttribute("src") === gif) {
					feature.setAttribute("src", jpg);
				}
			}
		})
	}

	gifOnScroll(features[0], "../media/process/Impressions_feature1pic.jpg", "../media/process/Impressions_feature1.gif");
	gifOnScroll(features[1], "../media/process/Impressions_feature2pic.jpg", "../media/process/Impressions_feature2.gif");
	gifOnScroll(features[2], "../media/process/Impressions_feature3pic.jpg", "../media/process/Impressions_feature3.gif");
	gifOnScroll(features[3], "../media/process/Impressions_feature4pic.jpg", "../media/process/Impressions_feature4.gif");
} )
