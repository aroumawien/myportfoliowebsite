function scrollToSection(id) {
  document.getElementById(id).scrollIntoView({
    behavior: "smooth"
  });
}

document.getElementById("year").textContent = new Date().getFullYear();

// Scroll animation
function reveal() {
  const reveals = document.querySelectorAll(".reveal");

  reveals.forEach(section => {
    const windowHeight = window.innerHeight;
    const elementTop = section.getBoundingClientRect().top;
    const visible = 100;

    if (elementTop < windowHeight - visible) {
      section.classList.add("active");
    }
  });
}

window.addEventListener("scroll", reveal);
reveal();

// Background Image Slider
const slides = document.querySelectorAll(".background-slider img");
let currentSlide = 0;

function changeSlide() {
  slides[currentSlide].classList.remove("active");
  currentSlide = (currentSlide + 1) % slides.length;
  slides[currentSlide].classList.add("active");
}

setInterval(changeSlide, 5000);