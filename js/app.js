$(document).ready(function(){

  // News slider
  $("#slideshow > div:gt(0)").hide();
  setInterval(function() {
    $('#slideshow > div:first')
      .fadeOut(2000)
      .next()
      .fadeIn(2000)
      .end()
      .appendTo('#slideshow');
  },  4000);

// Sticky menu scrolls to anchor
$('#menu .inner-link').on('click', function(event){
  event.preventDefault();
  $('body').animate({
    scrollTop: $($(this).attr("href")).offset().top + "px",
  }, 1500);
});

// Smooth scrolling for 'Music' link
$('.music').on('click', function(event){
  event.preventDefault();
  $('body').animate({
    scrollTop: $($(this).attr("href")).offset().top + "px"
  }, 1000);
});

// Purchase confirmation - notification on-screen
// $('.item_add').on('click', function() {
//   $('body').fadeTo(1000, 0.6).delay(1000);
//   $('#purchase-confirmation').fadeIn(1000).delay(1000);
//   $('#purchase-confirmation').fadeOut(1000);
//   $('body').fadeTo(1000, 1);
// });

// Shop
simpleCart({
			checkout: {
				type: "PayPal",
				email: "you@yours.com"
			}
		});

    simpleCart({
        option1: "value" ,
        option2: "value2"
    });

});
