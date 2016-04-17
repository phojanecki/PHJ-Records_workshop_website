$(document).ready(function(){

// Sticky Menu
/* PROBLEM - when scrolling down, header goes immediately under the News heading*/
var $header = $('header');
var $headerPosition = $('header').offset().top;

$(window).on('scroll', function(){
  var $documentPosition = $(document).scrollTop();
  if($documentPosition > $headerPosition) {
    $($header).addClass('sticky');
    console.log('dodano klase sticky')
  }else {
    $($header).removeClass('sticky');
    console.log('usunieto klase sticky')
  }
  return false;
});

//Menu - smooth scrolling
/*Requires correction:
1. Navigation header covers every section heading
2. Do not return on top when clicking 'home'*/

$('#menu a').on('click', function(event){
  event.preventDefault();
  $('body').animate({
    scrollTop: $($(this).attr("href")).offset().top + "px"
  }, 1000);
});

// Smooth scrolling for 'Music' link
$('.music').on('click', function(event){
  event.preventDefault();
  $('body').animate({
    scrollTop: $($(this).attr("href")).offset().top + "px"
  }, 1000);
});

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

});
