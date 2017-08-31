
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

  $(window).scroll(function(){
    if ($(this).scrollTop() > 100) {
      $('.scroll_to_top').fadeIn();
      $('.lineMenu').fadeIn();
    } else {
      $('.scroll_to_top').fadeOut();
      $('.lineMenu').fadeOut();
    }
  });
  
  $('.scroll_to_top').click(function(){
    $('html, body').animate({scrollTop : 0}, 1000);
    return false;
  });

  $('.article').on('mouseover', function(){
    $(this).find('.article_description').css(({'height': 'inherit', 'opacity': '1'}));
  });
  $('.article').on('mouseleave', function(e){
    e.stopPropagation();
    $(this).find('.article_description').css(({'height': '0px', 'opacity': '0'}));
  });

  $('.burger').click(function() {
    $('.dropDownMenu').fadeIn();
   });

  $('.item').click(function() {
   $('.dropDownMenu').fadeOut();
  });

  $('.cancel').click(function() {
   $('.dropDownMenu').fadeOut();
  });

});

