// ==========================================
// SAIDOW.COM - INTERACTIONS & MOTION
// Her özellik ilgili element sayfada varsa devreye girer.
// ==========================================

document.addEventListener('DOMContentLoaded', () => {
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const isTouch = window.matchMedia('(hover: none)').matches;

  initScrollSpy();
  initNavbar();
  initReveal();
  initCounters();
  initFilters();
  initLightbox();

  if (!reducedMotion && !isTouch) {
    initCursor();
    initMagnetic();
  }

  // ---------- Navbar scroll-spy (index) ----------
  function initScrollSpy() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');
    if (!sections.length) return;

    window.addEventListener('scroll', () => {
      let current = '';
      sections.forEach(section => {
        if (pageYOffset >= section.offsetTop - 200) {
          current = section.getAttribute('id');
        }
      });
      navLinks.forEach(link => {
        link.classList.toggle('active', link.getAttribute('href') === `#${current}`);
      });
    }, { passive: true });
  }

  // ---------- Navbar shrink + scroll progress ----------
  function initNavbar() {
    const navbar = document.querySelector('.navbar');
    if (!navbar) return;

    const progress = document.createElement('div');
    progress.className = 'scroll-progress';
    document.body.appendChild(progress);

    let ticking = false;
    const update = () => {
      navbar.classList.toggle('navbar--scrolled', window.scrollY > 50);
      const max = document.documentElement.scrollHeight - window.innerHeight;
      progress.style.transform = `scaleX(${max > 0 ? window.scrollY / max : 0})`;
      ticking = false;
    };
    window.addEventListener('scroll', () => {
      if (!ticking) { requestAnimationFrame(update); ticking = true; }
    }, { passive: true });
    update();
  }

  // ---------- Scroll reveal ----------
  function initReveal() {
    const items = document.querySelectorAll('.reveal');
    if (!items.length) return;

    if (reducedMotion || !('IntersectionObserver' in window)) {
      items.forEach(el => el.classList.add('in-view'));
      return;
    }

    // Grid kartlarına satır bazlı kademeli gecikme
    document.querySelectorAll('.portfolio-grid, .contact-grid, .hub-container, .project-gallery').forEach(grid => {
      [...grid.children].forEach((el, i) => {
        if (el.classList.contains('reveal')) {
          el.style.transitionDelay = `${(i % 3) * 90}ms`;
        }
      });
    });

    const io = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in-view');
          // Stagger gecikmesi hover etkileşimlerini geciktirmesin
          setTimeout(() => { entry.target.style.transitionDelay = ''; }, 900);
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

    items.forEach(el => io.observe(el));
  }

  // ---------- Sayaç animasyonu ----------
  function initCounters() {
    const counters = document.querySelectorAll('[data-count]');
    if (!counters.length) return;

    const animate = (el) => {
      const target = parseFloat(el.dataset.count);
      const duration = 1600;
      const start = performance.now();
      const fmt = (v) => el.dataset.prefix === '$'
        ? '$' + Math.round(v).toLocaleString('tr-TR')
        : Math.round(v).toString();

      const step = (now) => {
        const t = Math.min((now - start) / duration, 1);
        const eased = 1 - Math.pow(2, -10 * t); // easeOutExpo
        el.textContent = fmt(target * eased) + (el.dataset.suffix || '');
        if (t < 1) requestAnimationFrame(step);
      };
      requestAnimationFrame(step);
    };

    if (reducedMotion || !('IntersectionObserver' in window)) {
      counters.forEach(el => {
        const v = parseFloat(el.dataset.count);
        el.textContent = (el.dataset.prefix === '$' ? '$' + v.toLocaleString('tr-TR') : v) + (el.dataset.suffix || '');
      });
      return;
    }

    const io = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          animate(entry.target);
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.5 });

    counters.forEach(el => io.observe(el));
  }

  // ---------- Proje filtreleme ----------
  function initFilters() {
    document.querySelectorAll('.filter-bar').forEach(bar => {
      const grid = document.getElementById(bar.dataset.target);
      if (!grid) return;
      const cards = [...grid.querySelectorAll('.portfolio-item')];

      bar.addEventListener('click', (e) => {
        const btn = e.target.closest('[data-filter]');
        if (!btn) return;

        bar.querySelectorAll('[data-filter]').forEach(b => b.classList.toggle('active', b === btn));
        const filter = btn.dataset.filter;

        cards.forEach((card, i) => {
          const show = filter === 'all' || (card.dataset.cat || '').split(' ').includes(filter);
          if (show) {
            card.classList.remove('is-hidden');
            card.classList.add('is-filtering');
            card.style.transitionDelay = `${i * 40}ms`;
            requestAnimationFrame(() => requestAnimationFrame(() => {
              card.classList.remove('is-filtering');
              setTimeout(() => { card.style.transitionDelay = ''; }, i * 40 + 350);
            }));
          } else {
            card.style.transitionDelay = '0ms';
            card.classList.add('is-filtering');
            setTimeout(() => card.classList.add('is-hidden'), reducedMotion ? 0 : 260);
          }
        });
      });
    });
  }

  // ---------- Lightbox (project.html) ----------
  function initLightbox() {
    const gallery = document.getElementById('project-gallery');
    if (!gallery) return;

    const overlay = document.createElement('div');
    overlay.className = 'lightbox';
    overlay.innerHTML = `
      <button class="lightbox-close" aria-label="Kapat">✕</button>
      <button class="lightbox-arrow prev" aria-label="Önceki">←</button>
      <img class="lightbox-img" alt="">
      <button class="lightbox-arrow next" aria-label="Sonraki">→</button>
      <span class="lightbox-counter"></span>`;
    document.body.appendChild(overlay);

    const imgEl = overlay.querySelector('.lightbox-img');
    const counterEl = overlay.querySelector('.lightbox-counter');
    let current = 0;

    const images = () => [...gallery.querySelectorAll('img')];

    const show = (i) => {
      const imgs = images();
      if (!imgs.length) return;
      current = (i + imgs.length) % imgs.length;
      imgEl.src = imgs[current].src;
      imgEl.alt = imgs[current].alt;
      counterEl.textContent = `${current + 1} / ${imgs.length}`;
    };

    const open = (i) => {
      show(i);
      overlay.classList.add('open');
      document.body.style.overflow = 'hidden';
    };
    const close = () => {
      overlay.classList.remove('open');
      document.body.style.overflow = '';
    };

    gallery.addEventListener('click', (e) => {
      const img = e.target.closest('img');
      if (img) open(images().indexOf(img));
    });
    overlay.querySelector('.lightbox-close').addEventListener('click', close);
    overlay.querySelector('.prev').addEventListener('click', () => show(current - 1));
    overlay.querySelector('.next').addEventListener('click', () => show(current + 1));
    overlay.addEventListener('click', (e) => { if (e.target === overlay) close(); });
    document.addEventListener('keydown', (e) => {
      if (!overlay.classList.contains('open')) return;
      if (e.key === 'Escape') close();
      if (e.key === 'ArrowLeft') show(current - 1);
      if (e.key === 'ArrowRight') show(current + 1);
    });
  }

  // ---------- Custom cursor ----------
  function initCursor() {
    const dot = document.createElement('div');
    const ring = document.createElement('div');
    dot.className = 'cursor-dot';
    ring.className = 'cursor-ring';
    document.body.append(dot, ring);

    let mx = -100, my = -100, rx = -100, ry = -100;

    document.addEventListener('mousemove', (e) => {
      mx = e.clientX; my = e.clientY;
      dot.style.transform = `translate(${mx}px, ${my}px)`;
    }, { passive: true });

    (function follow() {
      rx += (mx - rx) * 0.16;
      ry += (my - ry) * 0.16;
      ring.style.transform = `translate(${rx}px, ${ry}px)`;
      requestAnimationFrame(follow);
    })();

    const hoverables = 'a, button, .portfolio-item, .skill-pill';
    document.addEventListener('mouseover', (e) => {
      if (e.target.closest(hoverables)) ring.classList.add('cursor-ring--hover');
    });
    document.addEventListener('mouseout', (e) => {
      if (e.target.closest(hoverables)) ring.classList.remove('cursor-ring--hover');
    });
    document.addEventListener('mouseleave', () => { dot.style.opacity = 0; ring.style.opacity = 0; });
    document.addEventListener('mouseenter', () => { dot.style.opacity = 1; ring.style.opacity = 1; });
  }

  // ---------- Magnetik butonlar ----------
  function initMagnetic() {
    const els = document.querySelectorAll('.btn-contact, .contact-icon, .project-external, .filter-bar [data-filter]');
    els.forEach(el => {
      el.addEventListener('mousemove', (e) => {
        const r = el.getBoundingClientRect();
        const dx = (e.clientX - (r.left + r.width / 2)) / (r.width / 2);
        const dy = (e.clientY - (r.top + r.height / 2)) / (r.height / 2);
        el.style.transform = `translate(${dx * 5}px, ${dy * 5}px)`;
      });
      el.addEventListener('mouseleave', () => {
        el.style.transform = '';
      });
    });
  }
});
