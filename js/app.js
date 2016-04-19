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
  }, 1000);
});

// Smooth scrolling for 'Music' link
$('.music').on('click', function(event){
  event.preventDefault();
  $('body').animate({
    scrollTop: $($(this).attr("href")).offset().top + "px"
  }, 1000);
});

// Purchase confirmation - notification on-screen
$('.buy').on('click', function() {
  $('body').fadeTo(1500, 0.6).delay(3000);
  $('#purchase-confirmation').fadeIn(1500).delay(3000);
  $('#purchase-confirmation').fadeOut(1500);
  $('body').fadeTo(1500, 1);
});

});
