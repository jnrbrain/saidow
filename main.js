// ==========================================
// SAIDOW.COM - MAIN JAVASCRIPT
// ==========================================

document.addEventListener('DOMContentLoaded', () => {
  console.log("Saidow.com Portfolio Initialized.");

  // Highlight active navbar link on scroll
  const sections = document.querySelectorAll('section');
  const navLinks = document.querySelectorAll('.nav-link');

  window.addEventListener('scroll', () => {
    let current = '';
    
    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.clientHeight;
      if (pageYOffset >= (sectionTop - 200)) {
        current = section.getAttribute('id');
      }
    });

    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === `#${current}`) {
        link.classList.add('active');
      }
    });
  });

  // Contact form submission handler (Placeholder message)
  const contactForm = document.getElementById('contact-form');
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      // If formspree is configured, this will submit normally.
      // Else prevent default to prevent error during offline testing.
      if (contactForm.getAttribute('action').includes('sample')) {
        e.preventDefault();
        alert("Teşekkürler! İletişim formu yakında Formspree entegrasyonu ile tam aktif olacaktır.");
      }
    });
  }
});
