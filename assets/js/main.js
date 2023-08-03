(function($) {
  'use strict';

  /*-------------------------------------------------------------------------------
  Parallax effect on scroll
  -------------------------------------------------------------------------------*/
  function doParallaxScrollEffect() {
    var $parallaxElement = $(".music_parallax-scroll");

    window.requestAnimationFrame(function() {
      for (var i = 0; i < $parallaxElement.length; i++) {
        var currentElement = $parallaxElement.eq(i),
          parallaxDirection = currentElement.hasClass('music_parallax-scroll-down')
            ? 'down'
            : 'up',
          velocity = parallaxDirection == 'down'
            ? 0.1
            : -0.1,
          windowTop = $(window).scrollTop(),
          elementTop = currentElement.offset().top,
          elementHeight = currentElement.height(),
          viewPortHeight = window.innerHeight * 0.5 - elementHeight * 0.5,
          scrolled = parallaxDirection == 'down'
            ? windowTop - elementTop
            : windowTop - elementTop + viewPortHeight;

        currentElement.css({
          transform: "translate3d(0," + scrolled * velocity + "px, 0)"
        });
      }
    });
  }

  /*-------------------------------------------------------------------------------
  Nice Scroll
	-------------------------------------------------------------------------------*/
  $(".nice-scroll").niceScroll({autohidemode: true, cursorcolor: '#efefef'});

  /*-------------------------------------------------------------------------------
  Init Tooltips (Bootstrap 5)
	-------------------------------------------------------------------------------*/
  var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
  var tooltipList = tooltipTriggerList.map(function(tooltipTriggerEl) {
    return new bootstrap.Tooltip(tooltipTriggerEl)
  });

  /*-------------------------------------------------------------------------------
  Magnific Popup
  -------------------------------------------------------------------------------*/
  $('.music_video-popup').magnificPopup({type: 'iframe'});
  $('.music_img-popup').magnificPopup({
    type: 'image',
    gallery: {
      enabled: true
    }
  });
  $('.music_img-gallery').each(function() {
    $(this).magnificPopup({
      delegate: 'a',
      type: 'image',
      gallery: {
        enabled: true
      }
    });
  });

  /*-------------------------------------------------------------------------------
  Masonry
  -------------------------------------------------------------------------------*/
  $('.music_masonry').imagesLoaded(function() {
    var isotopeContainer = $('.music_masonry');
    isotopeContainer.isotope({itemSelector: '.music_masonry-item'});
  });

  /*------------------------------------------------------------------------------
  Isotope
  ------------------------------------------------------------------------------*/
  function doIsotope(){
    var $isotopeGrid = $(".music_isotope-filter");

    $isotopeGrid.isotope({
      itemSelector: '.music_isotope-item',
      layoutMode: 'fitRows',
    });

    $('.music_isotope-filter-nav').on('click', '.music_isotope-trigger', function() {
      var filterValue = $(this).attr('data-filter');
      $isotopeGrid.isotope({
        filter: filterValue
      });
    });

    $('.music_isotope-trigger').on('click', function(e) {
        $(this).closest('.music_isotope-filter-nav').find('.active').removeClass('active');
        $(this).addClass('active');
        event.preventDefault();
    });

  }
  doIsotope();

  /*-------------------------------------------------------------------------------
  Particles
  -------------------------------------------------------------------------------*/
  let particlesData = {
    "particles": {
      "number": {
        "value": 100,
        "density": {
          "enable": true,
          "value_area": 800
        }
      },
      "color": {
        "value": "#882FBD"
      },
      "shape": {
        "type": "circle",
        "stroke": {
          "width": 0,
          "color": "#882FBD"
        },
        "polygon": {
          "nb_sides": 5
        }
      },
      "opacity": {
        "value": 1,
        "random": false,
        "anim": {
          "enable": false,
          "speed": 1,
          "opacity_min": 0.1,
          "sync": false
        }
      },
      "size": {
        "value": 2,
        "random": true,
        "anim": {
          "enable": false,
          "speed": 80,
          "size_min": 0.1,
          "sync": false
        }
      },
      "line_linked": {
        "enable": true,
        "distance": 200,
        "color": "#882FBD",
        "opacity": 0.4,
        "width": 2
      },
      "move": {
        "enable": true,
        "speed": 2,
        "direction": "none",
        "random": false,
        "straight": false,
        "out_mode": "out",
        "bounce": false,
        "attract": {
          "enable": false,
          "rotateX": 600,
          "rotateY": 1200
        }
      }
    },
    "interactivity": {
      "detect_on": "canvas",
      "events": {
        "onhover": {
          "enable": false,
          "mode": "repulse"
        },
        "onclick": {
          "enable": true,
          "mode": "push"
        },
        "resize": true
      },
      "modes": {
        "grab": {
          "distance": 800,
          "line_linked": {
            "opacity": 1
          }
        },
        "bubble": {
          "distance": 800,
          "size": 80,
          "duration": 2,
          "opacity": 0.8,
          "speed": 3
        },
        "repulse": {
          "distance": 400,
          "duration": 0.4
        },
        "push": {
          "particles_nb": 4
        },
        "remove": {
          "particles_nb": 2
        }
      }
    },
    "retina_detect": true
  };
  if($("#music_particles").length){
    particlesJS('music_particles', particlesData);
  }

  /*-------------------------------------------------------------------------------
  Date Picker
  -------------------------------------------------------------------------------*/
  $('.music_datepicker').datepicker();

  /*-------------------------------------------------------------------------------
  Countdown
  -------------------------------------------------------------------------------*/
  $(".music_countdown-timer").each(function() {
    var $this = $(this);
    $this.countdown($this.data('countdown'), function(event) {
      $(this).html(event.strftime('<span>%D <i>days</i></span> <span>%H <i>hrs</i></span> <span>%M <i>mins</i></span> <span>%S <i>sec</i></span>'));
    });
  });

  /*-------------------------------------------------------------------------------
  Countup
  -------------------------------------------------------------------------------*/
  $(".music_counter").each(function() {
    var $this = $(this);
    $this.one('inview', function(event, isInView) {
      if (isInView) {
        $this.countTo({speed: 2000});
      }
    });
  });


  /*-------------------------------------------------------------------------------
  Burger Menu Expand
	-------------------------------------------------------------------------------*/
  $(".mobile-trigger").on('click', function() {
    $('body').toggleClass('music_aside-open');

    setTimeout(function() {
      $(".music_aside nav > ul > li").each(function(i) {
        $(this).delay(200 * i).fadeIn(500);
      });
      $('.music_aside-notice').delay(800).fadeIn(500);
    }, 500);
  });

  /*-------------------------------------------------------------------------------
  Mobile Menu Submenus
  -------------------------------------------------------------------------------*/
  $(".music_aside .has-children > a").on('click', function(e) {
    var submenu = $(this).next("ul");
    e.preventDefault();

    submenu.slideToggle(200);
  });

  /*-------------------------------------------------------------------------------
  Header search form
  -------------------------------------------------------------------------------*/
  $('.search-trigger').on('click', function() {
    $(".music_header-search").toggleClass('open');
  });

  /*-------------------------------------------------------------------------------
  Coverflow Slider (Playlist home 1)
  -------------------------------------------------------------------------------*/
  const coverflowSlider = new Swiper('.coverflow-slider', {
    effect: 'coverflow',
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: 1,
    loop: false,
    initialSlide: 1,
    spaceBetween: 0,
    coverflowEffect: {
      rotate: 20,
      stretch: 0,
      depth: 200,
      modifier: 1,
      slideShadows: true
    },
    breakpoints: {
      991: {
        slidesPerView: 'auto'
      },
      575: {
        slidesPerView: 2
      }
    }
  });
  $(".music_music-player-backward").on('click', function(e) {
    e.preventDefault();
    coverflowSlider.slidePrev();
  });
  $(".music_music-player-forward").on('click', function(e) {
    e.preventDefault();
    coverflowSlider.slideNext();
  });

  /*-------------------------------------------------------------------------------
  Centered Slider (Blog home 3)
  -------------------------------------------------------------------------------*/
  const centeredSlider = new Swiper('.centered-slider', {
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: 1,
    loop: false,
    initialSlide: 1,
    spaceBetween: 0,
    breakpoints: {
      575: {
        spaceBetween: 30,
        slidesPerView: 2,
      },
      1199: {
        spaceBetween: 120,
        slidesPerView: 1.8,
      },
    }
  });

 

  /*-------------------------------------------------------------------------------
  Single Slider (Blog details sidebar)
  -------------------------------------------------------------------------------*/
  const singleSlider = new Swiper('.single-slider', {
    grabCursor: true,
    spaceBetween: 0,
    slidesPerView: 1,
    loop: false,
    autoplay: true,
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets'
    }
  });

  /*-------------------------------------------------------------------------------
  Vertical Slider (Artists home 1)
  -------------------------------------------------------------------------------*/
  const verticalSlider = new Swiper('.vertical-slider .swiper-container', {
    slidesPerView: 1,
    loop: false,
    speed: 500,
    spaceBetween: 0,
    touchEventsTarget: 'wrapper',
    navigation: {
      nextEl: '.vertical-slider .swiper-button-next',
      prevEl: '.vertical-slider .swiper-button-prev'
    },
    on: {
      init: function(sw) {
        $('.vertical-slider-count').html(sw.slides.length);
      },
      slideChange: function(sw) {
        $('.vertical-slider-current').html(sw.activeIndex + 1);
      }
    }
  });

  /*-------------------------------------------------------------------------------
  Window Events
  -------------------------------------------------------------------------------*/
  $(window).on("scroll", function() {
    doParallaxScrollEffect();
  });

})(jQuery);
