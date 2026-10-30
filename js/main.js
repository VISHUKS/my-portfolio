/**
 * Pankaj Kumar Singh - Motion Graphics & Video Editing Portfolio
 * Enhanced Cinematic Experience & Micro-Interactions
 * Pure Vanilla JavaScript (Zero External Dependencies)
 */

'use strict';

/* --------------------------------------------------------------------------
   1. Portfolio Video Data (Verified from Reference Website)
   -------------------------------------------------------------------------- */
const PORTFOLIO_VIDEOS = [
  // --- Long Form Videos (16:9 Landscape) ---
  {
    id: 'fXF6Kvyx-wk',
    type: 'long',
    title: 'IP Law Lawyers - Value Driven Hook',
    category: 'Commercial Edit',
    aspect: '16-9',
    verifiedUrl: 'https://www.youtube.com/watch?v=fXF6Kvyx-wk',
    embedUrl: 'https://www.youtube-nocookie.com/embed/fXF6Kvyx-wk',
    duration: '16:9 • 4K UHD'
  },
  {
    id: 'MN1SNdwhxC0',
    type: 'long',
    title: 'Plutus Financial Breakdown & Explainer',
    category: 'YouTube Video Edit',
    aspect: '16-9',
    verifiedUrl: 'https://www.youtube.com/watch?v=MN1SNdwhxC0',
    embedUrl: 'https://www.youtube-nocookie.com/embed/MN1SNdwhxC0',
    duration: '16:9 • 4K UHD'
  },
  {
    id: '3d1iaHPJdyU',
    type: 'long',
    title: 'Commercial Motion Showcase & Brand Story',
    category: 'Motion Graphics',
    aspect: '16-9',
    verifiedUrl: 'https://www.youtube.com/watch?v=3d1iaHPJdyU',
    embedUrl: 'https://www.youtube-nocookie.com/embed/3d1iaHPJdyU',
    duration: '16:9 • 4K UHD'
  },
  {
    id: 'ew6WDIjlKuY',
    type: 'long',
    title: 'Kinetic Typography & Pacing Master',
    category: 'Kinetic Typography',
    aspect: '16-9',
    verifiedUrl: 'https://www.youtube.com/watch?v=ew6WDIjlKuY',
    embedUrl: 'https://www.youtube-nocookie.com/embed/ew6WDIjlKuY',
    duration: '16:9 • 4K UHD'
  },
  {
    id: 'onK1klIfW3Y',
    type: 'long',
    title: 'High-Retention Storytelling & Motion Edit',
    category: 'Video Editing',
    aspect: '16-9',
    verifiedUrl: 'https://www.youtube.com/watch?v=onK1klIfW3Y',
    embedUrl: 'https://www.youtube-nocookie.com/embed/onK1klIfW3Y',
    duration: '16:9 • 4K UHD'
  },
  {
    id: 'X8w89k2f54E',
    type: 'long',
    title: 'Brand Identity & Visual Design Showcase',
    category: 'Visual Effects',
    aspect: '16-9',
    verifiedUrl: 'https://www.youtube.com/watch?v=X8w89k2f54E',
    embedUrl: 'https://www.youtube-nocookie.com/embed/X8w89k2f54E',
    duration: '16:9 • 4K UHD'
  },

  // --- Short Form Videos (9:16 Vertical Shorts/Reels) ---
  {
    id: '6ynGKXHYnPo',
    type: 'short',
    title: 'Festival Budget & Financial Motion Explainer',
    category: 'Motion Explainer',
    aspect: '9-16',
    verifiedUrl: 'https://www.youtube.com/shorts/6ynGKXHYnPo',
    embedUrl: 'https://www.youtube-nocookie.com/embed/6ynGKXHYnPo',
    duration: '9:16 • REEL'
  },
  {
    id: 'Q9MThmDw_5Y',
    type: 'short',
    title: 'Flash Sale & Commercial Promo Animation',
    category: 'Commercial Promo',
    aspect: '9-16',
    verifiedUrl: 'https://www.youtube.com/shorts/Q9MThmDw_5Y',
    embedUrl: 'https://www.youtube-nocookie.com/embed/Q9MThmDw_5Y',
    duration: '9:16 • SHORT'
  },
  {
    id: 'Uze49saSWow',
    type: 'short',
    title: 'Gold Story & Narrative Visual Sequence',
    category: 'Visual Storytelling',
    aspect: '9-16',
    verifiedUrl: 'https://www.youtube.com/shorts/Uze49saSWow',
    embedUrl: 'https://www.youtube-nocookie.com/embed/Uze49saSWow',
    duration: '9:16 • REEL'
  },
  {
    id: 'ud_aFzWzlZE',
    type: 'short',
    title: 'Kinetic Typography & High-Energy Reel',
    category: 'Instagram Reel',
    aspect: '9-16',
    verifiedUrl: 'https://www.youtube.com/shorts/ud_aFzWzlZE',
    embedUrl: 'https://www.youtube-nocookie.com/embed/ud_aFzWzlZE',
    duration: '9:16 • REEL'
  },
  {
    id: 'zFi5QcYg9oE',
    type: 'short',
    title: 'Visual Rhythm & Dynamic Transitions',
    category: 'YouTube Short',
    aspect: '9-16',
    verifiedUrl: 'https://www.youtube.com/shorts/zFi5QcYg9oE',
    embedUrl: 'https://www.youtube-nocookie.com/embed/zFi5QcYg9oE',
    duration: '9:16 • SHORT'
  },
  {
    id: 'q1cjW1_fpVc',
    type: 'short',
    title: 'AI Innovations & GK Knowledge Hook',
    category: 'AI Tech Motion',
    aspect: '9-16',
    verifiedUrl: 'https://www.youtube.com/shorts/q1cjW1_fpVc',
    embedUrl: 'https://www.youtube-nocookie.com/embed/q1cjW1_fpVc',
    duration: '9:16 • REEL'
  },
  {
    id: 'pZkT1DhVngo',
    type: 'short',
    title: 'Visual Storytelling & Rapid Cut Sequence',
    category: 'Social Reel',
    aspect: '9-16',
    verifiedUrl: 'https://www.youtube.com/shorts/pZkT1DhVngo',
    embedUrl: 'https://www.youtube-nocookie.com/embed/pZkT1DhVngo',
    duration: '9:16 • SHORT'
  },
  {
    id: 'PUnFoINJahk',
    type: 'short',
    title: 'Minimalist Kinetic Typography Reel',
    category: 'Viral Reel',
    aspect: '9-16',
    verifiedUrl: 'https://www.youtube.com/shorts/PUnFoINJahk',
    embedUrl: 'https://www.youtube-nocookie.com/embed/PUnFoINJahk',
    duration: '9:16 • REEL'
  }
];

