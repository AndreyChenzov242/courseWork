$(function(){
	
	$('.click').on('click', function(){
		
		$('.burger-menu').slideToggle(500);
        $(".burger-menu").css("display", "flex");
 });
	
});

$(function(){
	
	$('.header-nav__li').on('click', function(){
        $('.burger-menu').slideToggle(500);
 });
	
});

$(function() {
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
  });
  
  