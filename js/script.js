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

  //   let user = detect.parse(navigator.userAgent);
  //   console.log(user.browser.family);
  //   console.log(user.browser.version);
  //   console.log(user.os.name);
  var userAgent = navigator.userAgent.toLowerCase();

  var Mozila = /firefox/.test(userAgent);
  var Chrome = /chrome/.test(userAgent);
  var Opera = /opera/.test(userAgent);
  var Safari = /safari/.test(userAgent);

  console.log("Opera", Opera);
  console.log("Chrome", Chrome);
  console.log("Mozila", Mozila);
  console.log("Safari", Safari);

  if (
    !/chrome/.test(userAgent) &&
    !/firefox/.test(userAgent) &&
    !/opera/.test(userAgent)
  ) {
    console.log("im safari");
    $(".section").css("background-attachment", "initial");
  } else {
    console.log("im not safari");
  }
});
