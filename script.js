// Wait for the DOM to load before executing scripts
document.addEventListener('DOMContentLoaded', () => {
    /* ========= Animate Progress Bars on Scroll ========= */
    const progressBars = document.querySelectorAll('.progress-bar');
  
    // Intersection Observer options
    const observerOptions = {
      threshold: 0.5
    };
  
    // Callback function to animate progress bars when they become visible
    const progressObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          // Simply re-setting the width to trigger the CSS transition
          const progressBar = entry.target;
          progressBar.style.width = progressBar.style.width;
          observer.unobserve(progressBar);
        }
      });
    }, observerOptions);
  
    // Observe each progress bar element
    progressBars.forEach(bar => {
      progressObserver.observe(bar);
    });
  
    /* ========= Smooth Scrolling for Navigation Links ========= */
    const navLinks = document.querySelectorAll('nav ul li a');
    navLinks.forEach(link => {
      link.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').slice(1);
        const targetSection = document.getElementById(targetId);
        if (targetSection) {
          window.scroll({
            top: targetSection.offsetTop - 50, // Adjust offset for fixed nav
            behavior: 'smooth'
          });
        }
      });
    });
  });
  