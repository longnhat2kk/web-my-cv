$(document).ready(function () {
  // menu scroll
  $(window).scroll(function () {
    if ($(this).scrollTop()) {
      $(".home-menu").addClass("scroll-menu");
    } else {
      $(".home-menu").removeClass("scroll-menu");
    }
  });

  // .slick-members
  $(document).ready(function () {
    $(".slick-members").slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: true,
      dots: true,
      speed: 700,
      infinite: true,
      autoplaySpeed: 3000,
      autoplay: true,
      prevArrow:
        '<button class="slide-arrow prev-arrow"><svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" class="bi bi-arrow-left" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"/></svg></button>',
      nextArrow:
        '<button class="slide-arrow next-arrow"><svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" class="bi bi-arrow-right" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"/></svg></button>',
      responsive: [
        {
          breakpoint: 991,
          settings: {
            slidesToShow: 1,
          },
        },
        {
          breakpoint: 767,
          settings: {
            slidesToShow: 1,
          },
        },
      ],
    });
  });

  // DEMO PROJECT
  $(document).ready(function () {
    $(".slider-web-demo").slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: true,
      dots: true,
      speed: 700,
      infinite: true,
      autoplaySpeed: 3000,
      autoplay: true,
      prevArrow:
        '<button class="slide-arrow prev-arrow"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-left" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"/></svg></button>',
      nextArrow:
        '<button class="slide-arrow next-arrow"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-right" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"/></svg></button>',
      responsive: [
        {
          breakpoint: 991,
          settings: {
            slidesToShow: 1,
          },
        },
        {
          breakpoint: 767,
          settings: {
            slidesToShow: 1,
          },
        },
      ],
    });
  });

  //End DEMO PROJECT

  // Tab skills
  // Show the first tab and hide the rest
  $("#tabs-nav li:first-child").addClass("active");
  $(".tab-content").hide();
  $(".tab-content:first").show();

  // Click function
  $("#tabs-nav li").click(function () {
    $("#tabs-nav li").removeClass("active");
    $(this).addClass("active");
    $(".tab-content").hide();

    var activeTab = $(this).find("a").attr("href");
    $(activeTab).fadeIn();
    return false;
  });

  // button darkmode

  $(".switch").click(function () {
    $(":root").toggleClass("dark");
  });

  // pupup
  $("#popup").click(function (e) {
    e.stopPropagation();
  });

  $(document).click(function () {
    $("#popup").fadeOut();
  });

  $("#closeButton").click(function () {
    $("#popup").fadeOut();
  });

  setTimeout(function () {
    $("#popup").fadeIn();
  }, 5000);

  // Back to top
  $(window).scroll(function () {
    toggleBackToTopButton();
  });

  function toggleBackToTopButton() {
    var backToTopBtn = $("#backToTopBtn");
    if ($(window).scrollTop() > 20) {
      backToTopBtn.addClass("show");
    } else {
      backToTopBtn.removeClass("show");
    }
  }

  $("#backToTopBtn").click(function () {
    $("html, body").animate({ scrollTop: 0 }, "slow");
  });

  // Menu mobile
  $(".home-menu-mobile .menu-left ").click(function (e) {
    e.preventDefault();
    $(" .home-menu-mobile .menu-left-single").addClass("show");
    $(".home-menu-mobile .bg-mobile").show(100);
  });
  $(".home-menu-mobile .menu-left-single .close").click(function (e) {
    e.preventDefault();
    $(".home-menu-mobile .bg-mobile").hide(100);
    $(".home-menu-mobile .menu-left-single").removeClass("show");
  });
  $(".home-menu-mobile .bg-mobile").click(function (e) {
    e.preventDefault();
    $(".home-menu-mobile .menu-left-single").removeClass("show");
    $(".home-menu-mobile .bg-mobile").hide(100);
  });
});
