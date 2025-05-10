document.addEventListener('DOMContentLoaded', () => {
  const productList = document.getElementById('productList');
  
  const prevButton = document.querySelector('.slider-wrapper .prev-btn');
  const nextButton = document.querySelector('.slider-wrapper .next-btn');

  console.log('Prev Button:', prevButton);
  console.log('Next Button:', nextButton);

  if (!prevButton || !nextButton) {
      console.error('Prev or Next button not found!');
      return;
  }

  let scrollAmount = 0;
  const scrollPerClick = 170;

  nextButton.addEventListener('click', () => {
      scrollAmount += scrollPerClick;

      if (scrollAmount > productList.scrollWidth - productList.clientWidth) {
          scrollAmount = productList.scrollWidth - productList.clientWidth;
      }

      productList.scrollTo({
          left: scrollAmount,
          behavior: 'smooth'
      });
  });

  prevButton.addEventListener('click', () => {
      scrollAmount -= scrollPerClick;

      if (scrollAmount < 0) {
          scrollAmount = 0;
      }

      productList.scrollTo({
          left: scrollAmount,
          behavior: 'smooth'
      });
  });
});

document.addEventListener('DOMContentLoaded', function() {
    const reviewCards = document.querySelectorAll('.card-review');
    
    // Function to handle card flipping
    function handleCardFlip(card) {
        const isFlipped = card.style.transform === 'rotateY(180deg)';
        card.style.transform = isFlipped ? 'rotateY(0deg)' : 'rotateY(180deg)';
    }

    // For desktop - hover effect
    reviewCards.forEach(card => {
        // Mouse enter (hover in)
        card.addEventListener('mouseenter', function() {
            if (window.innerWidth > 768) {
                this.style.transform = 'rotateY(180deg)';
            }
        });
        
        // Mouse leave (hover out)
        card.addEventListener('mouseleave', function() {
            if (window.innerWidth > 768) {
                this.style.transform = 'rotateY(0deg)';
            }
        });
    });
    
    
    // Animation for cards when page loads
    reviewCards.forEach((card, index) => {
        
        card.style.opacity = '0';
        card.style.transform = 'translateY(50px) rotateY(0deg)';
        card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        
        
        setTimeout(() => {
            card.style.opacity = '1';
            card.style.transform = 'translateY(0) rotateY(0deg)';
        }, index * 200);
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const aboutSection = document.querySelector('.about-section');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                aboutSection.classList.add('visible');
            }
        });
    }, { threshold: 0.3 });
    
    observer.observe(aboutSection);
});