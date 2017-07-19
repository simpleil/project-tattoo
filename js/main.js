
$(document).ready(function(){
  $('.bxslider').bxSlider({
  auto: true,
  mode: 'fade',
  pause: 3000,
  speed: 500
});
  $('.slider2').bxSlider({
    slideWidth: 227,
    minSlides: 2,
    maxSlides: 5,
    moveSlides: 1,
    slideMargin: 10
  });
  $("a").on('click', function(event) {
    if (this.hash !== "") {
      event.preventDefault();
      var hash = this.hash;
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 1200, function(){
           window.location.hash = hash;
      });
    } 
  });
});


