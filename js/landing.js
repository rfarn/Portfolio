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
var button = document.querySelector("#preview-button");
var fcaRight = document.querySelector("#fca-project-preview .right-project-preview");
var fcaLeft = document.querySelector("#fca-project-preview .left-project-preview");
var thirdspaceRight = document.querySelector("#thirdspace-project-preview .right-project-preview");
var thirdspaceLeft = document.querySelector("#thirdspace-project-preview .left-project-preview");
var impressionsPreview = document.querySelector("#impressions-project-preview");
var fcaPreview = document.querySelector("#fca-project-preview");
var thirdspacePreview = document.querySelector("#thirdspace-project-preview");
var previewItem = "impressions";

//  LOAD AT TOP OF PAGE
window.onunload = function() {
  window.scrollTo(0, 0);
};

window.addEventListener("resize", function() {
  topOfNav = mainSection.offsetTop;
})

// STICKY NAV
window.addEventListener("scroll", function() {
  if (window.scrollY >= topOfNav) {
    nav1.style.position = "fixed";
    nav1.style.top = "0";
    nav2.style.position = "fixed";
    nav2.style.top = "0";
    desktopNav.style.position = "fixed";
  } else {
    nav1.style.position = "absolute";
    nav2.style.position = "absolute";
    desktopNav.style.position = "absolute";

  }
});

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
button.addEventListener("click", function() {
  if(previewItem === "impressions") {
    impressionsLeft.classList.add("animate-on-scroll");
    impressionsRight.classList.add("animate-on-scroll");
    fcaPreview.style.zIndex = "1";
    fcaRight.classList.add("animate");
    fcaLeft.classList.add("animate");
    impressionsPreview.style.zIndex = "-1";
    impressionsRight.classList.remove("animate");
    impressionsLeft.classList.remove("animate");
    previewItem = "fca";
  } else if (previewItem === "fca") {
    button.style.transform = "rotate(180deg)";
    thirdspacePreview.style.zIndex = "1";
    thirdspaceRight.classList.add("animate");
    thirdspaceLeft.classList.add("animate");
    fcaPreview.style.zIndex = "-1";
    fcaRight.classList.remove("animate");
    fcaLeft.classList.remove("animate");
    previewItem = "thirdspace";
  } else if (previewItem === "thirdspace") {
    button.style.transform = "rotate(0deg)";
    impressionsPreview.style.zIndex = "1";
    impressionsRight.classList.add("animate");
    impressionsLeft.classList.add("animate");
    thirdspacePreview.style.zIndex = "-1";
    thirdspaceRight.classList.remove("animate");
    thirdspaceLeft.classList.remove("animate");
    previewItem = "impressions";
  }
});

const animateOptions = {
  threshold: 0.5
};

const animateOnScroll = new IntersectionObserver(function(entries, animateOnScroll) {
  impressionsLeft.classList.add("animate-on-scroll");
  impressionsRight.classList.add("animate-on-scroll");
  if (!entries[0].isIntersecting) {
    return;
  } else {
    impressionsLeft.classList.add("animate");
    impressionsRight.classList.add("animate");
    animateOnScroll.unobserve(entries[0].target);
  }
}, animateOptions);

animateOnScroll.observe(triggerItem);

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
