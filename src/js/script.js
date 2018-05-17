// ===================Owl carousel===============

$(document).ready(function() {
  $(".owl-carousel").owlCarousel({
    items: 1,
    loop: true,
    center: true,
    dots: true,
    autoplay: true,
    autoplayTimeout: 6000
  });
});

//= =======================Animation========
//console.log('hello');

jQuery(document).ready(function() {

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

  jQuery('.pc-context__button-wrapper').addClass("hidden").viewportChecker({
    classToRemove: 'hidden',
    classToAdd: 'visible animated bounceInUp', // Class to add to the elements when they are visible
    offset: 100,
    removeClassAfterAnimation: true,
  });

  jQuery('.pc-context__block').addClass("hidden").viewportChecker({
    classToRemove: 'hidden',
    classToAdd: 'visible animated bounceInUp', // Class to add to the elements when they are visible
    offset: 100,
    removeClassAfterAnimation: true,
  });

});

//===================owl slider tabs turn on/off==

$('.slide__button').click(function(e) {
  e.preventDefault();

  $(this).parent().children().removeClass('blueFont');
  $(this).addClass('blueFont');

  if ($(this).text() === 'Smart design') {
    $('.slide__text1').show();
    $('.slide__text2').hide();
  } else {
    $('.slide__text1').hide();
    $('.slide__text2').show();
  }

});

//===================pc context tabs turn on/off==
$('.pc-context__button').addClass('greyFont');


$('.pc-context__button').click(function(e) {
  e.preventDefault();

  $(this).parent().children().removeClass('blueFont');
  $(this).parent().children().addClass('greyFont');
  $(this).removeClass('greyFont');
  $(this).addClass('blueFont');

  if ($(this).text() === 'Smart design') {
    $('.pc-context__block_tab1').show();
    $('.pc-context__block_tab2').hide();
  } else {
    $('.pc-context__block_tab1').hide();
    $('.pc-context__block_tab2').show();
  }

})

