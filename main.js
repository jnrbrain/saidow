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

  // ==========================================
  // BUTTON & CARD SPARK PARTICLE EFFECT
  // ==========================================
  const sparkTargets = document.querySelectorAll('.btn-primary, .btn-contact, .hub-card, .portfolio-item, .nav-link, .skill-pill');
  const sparkColors = ['#6366f1', '#ec4899', '#f59e0b', '#38bdf8', '#a855f7', '#ffffff'];

  let lastSparkTime = 0;

  sparkTargets.forEach(target => {
    target.addEventListener('mousemove', (e) => {
      const now = Date.now();
      if (now - lastSparkTime < 25) return; // Throttle to 40fps generation for buttery smoothness
      lastSparkTime = now;

      createSparks(e.clientX, e.clientY, 3);
    });
  });

  function createSparks(x, y, count = 3) {
    for (let i = 0; i < count; i++) {
      const spark = document.createElement('div');
      spark.classList.add('spark-particle');

      const size = Math.random() * 5 + 3; // 3px to 8px
      const color = sparkColors[Math.floor(Math.random() * sparkColors.length)];

      const angle = Math.random() * Math.PI * 2;
      const distance = Math.random() * 45 + 15; // 15px to 60px distance
      const dx = `${Math.cos(angle) * distance}px`;
      const dy = `${Math.sin(angle) * distance}px`;

      spark.style.width = `${size}px`;
      spark.style.height = `${size}px`;
      spark.style.backgroundColor = color;
      spark.style.color = color;
      spark.style.left = `${x - size / 2}px`;
      spark.style.top = `${y - size / 2}px`;
      spark.style.setProperty('--dx', dx);
      spark.style.setProperty('--dy', dy);

      document.body.appendChild(spark);

      setTimeout(() => {
        spark.remove();
      }, 600);
    }
  }
});
