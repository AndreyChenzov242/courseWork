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
  var isSafari =
    /constructor/i.test(window.HTMLElement) ||
    (function (p) {
      return p.toString() === "[object SafariRemoteNotification]";
    })(
      !window["safari"] ||
        (typeof safari !== "undefined" && safari.pushNotification)
    );
  // Internet Explorer 6-11
  //   var isIE = /*@cc_on!@*/ false || !!document.documentMode;

  //   // Edge 20+
  //   var isEdge = !isIE && !!window.StyleMedia;

  //   // Chrome 1 - 71
  //   var isChrome =
  //     !!window.chrome && (!!window.chrome.webstore || !!window.chrome.runtime);

  console.log("isSafari", isSafari);
  //   console.log("isChrome", isChrome);
  //   console.log("isEdge", isEdge);
  //   console.log("isIE", isIE);
  if (isSafari) {
    $(".section").css("background-attachment", "initial");
  }
});
