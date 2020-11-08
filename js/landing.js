var mediaSize = window.innerWidth;
const nav1 = document.querySelector(".nav-left");
const nav2 = document.querySelector(".nav-right");
const desktopNav = document.querySelector(".desktop-menu");
const mainSection = document.querySelector(".main-content");
var topOfNav = mainSection.offsetTop;

const landingContent = document.querySelector(".landing-top");
const landingContent2 = document.querySelector(".arrow");
var landingNavRight = document.querySelector("#landing-nav-right");
var landingNavLeft = document.querySelector("#landing-nav-left");

const landingSection = document.querySelector(".landing");
const landingGreyText = document.querySelector(".landing-intro h1");

var faders = document.querySelectorAll(".will-fade");

var triggerItem = document.querySelector("#impressions-project-preview");
var impressionsLeft = document.querySelector("#impressions-project-preview .left-project-preview");
var impressionsRight = document.querySelector("#impressions-project-preview .right-project-preview");
var fcaRight = document.querySelector("#portal-project-preview .right-project-preview");
var fcaLeft = document.querySelector("#portal-project-preview .left-project-preview");
var thirdspaceRight = document.querySelector("#fca-project-preview .right-project-preview");
var thirdspaceLeft = document.querySelector("#fca-project-preview .left-project-preview");
var impressionsPreview = document.querySelector("#impressions-project-preview");
var fcaPreview = document.querySelector("#portal-project-preview");
var thirdspacePreview = document.querySelector("#fca-project-preview");
var previewItem = "impressions";
var button1 = document.querySelector("#button-1");
var button2 = document.querySelector("#button-2");
var button3 = document.querySelector("#button-3");

var previewContainer = document.querySelector(".desktop-project-preview-container");
var mobilePreview = document.querySelector(".mobile-project-preview");
var scrollOuter = document.querySelector(".scroll-outer");
var scrollInner = document.querySelector(".scroll-inner");

//  LOAD AT TOP OF PAGE
window.onunload = function() {
  window.scroll({top: 0});
};


window.addEventListener("resize", function() {
  topOfNav = mainSection.offsetTop;
  mediaSize = window.innerWidth;
})

// STICKY NAV
var prevScrollpos = window.pageYOffset;

  window.addEventListener("scroll", function() {
    var currentScrollpos = window.pageYOffset;

    if(window.scrollY >= topOfNav) {
      if (mediaSize <= 575) {
        if (prevScrollpos > currentScrollpos) {
          nav1.style.transform = "translateY(0px)";
          nav2.style.transform = "translateY(0px)";
          desktopNav.style.transform = "translateY(0px)";
        } else {
          nav1.style.transform = "translateY(-" + nav1.clientHeight + "px)";
          nav2.style.transform = "translateY(-" + nav1.clientHeight + "px)";
          desktopNav.style.transform = "translateY(-" + nav1.clientHeight + "px)";
        }
        prevScrollpos = currentScrollpos;
      }
    } 
  })

// LANDING TEXT POSITION
window.addEventListener("scroll", function() {
  if (window.scrollY >= topOfNav - window.innerHeight) {
    landingContent.style.position = "absolute";
    landingContent.style.bottom = "0";
    landingContent.style.top = "auto";
    landingContent2.style.opacity = "0";
    landingContent2.style.animationFillMode = "none";
  } else {
    landingContent.style.position = "fixed";
    landingContent2.style.opacity = "0.8";
  }
});

// LANDING BACKGROUND COLOR
window.addEventListener("scroll", function() {
  if (window.scrollY >= landingSection.offsetHeight * (0.9)) {
    landingSection.classList.add("change-color");
    landingGreyText.classList.add("change-text-color");
    landingNavLeft.style.opacity = "1";
    landingNavRight.style.opacity = "1";
  } else if (window.scrollY < landingSection.offsetHeight) {
    landingSection.classList.remove("change-color");
    landingGreyText.classList.remove("change-text-color");
    landingNavLeft.style.opacity = "0";
    landingNavRight.style.opacity = "0";
  }
})

// SCROLL DOWN BUTTON 
landingContent2.addEventListener("click", function() {
  window.scroll({top: topOfNav, behavior: "smooth"});
})

// DESKTOP PROJECT PREVIEW
scrollInner.style.paddingBottom = ((window.innerHeight - previewContainer.clientHeight) / 2) + "px";

function impressionsAnimate() {
  impressionsPreview.style.zIndex = "1";
  impressionsRight.classList.add("animate");
  impressionsLeft.classList.add("animate");
  previewItem = "impressions";
}

function impressionsUnanimate() {
  impressionsLeft.classList.add("animate-on-scroll");
  impressionsRight.classList.add("animate-on-scroll");
  impressionsPreview.style.zIndex = "-1";
  impressionsRight.classList.remove("animate");
  impressionsLeft.classList.remove("animate");
}

function fcaAnimate() {
  fcaPreview.style.zIndex = "1";
  fcaRight.classList.add("animate");
  fcaLeft.classList.add("animate");
  previewItem = "fca"; 
}

function fcaUnanimate() {
  fcaPreview.style.zIndex = "-1";
  fcaRight.classList.remove("animate");
  fcaLeft.classList.remove("animate");
}

function thirdspaceAnimate() {
  thirdspacePreview.style.zIndex = "1";
  thirdspaceRight.classList.add("animate");
  thirdspaceLeft.classList.add("animate");    
  previewItem = "thirdspace";
}

