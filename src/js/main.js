/* ==========================================================================

    Project: test-project
    Author: Dorota
    Last updated: @@timestamp

   ========================================================================== */

'use strict';


var Testproject = {

  /**
   * Init function
   */
  init: function() {
    Testproject.exampleFn();
    Testproject.galleryHandler();
  },

  /**
   * Example function
   */
  exampleFn: function() {
    console.log('Ready!');
  },
  
  /**
   * Gallery
   */
    galleryHandler: function () {
        $('a.gallery').colorbox({
            open: true,
            rel: 'gallery',
            loop: false,
            slideshow: true,
            slideshowSpeed: 2000,
            slideshowAuto: true
        });
        
        //close if last slide
        $('a.gallery').last().colorbox({
            onComplete: function(){
                setTimeout(function(){
                    $.colorbox.close();
                }, 2000);
            }
        });

    }

};

document.addEventListener('DOMContentLoaded', function() {
  Testproject.init();
});


