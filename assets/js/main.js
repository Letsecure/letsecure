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
            // $("#header-area").removeClass("sticky");
            console.log('chi');
        } else {
            $("#header-area").addClass("sticky");
        }
    });
    /*======================================/
                sticky header JS
    ======================================*/
    /*======================================/
                  scroll top JS
    ======================================*/
    $("a.page-scroll").on('click', function (event) {
        if (this.hash !== "") {
            event.preventDefault();
            var hash = this.hash;
            //console.log($(hash).offset().top - topOffset);
            $('html, body').animate({
                scrollTop: $(hash).offset().top - $("header").outerHeight() + "px"
            }, 1200, function () {

                //window.location.hash = hash;
            });
        } // End if
    });
    /*======================================/
                  scroll top JS
    ======================================*/
    /*======================================/
              slick slider js
    ======================================*/
    $('.single-slide').owlCarousel({
        loop:true,
        margin:0,
        dots:false,
        nav:true,
        smartSpeed: 700,
        navText : ["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"],
        responsive:{
            0:{
                items:1
            },
            600:{
                items:1
            },
            1000:{
                items:1
            }
        }
    })
    $('.responsive').owlCarousel({
        loop: true,
        margin: 50,
        responsiveClass:true,
        autoplay:true,
        dots:false,
        autoplayTimeout:2000,
        responsive:{
            0:{
                items:1,
                nav:false
            },
            600:{
                items:3,
                margin:30,
                nav:false
            },
            1200:{
                items:4,
                nav:false,
                loop: true,
            }
        }
    })
    $('.review-slide').owlCarousel({
        loop: true,
        margin: 10,
        responsiveClass:true,
        autoplay:false,
        dots:true,
        nav:false,
        autoplayTimeout: 4000,
        responsive:{
            0:{
                items:1,
            },
            600:{
                items:1,
            },
            1200:{
                items:1,
            }
        }
    })
    /*======================================/
                slick slider js
    ======================================*/

    /*======================================/
                  isotope js
    ======================================*/
    $('#portfolio').imagesLoaded( function() {
        // init Isotope
        var $grid = $('.grid-area').isotope({
            itemSelector: '.single-item',
            layoutMode: 'fitRows'
        });
        // bind filter button click
        $('#filters').on('click', 'button', function () {
            var filterValue = $(this).attr('data-filter');
            $grid.isotope({filter: filterValue});
        });
        $('.button-group').each(function (i, buttonGroup) {
            var $buttonGroup = $(buttonGroup);
            $buttonGroup.on('click', 'btn-link', function () {
                $buttonGroup.find('.is-checked').removeClass('is-checked');
                $(this).addClass('is-checked');
            });
        });
    });   
    /*======================================/
                  isotope js
    ======================================*/
    /*======================================/
                      counterup JS
    ======================================*/
    $('.counter').counterUp({
        delay: 80,
        time: 8000
    });
    /*======================================/
                      counterup JS
    ======================================*/
    /*======================================/
                  magnific-Popup js
    ======================================*/
    $('.video-play').magnificPopup({
        type: 'iframe',
        removalDelay: 300,
        mainClass: 'mfp-fade'
    });
    $('.portfolio-single').magnificPopup({
        type: 'image',
        gallery: {
            enabled: true
        }
    });
    /*======================================/
                magnific-Popup js
    ======================================*/
    /*======================================/
                    Wow JS
     ======================================*/
        new WOW().init();
    /*======================================/
                    Wow JS
    ======================================*/

    /*======================================
                    google map JS
    ======================================*/ 
        $(window).on('load', function initMap() {
            var map = new google.maps.Map(document.getElementById('map'), {
                center: {
                  lat: 23.810332,
                  lng: 90.412518
                },
                zoom: 13
            });
            // Let's also add a marker while we're at it
            var marker = new google.maps.Marker({
                position: new google.maps.LatLng(23.810332, 90.412518),
                map: map,
                    icon: {
                        url: 'assets/img/marker.png',
                    },
                animation: google.maps.Animation.BOUNCE
            });
        });    
    /*======================================  
                    google map JS
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
	/*=======================
       Ajax contact form js
    =========================*/
	
	$("#contact-form").submit(function (event) {

        var successMail = '#success' ;
        var errorMail = '#error' ;

        event.preventDefault();



        var formData = $("#contact-form").serialize();

        $("#contact-form :input").prop("disabled", true);

        $.ajax({
            type: 'POST',
            url: $('#contact-form').attr('action'),
            data: formData
        })
            .done(function (response) {
                $(successMail).show();
                $(errorMail).hide();
                $('.contact-form input').val('');
                $('.contact-form textarea').val('');
                $("#contact-form :input").prop("disabled", false);
                console.log(response);
                $(successMail).text(response.success);
            })
            .fail(function (jqXHR, textStatus, errorThrown) {

                var msg = JSON.parse(jqXHR.responseText) ;
                $(errorMail).show();
                $(successMail).hide();
                $("#contact-form :input").prop("disabled", false);
                $(errorMail).text(msg.error);
            });


        return false ;
    })
    /*=======================
       Ajax contact form js
    =========================*/

    /*=======================
       Ajax Mailchimp form js
    =========================*/
    // mailchimp start
    if ($('.mailchimp').length > 0) {
        /*  MAILCHIMP  */
        $('.mailchimp').ajaxChimp({
            language: 'es',
            callback: mailchimpCallback,
            url: "" 
            //Replace this with your own mailchimp post URL. Don't remove the "". Just paste the url inside "".
        });
    }
    function mailchimpCallback(resp) {
        if (resp.result === 'success') {
            $('.subscription-success').html('<i class="fa fa-check"></i><br/>' + resp.msg).fadeIn(1000);
            $('.subscription-error').fadeOut(500);

        } else if (resp.result === 'error') {
            $('.subscription-error').html('<i class="fa fa-times"></i><br/>' + resp.msg).fadeIn(1000);
        }
    }
    $.ajaxChimp.translations.es = {
        'submit': 'Submitting...',
        0: 'We have sent you a confirmation email',
        1: 'Please enter a value',
        2: 'An email address must contain a single @',
        3: 'The domain portion of the email address is invalid (the portion after the @: )',
        4: 'The username portion of the email address is invalid (the portion before the @: )',
        5: 'This email address looks fake or invalid. Please enter a real email address'
    }; 
    /*=======================
       Ajax Mailchimp form js
    =========================*/ 
})(window.jQuery);   
   