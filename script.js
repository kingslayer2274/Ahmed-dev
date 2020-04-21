$(".navTrigger").click(function() {
  $(this).toggleClass("active");
  console.log("Clicked menu");
  $("#mainListDiv").toggleClass("show_list");
  $("#mainListDiv").fadeIn();
});

$(window).scroll(function() {
  if ($(document).scrollTop() > 50) {
    $(".nav").addClass("affix");
    console.log("OK");
  } else {
    $(".nav").removeClass("affix");
  }
});

$(".owl-carousel").owlCarousel({
  loop: true,
  margin: 10,
  responsiveClass: true,
  center: true,
  pagination: false,
  animateOut: "fadeOut",
  responsive: {
    0: {
      items: 1,
      nav: true
    },
    600: {
      items: 1,
      nav: false
    },
    1000: {
      items: 1,
      nav: true,
      loop: true
    }
  },
  navText: [
    "<i class='fas fa-angle-left fa-2x'></i>",
    "<i class='fa fa-angle-right fa-2x'></i>"
  ]
});

AOS.init();

$(document).ready(function() {
  $(document).scroll(function() {
    console.log($(document).width());
    if ($(document).scrollTop() > 17) {
      $(".bg").attr("style", "right : 0");
      $(".he").css("left", "90%");
      $(".llo").css("left", "90%");
      $(".he").addClass("d-none");
      $(".llo").addClass("d-none");
      $(".title").css("opacity", "1");
      console.log("added");
    } else {
      $(".title").css("opacity", "0");
      $(".bg").removeAttr("style");
      $(".he").removeClass("d-none");
      $(".llo").removeClass("d-none");
      $(".he").css("left", "40%");
      $(".llo").css("left", "40%");
      console.log("removed");
    }
    if ($(document).scrollTop() > 15) {
      $(".he").css("opacity", "0");
      $(".llo").css("opacity", "0");
    } else {
      $(".he").css("opacity", "1");
      $(".llo").css("opacity", "1");
    }
  });
});
