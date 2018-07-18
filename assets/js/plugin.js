(function($) {
  'use strict';  
    /*======================================/
                  Preloader JS
    ======================================*/  
      var prealoaderOption = $(window);
      prealoaderOption.on("load", function () {
          var preloader = jQuery('.spinner');
          var preloaderArea = jQuery('.preloader-area');
          preloader.fadeOut();
          preloaderArea.delay(350).fadeOut('slow');
      });
    /*======================================/
                  Preloader JS
    ======================================*/
    /*======================================/
                sticky header JS
    ======================================*/
    $(window).on('scroll', function () {
        var scroll = $(window).scrollTop();
        if (scroll < 100) {
            $("#header-area").removeClass("sticky");
        } else {
            $("#header-area").addClass("sticky");
        }
    });
    /*======================================/
                sticky header JS
    ======================================*/
    /*=======================
              Scroll top js
    =========================*/
        $(window).on('scroll', function() {
            if ($(this).scrollTop() > 100) {
                $('#scroll-up').fadeIn();
            } else {
                $('#scroll-up').fadeOut();
            }
        });
        $('#scroll-up').on('click', function() {
            $("html, body").animate({
                scrollTop: 0
            }, 600);
            return false;
        });
    /*=======================
              Scroll top js
    =========================*/
})(window.jQuery);   
   