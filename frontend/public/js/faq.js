// Optional: Scroll effect to highlight navbar items or change style on scroll
window.addEventListener("scroll", () => {
  const navbar = document.querySelector(".navbar");
  if (window.scrollY > 50) {
    navbar.style.backgroundColor = "rgba(255, 255, 255, 0.9)";
    navbar.style.backdropFilter = "blur(10px)";
    navbar.style.boxShadow = "0 4px 10px rgba(0,0,0,0.1)";
  } else {
    navbar.style.backgroundColor = "transparent";
    navbar.style.boxShadow = "none";
  }
});

// Slide-up image when it comes into view
document.addEventListener("DOMContentLoaded", function() {
  const slideImg = document.querySelector(".about-img img");
  
  // Only proceed if the element exists
  if (slideImg) {
    window.addEventListener("scroll", () => {
      const rect = slideImg.getBoundingClientRect();
      if (rect.top < window.innerHeight - 100) {
        slideImg.classList.add("visible");
      }
    });
  } else {
    console.error("Could not find .about-img img element");
  }

  let lastScrollTop = 0;
  const slideImgs = document.querySelectorAll(".img-box img, .img-box video");
  const navbar = document.querySelector(".navbar"); // Define navbar here

  window.addEventListener("scroll", () => {
    slideImgs.forEach(slideImg => {
      const rect = slideImg.getBoundingClientRect();
      if (rect.top < window.innerHeight - 100) {
        slideImg.classList.add("visible");
      }
    });
  });

  window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset || document.documentElement.scrollTop;

    if (currentScroll > lastScrollTop) {
      // User scrolled down -> hide navbar
      navbar.classList.add('navbar-hidden');
    } else {
      // User scrolled up -> show navbar
      navbar.classList.remove('navbar-hidden');
    }

    lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
  });

  function scrollReviews(direction) {
    const container = document.getElementById('reviewsScroll');
    const scrollAmount = 320; // Adjust based on card width + gap

    if (direction === 'left') {
      container.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
    } else {
      container.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  }

  
}); // Closing DOMContentLoaded