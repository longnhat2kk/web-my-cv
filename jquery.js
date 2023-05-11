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
      autoplaySpeed: 5000,
      // autoplay: true,
      prevArrow:
        '<button class="slide-arrow prev-arrow"><svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi bi-arrow-left-circle-fill" viewBox="0 0 16 16"><path d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0zm3.5 7.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5z"/></svg></button>',
      nextArrow:
        '<button class="slide-arrow next-arrow"><svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi bi-arrow-right-circle-fill" viewBox="0 0 16 16"><path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0zM4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5z"/></svg></button>',
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
});