function thirdspaceUnanimate() {
  thirdspacePreview.style.zIndex = "-1";
  thirdspaceRight.classList.remove("animate");
  thirdspaceLeft.classList.remove("animate");
}

// (button functions)
button1.addEventListener("click", function() {
  button1.style.backgroundColor = "rgba(113,121,143, 1)";
  button2.style.backgroundColor = "rgba(113,121,143, 0.1)";
  button3.style.backgroundColor = "rgba(113,121,143, 0.1)";
  if (previewItem === "fca") {
    impressionsAnimate();
    fcaUnanimate();
  } else if (previewItem === "thirdspace") {
    impressionsAnimate();
    thirdspaceUnanimate();
  }
})

button2.addEventListener("click", function() {
  button2.style.backgroundColor = "rgba(113,121,143, 1)";
  button3.style.backgroundColor = "rgba(113,121,143, 0.1)";
  button1.style.backgroundColor = "rgba(113,121,143, 0.1)";
  if (previewItem === "impressions") {
    fcaAnimate();
    impressionsUnanimate();       
  } else if (previewItem === "thirdspace") {
    fcaAnimate();
    thirdspaceUnanimate();  
  }
});

button3.addEventListener("click", function() {
  button3.style.backgroundColor = "rgba(113,121,143, 1)";
  button1.style.backgroundColor = "rgba(113,121,143, 0.1)";
  button2.style.backgroundColor = "rgba(113,121,143, 0.1)";
  if (previewItem === "impressions") {
    thirdspaceAnimate();
    impressionsUnanimate();
  } else if (previewItem === "fca") {
    thirdspaceAnimate();
    fcaUnanimate()
  }
})

// (desktop preview container fade in)
const animateOptions = {
  threshold: 0.5
};

const animateOnScroll = new IntersectionObserver(function(entries, animateOnScroll) {
  impressionsLeft.classList.add("animate-on-scroll");
  impressionsRight.classList.add("animate-on-scroll");
  previewContainer.classList.add("fade-in");
  if (!entries[0].isIntersecting) {
    return;
  } else {
    previewContainer.classList.add("apply");
    impressionsLeft.classList.add("animate");
    impressionsRight.classList.add("animate");
    animateOnScroll.unobserve(entries[0].target);
  }
}, animateOptions);

animateOnScroll.observe(triggerItem);

// (mobile preview container fade in)
const mobileAnimate = new IntersectionObserver(function(entries, mobileAnimate) {
  mobilePreview.classList.add("fade-in");
    if (!entries[0].isIntersecting) {
      return;
    } else {
      mobilePreview.classList.add("apply");
      mobileAnimate.unobserve(entries[0].target);
  }
}, animateOptions);

mobileAnimate.observe(mobilePreview);

// (scrolljacking)
function previewOffset(element) {
  var yPosition = 0;

  while(element) {
    yPosition += element.offsetTop;
    element = element.offsetParent;
  }

  return yPosition;
}

var previewHeight = previewOffset(scrollInner);

scrollOuter.style.height = (window.innerHeight * 3) + "px";

window.addEventListener("resize", function() {
  scrollInner.style.paddingBottom = ((window.innerHeight - previewContainer.clientHeight) / 2) + "px";
})

window.addEventListener("scroll", function() {
  if (window.pageYOffset >= previewHeight) {
    scrollInner.style.position = "sticky";
    scrollInner.style.top = "0";
  } 
  if (window.pageYOffset >= previewHeight && window.pageYOffset < (previewHeight + window.innerHeight * 0.75)) {
    button1.style.backgroundColor = "rgba(113,121,143, 1)";
    button2.style.backgroundColor = "rgba(113,121,143, 0.1)";
    button3.style.backgroundColor = "rgba(113,121,143, 0.1)";
    if (previewItem === "fca") {
      impressionsAnimate();
      fcaUnanimate();
    } else if (previewItem === "thirdspace") {
      impressionsAnimate();
      thirdspaceUnanimate();
    }
  } 
  if (window.pageYOffset >= (previewHeight + window.innerHeight * 0.75) && window.pageYOffset < (previewHeight + window.innerHeight * 1.5)) {
    button2.style.backgroundColor = "rgba(113,121,143, 1)";
    button3.style.backgroundColor = "rgba(113,121,143, 0.1)";
    button1.style.backgroundColor = "rgba(113,121,143, 0.1)";
    if (previewItem === "impressions") {
      fcaAnimate();
      impressionsUnanimate();       
    } else if (previewItem === "thirdspace") {
      fcaAnimate();
      thirdspaceUnanimate();  
    }
  } 
  if (window.pageYOffset >= (previewHeight + window.innerHeight * 1.5)) {
    button3.style.backgroundColor = "rgba(113,121,143, 1)";
    button1.style.backgroundColor = "rgba(113,121,143, 0.1)";
    button2.style.backgroundColor = "rgba(113,121,143, 0.1)";
    if (previewItem === "impressions") {
      thirdspaceAnimate();
      impressionsUnanimate();
    } else if (previewItem === "fca") {
      thirdspaceAnimate();
      fcaUnanimate()
    }
  }
});

//  SUBTITLE FADE IN
const appearOptions = {
  threshold: 1
};

const appearOnScroll = new IntersectionObserver(function(entries, appearOnScroll) {
  entries.forEach(entry => {
    entry.target.classList.add("fade-in");
    if (!entry.isIntersecting) {
      return;
    } else {
      entry.target.classList.add("apply");
      appearOnScroll.unobserve(entry.target);
    }
  })
}, appearOptions);

faders.forEach(fader => {
  appearOnScroll.observe(fader);
});
