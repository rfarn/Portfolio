var mediaSize = window.innerWidth;
const nav1 = document.querySelector(".nav-left");
const nav2 = document.querySelector(".nav-right");
const desktopNav = document.querySelector(".desktop-menu");
const mainSection = document.querySelector(".main-content");
var topOfNav = mainSection.offsetTop;

const landingContent = document.querySelector(".landing-top");
const landingContent2 = document.querySelector(".arrow");

const landingSection = document.querySelector(".landing");
const landingGreyText = document.querySelector(".landing-intro h1");

var faders = document.querySelectorAll(".will-fade");

var triggerItem = document.querySelector("#impressions-project-preview");
var impressionsLeft = document.querySelector("#impressions-project-preview .left-project-preview");
var impressionsRight = document.querySelector("#impressions-project-preview .right-project-preview");
var fcaRight = document.querySelector("#fca-project-preview .right-project-preview");
var fcaLeft = document.querySelector("#fca-project-preview .left-project-preview");
var thirdspaceRight = document.querySelector("#thirdspace-project-preview .right-project-preview");
var thirdspaceLeft = document.querySelector("#thirdspace-project-preview .left-project-preview");
var impressionsPreview = document.querySelector("#impressions-project-preview");
var fcaPreview = document.querySelector("#fca-project-preview");
var thirdspacePreview = document.querySelector("#thirdspace-project-preview");
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
  window.scrollTo(0, 0);
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
    nav1.style.position = "fixed";
    nav1.style.top = "0";
    nav2.style.position = "fixed";
    nav2.style.top = "0";
    desktopNav.style.position = "fixed";
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
  } else {
    nav1.style.position = "absolute";
    nav2.style.position = "absolute";
    desktopNav.style.position = "absolute";
  }
})
  

  

//LANDING TEXT ANIMATION
function fade(item) {
  const text = document.querySelector(item);
  const strText = text.textContent;
  const splitText = strText.split("");

  text.textContent = "";
  for (let i = 0; i < splitText.length; i++) {
    text.innerHTML += "<span>" + splitText[i] + "</span>";
  }

  let char = 0;
  let timer = setInterval(onTick, 50);

  function onTick() {
    const span = text.querySelectorAll("span")[char];
    span.classList.add("fade");
    char++;
    if (char === splitText.length) {
      complete();
      return;
    }
  }

  function complete() {
    clearInterval(timer);
    timer = null;
  }
}

fade(".landing-intro h1");
fade(".landing-intro h2:first-of-type");
fade(".landing-intro h2:last-of-type");

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
  if (window.scrollY >= landingSection.offsetHeight * (1/2)) {
    landingSection.classList.add("change-color");
    landingGreyText.classList.add("change-text-color");
  } else if (window.scrollY < landingSection.offsetHeight) {
    landingSection.classList.remove("change-color");
    landingGreyText.classList.remove("change-text-color");
  }
})

// DESKTOP PROJECT PREVIEW
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

scrollInner.style.paddingBottom = ((window.innerHeight - previewContainer.clientHeight) / 2) + "px";
scrollOuter.style.height = (window.innerHeight * 4) + "px";

window.addEventListener("resize", function() {
  scrollInner.style.paddingBottom = ((window.innerHeight - previewContainer.clientHeight) / 2) + "px";
})

window.addEventListener("scroll", function() {
  if (window.pageYOffset >= previewHeight) {
    scrollInner.style.position = "sticky";
    scrollInner.style.top = "0";
  } 
  console.log(window.innerHeight);
  if (window.pageYOffset >= previewHeight && window.pageYOffset < (previewHeight + window.innerHeight)) {
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
  if (window.pageYOffset >= (previewHeight + window.innerHeight) && window.pageYOffset < (previewHeight + window.innerHeight * 2)) {
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
  if (window.pageYOffset >= (previewHeight + window.innerHeight * 2)) {
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
