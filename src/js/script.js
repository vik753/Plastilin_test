// ===================Owl carousel===============

$(document).ready(function(){
  $(".owl-carousel").owlCarousel({
    items: 1,
    loop: true,
    center: true,
    dots: true,
    autoplay: false,
    autoplayTimeout: 10000
  });
});

//= =======================Animation========
//console.log('hello');

jQuery(document).ready(function () {

  //=======Animation Viewport-Checker===============

  jQuery('.circle').addClass("hidden").viewportChecker({
    classToRemove: 'hidden',
    classToAdd: 'visible animated zoomIn', // Class to add to the elements when they are visible
    offset: 100,
    removeClassAfterAnimation: true,
  });

  jQuery('.title').addClass("hidden").viewportChecker({
    classToRemove: 'hidden',
    classToAdd: 'visible animated bounceInDown', // Class to add to the elements when they are visible
    offset: 100,
    removeClassAfterAnimation: true,
  });

  jQuery('.button').addClass("hidden").viewportChecker({
    classToRemove: 'hidden',
    classToAdd: 'visible animated bounceInUp', // Class to add to the elements when they are visible
    offset: 100,
    removeClassAfterAnimation: true,
  });

  jQuery('.manImg').addClass("hidden").viewportChecker({
    classToRemove: 'hidden',
    classToAdd: 'visible animated bounceInRight', // Class to add to the elements when they are visible
    offset: 100,
    removeClassAfterAnimation: true,
  });

});

//===================tabs turn on/off==

$('.slide__button').click(function(e){
  e.preventDefault();

  $(this).parent().children().removeClass('blueFont');
  $(this).addClass('blueFont');

  if ($(this).text() === 'Smart design'){
    $('.slide__text1').show();
    $('.slide__text2').hide();
  } else {
    $('.slide__text1').hide();
    $('.slide__text2').show();
  }
 
})

