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

var $showShippingAddress = $('.show-shipping-address');
var $shippingAddressBox = $('.shipping-address');

$showShippingAddress.on('click', function(){
  $shippingAddressBox.slideToggle(1000);
})

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

//Shipping costs
  simpleCart.shipping(function(){
    return 7.99;
  });
  simpleCart.shipping();

//Tax rate
  simpleCart({
  taxRate: 0.23
  });

  simpleCart.tax();
});

// Submit form

function submitForm() {
  var $form = $('#delivery-form');
  var $name = $('#name');
  var $street = $('#street');
  var $city = $('#city');
  var $post = $('#post');
  var $email = $('#email');
  var $tel = $('#tel');
  var $submit = $('#submit');

  $form.on('submit', function(){
    var inputName = $(name).val();
    var inputStreet = $(street).val();
    var inputCity = $(city).val();
    var inputPost = $(post).val();
    var inputemail = $(email).val();
    var inputTel = $(tel).val();

    if(inputName < 5 || inputMessage < 10){
      $(error).text("Imię lub wiadomość jest za krótka.");
      submit.preventDefault();
    }
  });
}
submitForm();
