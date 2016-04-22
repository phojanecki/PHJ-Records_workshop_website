$(document).ready(function(){

  $('#hamburger').on('click', function (){
    console.log('dziala');
    $('.wrapper').toggleClass('open');
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

// Sticky menu + smooth scrooling to anchor
$('#menu .inner-link').on('click', function(event){
  event.preventDefault();
  $('body').animate({
    scrollTop: $($(this).attr("href")).offset().top + "px",
  }, 1500);
});

// Anchor to specified offset on different subpage
if (window.location.hash != null && window.location.hash != '') {
        $('body').animate({
            scrollTop: $(window.location.hash).offset().top
        }, 1000);
}

// Smooth scrolling for 'Music' link
$('.music').on('click', function(event){
  event.preventDefault();
  $('body').animate({
    scrollTop: $($(this).attr("href")).offset().top + "px"
  }, 1000);
});

// Submit form (does not work yet)
function validateForm() {
  var $form = $('#delivery-form');
  var $name = $('#name');
  var $street = $('#street');
  var $city = $('#city');
  var $post = $('#post');
  var $email = $('#email');
  var $tel = $('#tel');
  var $submit = $('#submit');

  $('.simpleCart_checkout').on('click', function(e){
    // e.preventDefault();
    var inputName = $(name).val();
    var inputStreet = $(street).val();
    var inputCity = $(city).val();
    var inputPost = $(post).val();
    var inputEmail = $(email).val();
    var inputTel = $(tel).val();

    // ((inputName == null || inputName == "")
    //   && (inputStreet == null || inputStreet == "")
    //   && (inputCity == null || inputCity == "")
    //   && (inputPost == null || inputPost == "")
    //   && (inputEmail == null || inputEmail == "")
    //   && (inputTel == null || inputTel == ""))


    if ((inputName == "")
      || (inputStreet == "")
      || (inputCity == "")
      || (inputPost == "")
      || (inputEmail == "")
      || (inputTel = "")) {
      alert("Please fill in obligatory fields");
      e.preventDefault();
    } else {
      $submit.addClass('simpleCart_checkout');
      // e.preventDefault();
      simpleCart({
        checkout: {
          type: "PayPal",
          email: "you@yours.com"
        }
      });
    }
  });
}
// validateForm();

// Show shipping address
var $showShippingAddress = $('.show-shipping-address');
var $shippingAddressBox = $('.shipping-address');

$showShippingAddress.on('click', function(){
  $shippingAddressBox.slideToggle(1000);
});


// SIMPLE CART
  simpleCart({
    checkout: {
      type: "PayPal",
      email: "you@yours.com"
    }
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
