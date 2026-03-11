// Nav scroll effect
window.addEventListener('scroll', () => {
  const nav = document.querySelector('nav');
  if (nav) {
    nav.classList.toggle('scrolled', window.scrollY > 20);
  }
});

// Keep main content below the fixed nav
function updateNavOffset() {
  const nav = document.querySelector('nav');
  const main = document.querySelector('main');
  if (nav && main) {
    main.style.paddingTop = nav.offsetHeight + 'px';
  }
}
updateNavOffset();
window.addEventListener('resize', updateNavOffset);

// Lightbox
function initLightbox() {
  const lb = document.getElementById('lightbox');
  const lbImg = document.getElementById('lightbox-img');
  if (!lb || !lbImg) return;

  document.querySelectorAll('.image-gallery img, .project-hero img').forEach(img => {
    img.addEventListener('click', () => {
      lbImg.src = img.src;
      lb.classList.add('open');
      document.body.style.overflow = 'hidden';
    });
  });

  lb.addEventListener('click', () => {
    lb.classList.remove('open');
    document.body.style.overflow = '';
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      lb.classList.remove('open');
      document.body.style.overflow = '';
    }
  });
}

// Slideshow
function initSlideshows() {
  document.querySelectorAll('.slideshow').forEach(ss => {
    const track = ss.querySelector('.slideshow-track');
    const slides = ss.querySelectorAll('.slideshow-slide');
    const dots = ss.querySelectorAll('.slideshow-dot');
    if (!track || slides.length === 0) return;

    let current = 0;

    function goTo(n) {
      current = (n + slides.length) % slides.length;
      track.style.transform = `translateX(-${current * 100}%)`;
      dots.forEach((d, i) => d.classList.toggle('active', i === current));
    }

    const prev = ss.querySelector('.slideshow-btn.prev');
    const next = ss.querySelector('.slideshow-btn.next');
    if (prev) prev.addEventListener('click', () => goTo(current - 1));
    if (next) next.addEventListener('click', () => goTo(current + 1));
    dots.forEach((d, i) => d.addEventListener('click', () => goTo(i)));

    // Touch support
    let startX = 0;
    track.addEventListener('touchstart', e => startX = e.touches[0].clientX, {passive: true});
    track.addEventListener('touchend', e => {
      const diff = startX - e.changedTouches[0].clientX;
      if (Math.abs(diff) > 40) goTo(current + (diff > 0 ? 1 : -1));
    });

    goTo(0);
  });
}

document.addEventListener('DOMContentLoaded', () => {
  initLightbox();
  initSlideshows();
});
