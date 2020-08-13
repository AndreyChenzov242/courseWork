$(function () {
  $(".click").on("click", function () {
    $(".burger-menu").slideToggle(500);
    $(".burger-menu").css("display", "flex");
  });
});

$(function () {
  $(".header-nav__li").on("click", function () {
    $(".burger-menu").slideToggle(500);
  });
});

$(function () {
  $(window).scroll(function () {
    if ($(this).scrollTop() >= 200) {
      $(".scrollUp").fadeIn("slow", "linear");
    } else {
      $(".scrollUp").fadeOut("fast", "swing");
    }
  });
  $(".scrollUp").on("click", () => {
    $("html").animate({ scrollTop: 0 }, 100);
  });

  var userAgent = navigator.userAgent.toLowerCase();

  var firefox = /firefox/.test(userAgent);
  var Chrome = /chrome/.test(userAgent);
  var Opera = /opera/.test(userAgent);

  if (!Chrome && !firefox && !Opera) {
    console.log("im safari");
    $(".section").css("background-attachment", "initial");
    $(".section").css("background-position-y", "0");
    $(".form-search__btn").css("margin", "0");
  } else {
    console.log("im not safari");
  }
});