document.addEventListener('DOMContentLoaded', () => {
  /* --------------------------------------------------------------------------
     2. DOM Elements
     -------------------------------------------------------------------------- */
  const navbar = document.getElementById('navbar');
  const navToggle = document.getElementById('navToggle');
  const navMenu = document.getElementById('navMenu');
  const navLinks = document.querySelectorAll('.nav-link');
  const yearElement = document.getElementById('currentYear');
  const backToTopBtn = document.getElementById('backToTop');
  const mouseSpotlight = document.getElementById('mouseSpotlight');
  const liveTimecodeEl = document.getElementById('liveTimecode');
  const audioEqualizerEl = document.getElementById('audioEqualizer');
  const btnCopyPhone = document.getElementById('btnCopyPhone');
  const toastNotification = document.getElementById('toastNotification');

  // Video Galleries
  const longFormGrid = document.getElementById('longFormGrid');
  const shortFormGrid = document.getElementById('shortFormGrid');
  const filterBtns = document.querySelectorAll('.filter-btn');

  // Video Modal Elements
  const videoModal = document.getElementById('videoModal');
  const modalIframeContainer = document.getElementById('modalIframeContainer');
  const modalCloseBtn = document.getElementById('modalCloseBtn');
  const modalTitle = document.getElementById('modalTitle');
  const modalCategory = document.getElementById('modalCategory');
  const modalYoutubeLink = document.getElementById('modalYoutubeLink');
  let previouslyFocusedElement = null;

  /* --------------------------------------------------------------------------
     3. Dynamic Copyright Year
     -------------------------------------------------------------------------- */
  if (yearElement) {
    const currentYear = new Date().getFullYear();
    yearElement.textContent = currentYear >= 2026 ? currentYear : 2026;
  }

  /* --------------------------------------------------------------------------
     4. Ambient Mouse Spotlight Effect
     -------------------------------------------------------------------------- */
  let spotlightTicking = false;
  window.addEventListener('mousemove', (e) => {
    if (!spotlightTicking) {
      window.requestAnimationFrame(() => {
        document.documentElement.style.setProperty('--cursor-x', `${e.clientX}px`);
        document.documentElement.style.setProperty('--cursor-y', `${e.clientY}px`);
        spotlightTicking = false;
      });
      spotlightTicking = true;
    }
  }, { passive: true });

  /* --------------------------------------------------------------------------
     5. Hero Video Editor Live Timecode Simulation
     -------------------------------------------------------------------------- */
  if (liveTimecodeEl) {
    let hours = 0;
    let minutes = 1;
    let seconds = 28;
    let frames = 14;

    const pad = (n) => String(n).padStart(2, '0');

    setInterval(() => {
      frames += 2;
      if (frames >= 60) {
        frames = 0;
        seconds++;
        if (seconds >= 60) {
          seconds = 0;
          minutes++;
          if (minutes >= 60) {
            minutes = 0;
            hours++;
          }
        }
      }
      liveTimecodeEl.textContent = `${pad(hours)}:${pad(minutes)}:${pad(seconds)}:${pad(frames)}`;
    }, 33); // approx 30 updates per second
  }

  /* --------------------------------------------------------------------------
     6. Audio Equalizer Randomized Modulation
     -------------------------------------------------------------------------- */
  if (audioEqualizerEl) {
    const eqBars = audioEqualizerEl.querySelectorAll('.eq-bar');
    setInterval(() => {
      eqBars.forEach((bar) => {
        const randomHeight = Math.floor(Math.random() * 85) + 15;
        bar.style.height = `${randomHeight}%`;
      });
    }, 120);
  }

  /* --------------------------------------------------------------------------
     7. Toast Notification & Copy Phone to Clipboard
     -------------------------------------------------------------------------- */
  let toastTimeout = null;
  function showToast(message) {
    if (!toastNotification) return;
    const msgEl = toastNotification.querySelector('.toast-message');
    if (msgEl) msgEl.textContent = message;

    toastNotification.classList.add('show');
    clearTimeout(toastTimeout);
    toastTimeout = setTimeout(() => {
      toastNotification.classList.remove('show');
    }, 3000);
  }

  if (btnCopyPhone) {
    btnCopyPhone.addEventListener('click', async () => {
      const phoneNumber = btnCopyPhone.getAttribute('data-phone') || '+919315686360';
      try {
        if (navigator.clipboard && navigator.clipboard.writeText) {
          await navigator.clipboard.writeText(phoneNumber);
        } else {
          // Fallback for older browsers
          const textArea = document.createElement('textarea');
          textArea.value = phoneNumber;
          textArea.style.position = 'fixed';
          textArea.style.opacity = '0';
          document.body.appendChild(textArea);
          textArea.focus();
          textArea.select();
          document.execCommand('copy');
          document.body.removeChild(textArea);
        }
        showToast(`Copied ${phoneNumber} to clipboard!`);
      } catch (err) {
        showToast(`Phone: ${phoneNumber}`);
      }
    });
  }

  /* --------------------------------------------------------------------------
     8. Build Video Card HTML & Interactive Spotlight
     -------------------------------------------------------------------------- */
  function createVideoCard(video) {
    const card = document.createElement('article');
    card.className = `video-card video-card-${video.aspect} reveal`;
    card.setAttribute('data-id', video.id);
    card.setAttribute('data-type', video.type);
    card.setAttribute('tabindex', '0');
    card.setAttribute('role', 'button');
    card.setAttribute('aria-label', `Play video: ${video.title}`);

    // High res and HQ fallback URLs (support YouTube & Google Drive)
    const isShort = video.aspect === '9-16';
    let primaryThumb = isShort
      ? `https://i.ytimg.com/vi/${video.id}/oar2.jpg`
      : `https://i.ytimg.com/vi/${video.id}/hqdefault.jpg`;
    let highResThumb = isShort
      ? `https://i.ytimg.com/vi/${video.id}/oar2.jpg`
      : `https://i.ytimg.com/vi/${video.id}/maxresdefault.jpg`;

    if (video.thumbnail) {
      primaryThumb = video.thumbnail;
      highResThumb = video.thumbnail;
    }

    card.innerHTML = `
      <div class="thumbnail-wrapper aspect-${video.aspect}">
        <img 
          src="${highResThumb}" 
          alt="${video.title} - ${video.category}" 
          class="video-thumb" 
          loading="lazy"
          onerror="if (!this.dataset.triedHq) { this.dataset.triedHq = '1'; this.src = '${primaryThumb}'; } else { this.onerror = null; this.classList.add('thumb-fallback'); }"
        />
        <div class="thumb-poster-fallback" aria-hidden="true">
          <div class="poster-icon">
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <polygon points="5 3 19 12 5 21 5 3"/>
            </svg>
          </div>
          <span class="poster-label">${video.title}</span>
        </div>
        <div class="thumb-overlay">
          <div class="thumb-badges">
            <span class="badge-category">${video.category}</span>
            <span class="badge-duration">${video.duration}</span>
          </div>
          <div class="play-button" aria-hidden="true">
            <svg viewBox="0 0 68 48" class="play-svg">
              <path class="play-bg" d="M66.52,7.74c-0.78-2.93-2.49-5.41-5.42-6.19C55.79,.13,34,0,34,0S12.21,.13,6.9,1.55 C3.97,2.33,2.27,4.8,1.48,7.74C0.06,13.05,0,24,0,24s0.06,10.95,1.48,16.26c0.78,2.93,2.49,5.41,5.42,6.19 C12.21,47.87,34,48,34,48s21.79-.13,27.1-1.55c2.93-.78,4.64-3.26,5.42-6.19C67.94,34.95,68,24,68,24S67.94,13.05,66.52,7.74z"></path>
              <polygon class="play-triangle" points="27,14 45,24 27,34"></polygon>
            </svg>
          </div>
          <div></div>
        </div>
      </div>
      <div class="video-info">
        <h4 class="video-title">${video.title}</h4>
        <div class="video-meta">
          <span class="video-creator">Pankaj Kumar Singh</span>
          <span class="meta-dot">&bull;</span>
          <span class="video-link-text">
            <span>Watch Video</span>
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </span>
        </div>
      </div>
    `;

    // Click & Keyboard Enter/Space to Open Modal
    const handleOpen = () => openModal(video);
    card.addEventListener('click', handleOpen);
    card.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        handleOpen();
      }
    });

    return card;
  }

  /* --------------------------------------------------------------------------
     9. Render Video Grids & Dynamic Filter Counts
     -------------------------------------------------------------------------- */
  function updateFilterCounts() {
    const totalCount = PORTFOLIO_VIDEOS.length;
    const longCount = PORTFOLIO_VIDEOS.filter(v => v.type === 'long').length;
    const shortCount = PORTFOLIO_VIDEOS.filter(v => v.type === 'short').length;

    const allBadge = document.querySelector('.filter-btn[data-filter="all"] .filter-count');
    const longBadge = document.querySelector('.filter-btn[data-filter="long"] .filter-count');
    const shortBadge = document.querySelector('.filter-btn[data-filter="short"] .filter-count');

    if (allBadge) allBadge.textContent = totalCount;
    if (longBadge) longBadge.textContent = longCount;
    if (shortBadge) shortBadge.textContent = shortCount;
  }

  function renderVideos() {
    if (longFormGrid) {
      longFormGrid.innerHTML = '';
      const longVideos = PORTFOLIO_VIDEOS.filter(v => v.type === 'long');
      longVideos.forEach(v => longFormGrid.appendChild(createVideoCard(v)));
    }

    if (shortFormGrid) {
      shortFormGrid.innerHTML = '';
      const shortVideos = PORTFOLIO_VIDEOS.filter(v => v.type === 'short');
      shortVideos.forEach(v => shortFormGrid.appendChild(createVideoCard(v)));
    }

    updateFilterCounts();
  }

  renderVideos();

  /* --------------------------------------------------------------------------
     10. Category Filter Buttons (All, Long Form, Short Form)
     -------------------------------------------------------------------------- */
  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const filter = btn.getAttribute('data-filter');
      filterBtns.forEach(b => {
        b.classList.remove('active');
        b.setAttribute('aria-selected', 'false');
      });
      btn.classList.add('active');
      btn.setAttribute('aria-selected', 'true');

      const longSection = document.getElementById('longFormSection');
      const shortSection = document.getElementById('shortFormSection');

      if (filter === 'all') {
        if (longSection) longSection.style.display = 'block';
        if (shortSection) shortSection.style.display = 'block';
      } else if (filter === 'long') {
        if (longSection) longSection.style.display = 'block';
        if (shortSection) shortSection.style.display = 'none';
      } else if (filter === 'short') {
        if (longSection) longSection.style.display = 'none';
        if (shortSection) shortSection.style.display = 'block';
      }
    });
  });

  /* --------------------------------------------------------------------------
     11. Accessible Video Modal Player
     -------------------------------------------------------------------------- */
  function openModal(video) {
    if (!videoModal || !modalIframeContainer) return;

    previouslyFocusedElement = document.activeElement;

    // Set titles & link
    if (modalTitle) modalTitle.textContent = video.title;
    if (modalCategory) modalCategory.textContent = "";
    if (modalYoutubeLink) {
      modalYoutubeLink.href = video.verifiedUrl;
      modalYoutubeLink.setAttribute('aria-label', `Open ${video.title} on YouTube in new tab`);
    }

    // Set aspect ratio class on container and modal dialog
    modalIframeContainer.className = `modal-iframe-box aspect-${video.aspect}`;
    videoModal.classList.toggle('modal-short', video.aspect === '9-16');
    videoModal.classList.toggle('modal-landscape', video.aspect === '16-9');

    if (modalYoutubeLink) {
      const linkSpan = modalYoutubeLink.querySelector('span');
      if (linkSpan) {
        linkSpan.textContent = video.source === 'drive' ? 'Open Video' : 'Open on YouTube';
      }
    }

    // Construct Privacy-Conscious Embed URL with Autoplay
    const embedUrl = video.embedUrl || `https://www.youtube-nocookie.com/embed/${video.id}?autoplay=1&rel=0&modestbranding=1&playsinline=1&iv_load_policy=3`;

    // Inject iframe on-demand
    modalIframeContainer.innerHTML = `
      <iframe 
        src="${embedUrl}" 
        title="${video.title}" 
        frameborder="0" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
        allowfullscreen
        class="modal-iframe"
      ></iframe>
    `;

    // Show Modal
    videoModal.classList.add('active');
    videoModal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';

    // Focus close button for accessibility
    setTimeout(() => {
      if (modalCloseBtn) modalCloseBtn.focus();
    }, 100);
  }

  function closeModal() {
    if (!videoModal || !modalIframeContainer) return;

    // Unload iframe to IMMEDIATELY stop audio/video playback
    modalIframeContainer.innerHTML = '';

    videoModal.classList.remove('active', 'modal-short', 'modal-landscape');
    videoModal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';

    // Restore focus
    if (previouslyFocusedElement) {
      previouslyFocusedElement.focus();
    }
  }

  if (modalCloseBtn) {
    modalCloseBtn.addEventListener('click', closeModal);
  }

  if (videoModal) {
    // Click outside backdrop to close
    videoModal.addEventListener('click', (e) => {
      if (e.target === videoModal || e.target.classList.contains('modal-backdrop')) {
        closeModal();
      }
    });
  }

  // Keyboard accessibility: ESC key closes modal
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && videoModal && videoModal.classList.contains('active')) {
      closeModal();
    }
  });

  /* --------------------------------------------------------------------------
     12. Mobile Navigation Toggle
     -------------------------------------------------------------------------- */
  const toggleMobileNav = (forceClose = false) => {
    if (!navToggle || !navMenu) return;

    const isOpen = forceClose ? false : !navMenu.classList.contains('open');

    if (isOpen) {
      navMenu.classList.add('open');
      navToggle.classList.add('open');
      navToggle.setAttribute('aria-expanded', 'true');
      document.body.style.overflow = 'hidden';
    } else {
      navMenu.classList.remove('open');
      navToggle.classList.remove('open');
      navToggle.setAttribute('aria-expanded', 'false');
      document.body.style.overflow = '';
    }
  };

  if (navToggle) {
    navToggle.addEventListener('click', (e) => {
      e.stopPropagation();
      toggleMobileNav();
    });
  }

  const allNavMenuLinks = navMenu ? navMenu.querySelectorAll('a') : navLinks;
  allNavMenuLinks.forEach(link => {
    link.addEventListener('click', () => {
      if (navMenu && navMenu.classList.contains('open')) {
        toggleMobileNav(true);
      }
    });
  });

  document.addEventListener('click', (e) => {
    if (navMenu && navMenu.classList.contains('open')) {
      if (!navMenu.contains(e.target) && !navToggle.contains(e.target)) {
        toggleMobileNav(true);
      }
    }
  });

  window.addEventListener('resize', () => {
    if (window.innerWidth > 860 && navMenu && navMenu.classList.contains('open')) {
      toggleMobileNav(true);
    }
  });

  /* --------------------------------------------------------------------------
     13. Header Scroll Appearance & Back-to-Top Button
     -------------------------------------------------------------------------- */
  const handleScroll = () => {
    const scrollY = window.scrollY;

    if (navbar) {
      if (scrollY > 30) {
        navbar.classList.add('scrolled');
      } else {
        navbar.classList.remove('scrolled');
      }
    }

    if (backToTopBtn) {
      if (scrollY > 400) {
        backToTopBtn.classList.add('visible');
      } else {
        backToTopBtn.classList.remove('visible');
      }
    }
  };

  window.addEventListener('scroll', handleScroll, { passive: true });
  handleScroll();

  if (backToTopBtn) {
    backToTopBtn.addEventListener('click', () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  }

  /* --------------------------------------------------------------------------
     14. Scroll Reveal Animations (IntersectionObserver)
     -------------------------------------------------------------------------- */
  const revealElements = document.querySelectorAll('.reveal');

  if ('IntersectionObserver' in window) {
    const revealObserver = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('active');
            observer.unobserve(entry.target);
          }
        });
      },
      {
        root: null,
        rootMargin: '0px 0px -50px 0px',
        threshold: 0.1
      }
    );

    revealElements.forEach(el => revealObserver.observe(el));
  } else {
    revealElements.forEach(el => el.classList.add('active'));
  }

  /* --------------------------------------------------------------------------
     15. Interactive Motion Graphics Suite (3D Tilt & Magnetic Physics)
     -------------------------------------------------------------------------- */
  if (window.matchMedia('(pointer: fine)').matches) {
    // A. 3D Tilt & Specular Glare on Cards
    function initCardTilt() {
      const tiltTargets = document.querySelectorAll('.video-card, .capability-card, .editor-hud');
      tiltTargets.forEach(card => {
        if (card.dataset.tiltInitialized) return;
        card.dataset.tiltInitialized = 'true';
        card.classList.add('tilt-card');

        let glare = card.querySelector('.tilt-glare');
        if (!glare) {
          glare = document.createElement('div');
          glare.className = 'tilt-glare';
          card.appendChild(glare);
        }

        let isHovered = false;

        card.addEventListener('mouseenter', () => {
          isHovered = true;
          card.classList.add('tilt-active');
        });

        card.addEventListener('mousemove', (e) => {
          if (!isHovered) return;
          const rect = card.getBoundingClientRect();
          const x = e.clientX - rect.left;
          const y = e.clientY - rect.top;
          const centerX = rect.width / 2;
          const centerY = rect.height / 2;

          // Maximum tilt angle: 8 degrees
          const rotateX = ((y - centerY) / centerY) * -8;
          const rotateY = ((x - centerX) / centerX) * 8;

          card.style.transform = `perspective(1000px) rotateX(${rotateX.toFixed(2)}deg) rotateY(${rotateY.toFixed(2)}deg) translateY(-5px)`;
          if (glare) {
            glare.style.background = `radial-gradient(circle at ${x}px ${y}px, rgba(204, 255, 0, 0.16) 0%, transparent 65%)`;
          }
        });

        card.addEventListener('mouseleave', () => {
          isHovered = false;
          card.classList.remove('tilt-active');
          card.style.transform = '';
        });
      });
    }

    initCardTilt();

    // B. Magnetic Pull on Buttons & Interactive Badges
    const magneticElements = document.querySelectorAll('.btn, .filter-btn, .back-to-top, .brand-logo, .badge-available');
    magneticElements.forEach(el => {
      el.classList.add('magnetic-item');

      el.addEventListener('mousemove', (e) => {
        const rect = el.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;

        // Smooth magnetic attraction (25% translation)
        el.style.transform = `translate(${x * 0.25}px, ${y * 0.25}px)`;
      });

      el.addEventListener('mouseleave', () => {
        el.style.transform = '';
      });
    });

    // C. Fluid Ambient Motion Orb
    const orb = document.createElement('div');
    orb.className = 'motion-orb';
    document.body.appendChild(orb);

    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;
    let currentX = mouseX;
    let currentY = mouseY;

    window.addEventListener('mousemove', (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    }, { passive: true });

    function animateOrb() {
      currentX += (mouseX - currentX) * 0.07;
      currentY += (mouseY - currentY) * 0.07;
      orb.style.transform = `translate3d(${currentX - 210}px, ${currentY - 210}px, 0)`;
      requestAnimationFrame(animateOrb);
    }
    requestAnimationFrame(animateOrb);
  }

});
