(function ($) {
  "use strict";
  $(document).on("ready", function () {
    /*==============================================================================
		  Header Sticky JS
	  ===============================================================================*/
    var activeSticky = $("#active-sticky"),
      winDow = $(window);
    winDow.on("scroll", function () {
      var scroll = $(window).scrollTop(),
        isSticky = activeSticky;
      if (scroll < 150) {
        isSticky.removeClass("is-sticky");
      } else {
        isSticky.addClass("is-sticky");
      }
    });

    /*================================================================================
			Onepage Nav JS
		==================================================================================*/
    $("#nav, #mobile-nav").onePageNav({
      currentClass: "active",
      changeHash: false,
      scrollSpeed: 750,
      scrollThreshold: 0.5,
      filter: "",
      easing: "swing",
      begin: function () {
        //I get fired when the animation is starting
      },
      end: function () {
        //I get fired when the animation is ending
      },
      scrollChange: function ($currentListItem) {
        //I get fired when you enter a section and I pass the list item of the section
      },
    });

    /*==============================================================================
		  Wow JS
	  ================================================================================*/
    var window_width = $(window).width();
    if (window_width > 767) {
      new WOW().init();
    }

    /*==============================================================================
			CounterUp JS
		================================================================================*/
    $(".counter").counterUp({
      time: 1500,
    });

    /*==============================================================================
		  Testimonial Slider
	  ================================================================================*/
    $(".testimonial-slider").owlCarousel({
      items: 2,
      autoplay: true,
      loop: true,
      autoplayTimeout: 5000,
      autoplayHoverPause: false,
      smartSpeed: 500,
      merge: true,
      nav: true,
      dots: false,
      margin: 30,
      navText: [
        '<i class="fi-ss-caret-left aria-hidden="true"></i>',
        '<i class="fi-ss-caret-right" aria-hidden="true"></i>',
      ],
      responsive: {
        300: {
          items: 1,
        },
        480: {
          items: 1,
        },
        768: {
          items: 2,
        },
        1170: {
          items: 2,
        },
      },
    });
    /*==============================================================================
      Team Slider
    ================================================================================*/
    $(".team-slider").owlCarousel({
      items: 1,
      autoplay: true,
      loop: true,
      autoplayTimeout: 5000,
      autoplayHoverPause: false,
      smartSpeed: 500,
      merge: true,
      nav: true,
      dots: true,
      margin: 30,
      navText: [
        '<i class="fi-ss-caret-left aria-hidden="true"></i>',
        '<i class="fi-ss-caret-right" aria-hidden="true"></i>',
      ],
    });
    /*==============================================================================
      Service Slider
    ================================================================================*/
    $(".service-slider").owlCarousel({
      items: 1,
      autoplay: false,
      loop: true,
      autoplayTimeout: 5000,
      autoplayHoverPause: false,
      smartSpeed: 500,
      merge: true,
      nav: true,
      dots: false,
      margin: 30,
      navText: [
        '<i class="fi-ss-caret-left aria-hidden="true"></i>',
        '<i class="fi-ss-caret-right" aria-hidden="true"></i>',
      ],
    });
  });

  /*==============================================================================
		  Preloader JS
	================================================================================*/
  $(window).on("load", function (event) {
    $("#preloader").delay(800).fadeOut(500);
  });
})(jQuery);
