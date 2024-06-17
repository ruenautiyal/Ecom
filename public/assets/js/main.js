(function() {
  "use strict";

  /**
   * Easy selector helper function
   */
  const select = (el, all = false) => {
    el = el.trim();
    if (all) {
      return [...document.querySelectorAll(el)];
    } else {
      return document.querySelector(el);
    }
  };

  /**
   * Easy event listener function
   */
  const on = (type, el, listener, all = false) => {
    let selectEl = select(el, all);
    if (selectEl) {
      if (all) {
        selectEl.forEach(e => e.addEventListener(type, listener));
      } else {
        selectEl.addEventListener(type, listener);
      }
    }
  };

  /**
   * Navbar links active state on scroll
   */
  const navbarlinksActive = () => {
    let position = window.scrollY + 200;
    const navbarlinks = select('#navbar .scrollto', true);
    navbarlinks.forEach(navbarlink => {
      if (!navbarlink.hash) return;
      let section = select(navbarlink.hash);
      if (!section) return;
      if (position >= section.offsetTop && position <= (section.offsetTop + section.offsetHeight)) {
        navbarlink.classList.add('active');
      } else {
        navbarlink.classList.remove('active');
      }
    });
  };

  /**
   * Toggle class function
   */
  const toggleClass = (el, className) => {
    el.classList.toggle(className);
  };

  /**
   * Scroll to an element function
   */
  const scrollTo = (el, offset) => {
    let header = select('#header');
    let headerOffset = header ? header.offsetHeight : 0;
    let elementPos = select(el).offsetTop;
    window.scrollTo({
      top: elementPos - headerOffset + offset,
      behavior: 'smooth'
    });
  };

  /**
   * Add class on scroll function
   */
  const addClassOnScroll = (el, className, offset = 0) => {
    let offsetValue = select(el) ? select(el).offsetTop : 0;
    if ((offsetValue - window.scrollY) <= offset) {
      select(el).classList.add(className);
    } else {
      select(el).classList.remove(className);
    }
  };

  /**
   * Back to top button
   */
  const toggleBackToTop = () => {
    let backtotop = select('.back-to-top');
    if (backtotop) {
      backtotop.classList.toggle('active', window.scrollY > 100);
    }
  };

  /**
   * Mobile nav toggle
   */
  on('click', '.mobile-nav-toggle', function(e) {
    toggleClass(select('#navbar'), 'navbar-mobile');
    toggleClass(this, 'bi-list');
    toggleClass(this, 'bi-x');
  });

  /**
   * Scroll to section on click
   */
  on('click', '.scrollto', function(e) {
    e.preventDefault();
    if (select(this.hash)) {
      scrollTo(this.hash, 0);
    }
  }, true);

  /**
   * Scroll with offset on page load with hash links in the URL
   */
  window.addEventListener('load', () => {
    if (window.location.hash && select(window.location.hash)) {
      scrollTo(window.location.hash, -100);
    }
  });

  /**
   * Back to top button toggle
   */
  window.addEventListener('scroll', toggleBackToTop);

  /**
   * Header fixed top on scroll
   */
  window.addEventListener('scroll', () => {
    addClassOnScroll('#header', 'fixed-top');
    addClassOnScroll('#header + *', 'scrolled-offset', 16);
  });

  /**
   * Portfolio isotope and filter
   */
  window.addEventListener('load', () => {
    const portfolioContainer = select('.portfolio-container');
    if (portfolioContainer) {
      const portfolioIsotope = new Isotope(portfolioContainer, {
        itemSelector: '.portfolio-item',
        layoutMode: 'fitRows'
      });

      on('click', '#portfolio-flters li', function(e) {
        e.preventDefault();
        const filterValue = this.getAttribute('data-filter');
        portfolioIsotope.arrange({
          filter: filterValue
        });
        selectAll('#portfolio-flters li').forEach(el => el.classList.remove('filter-active'));
        this.classList.add('filter-active');
      }, true);
    }
  });

  /**
   * Initiate portfolio lightbox 
   */
  GLightbox({
    selector: '.portfolio-lightbox'
  });

  /**
   * Portfolio details slider
   */
  new Swiper('.portfolio-details-slider', {
    speed: 400,
    loop: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false
    },
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true
    }
  });

  /**
   * Testimonials slider
   */
  new Swiper('.testimonials-slider', {
    speed: 600,
    loop: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false
    },
    slidesPerView: 'auto',
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true
    },
    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 40
      },
      1200: {
        slidesPerView: 3,
      }
    }
  });

  /**
   * Skills animation
   */
  const skillsContent = select('.skills-content');
  if (skillsContent) {
    new Waypoint({
      element: skillsContent,
      offset: '80%',
      handler: function(direction) {
        selectAll('.progress .progress-bar').forEach((el) => {
          el.style.width = el.getAttribute('aria-valuenow') + '%';
        });
      }
    });
  }

  /**
   * Initiate Pure Counter 
   */
  new PureCounter();

})();
