/* --- Navigation --- */

// Initialize activeIndex
let activeIndex = 0;

// Get all the slides on the page
const slides = document.getElementsByTagName("article");

// Define event handlers for left and right arrow clicks
const handleLeftClick = () => {
  const nextIndex = activeIndex - 1 >= 0 ? activeIndex - 1 : slides.length - 1;
  
  const currentSlide = document.querySelector(`[data-index="${activeIndex}"]`);
  const nextSlide = document.querySelector(`[data-index="${nextIndex}"]`);
  
  currentSlide.dataset.status = "after";
  nextSlide.dataset.status = "becoming-active-from-before";
  
  setTimeout(() => {
    nextSlide.dataset.status = "active";
    activeIndex = nextIndex;
  });
};

const handleRightClick = () => {
  const nextIndex = activeIndex + 1 <= slides.length - 1 ? activeIndex + 1 : 0;
  
  const currentSlide = document.querySelector(`[data-index="${activeIndex}"]`);
  const nextSlide = document.querySelector(`[data-index="${nextIndex}"]`);
  
  currentSlide.dataset.status = "before";
  nextSlide.dataset.status = "becoming-active-from-after";
  
  setTimeout(() => {
    nextSlide.dataset.status = "active";
    activeIndex = nextIndex;
  });
};

/* --- Mobile Nav Toggle --- */

// Get the navigation element
const nav = document.querySelector("nav");

// Define event handler for mobile navigation button click
const handleNavToggle = () => {  
  nav.dataset.transitionable = "true";
  nav.dataset.toggled = nav.dataset.toggled === "true" ? "false" : "true";
};

// Listen for changes in screen size and update navigation menu accordingly
window.matchMedia("(max-width: 800px)").onchange = e => {
  nav.dataset.transitionable = "false";
  nav.dataset.toggled = "false";
};
