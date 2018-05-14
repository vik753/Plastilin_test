//= =======================Animation========
//console.log('hello');

jQuery(document).ready(function () {

    //=======Animation Viewport-Checker===============
    
    jQuery('.icon-wrapper').addClass("hidden").viewportChecker({
      classToRemove: 'hidden',
      classToAdd: 'visible animated rubberBand', // Class to add to the elements when they are visible
      offset: 100,
      removeClassAfterAnimation: true,
    });

    jQuery('.circle').addClass("hidden").viewportChecker({
      classToRemove: 'hidden',
      classToAdd: 'visible animated rubberBand', // Class to add to the elements when they are visible
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