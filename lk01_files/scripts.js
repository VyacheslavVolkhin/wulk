$(document).ready(function() {
	$('.header-burger').click(function(event) {
		$('.header-burger, .head-menu').toggleClass('open__menu');
    });
    $('.head-menu .list-close').click(function () {
        $('.header-burger, .head-menu').removeClass('open__menu');
    });
});

// end header menu

/*function scrollToFormSection() {
    $('html, body').animate({
        scrollTop: $('.form-section').offset().top
    }, 1000);
};*/

$('.ask-question').click(function() {
    scrollToFormSection();
});

const scrollToId = () => {
    const section = document.querySelector(navLinkFunctional.getAttribute('href'));
    window.scrollTo({
      top: section.offsetTop - 40,
      behavior: 'smooth'
    });
  };

// tab-header
	$('.js-tab-trigger').click(function() {
   var id = $(this).attr('data-tab'),
       content = $('.js-tab-content[data-tab="'+ id +'"]');
   
   $('.js-tab-trigger.active').removeClass('active');
   $(this).addClass('active');
   
   $('.js-tab-content.active').removeClass('active');
   content.addClass('active');
});
// tab-header end

// magnific popup
jQuery(function($){
    $('.open-popup-link').magnificPopup({
        type:'inline',
        midClick: true
    });
    $('.open-popup-img').magnificPopup({
        type: 'image'
    });
    $('.open-popup-video').magnificPopup({
        type: 'iframe'
    });
});
// end magnific popup

// counter
$(document).ready(function(){
    $('.counter-1').each(function() {
        var $this = $(this), countTo = $this.attr('data-count');
        $({ countNum: $this.text()}).animate({
                countNum: countTo
            },
            {
            duration: 3000000000,
            easing:'linear',
            step: function() {
                $this.text(Math.floor(this.countNum));
            },
            complete: function() {
                $this.text(this.countNum);
                //alert('finished');
            }
        });
    });
    $('.counter-2').each(function() {
        var $this = $(this), countTo = $this.attr('data-count');
        $({ countNum: $this.text()}).animate({
            countNum: countTo
        },
        {
            duration: 10000,
            easing:'linear',
            step: function() {
                $this.text(Math.floor(this.countNum));
            },
            complete: function() {
                $this.text(this.countNum);
                //alert('finished');
            }
        });
    });
});

// end counter

// package accordeon
jQuery(function($){
    $('.package-list .drop-button').on('click', function() {
        if($(this).hasClass('active')) {
            $(this).removeClass('active');
            $('.package-list .drop-button').next().slideUp();
        } else {
            $('.package-list .drop-button').removeClass('active');
            $('.package-list .drop-button').next().slideUp();
            $(this).addClass('active');
            $(this).next().slideDown();
        };
    });
});
// end package accordeon

// carousel
jQuery(function($){
    /*$('.top-carousel').owlCarousel({
        items: 1,
        itemsDesktop: [1023,1],
        itemsTablet: [959,1],
        itemsMobile : [767,1],
        autoPlay: 7000,
        paginationSpeed: 1600,
        navigation: true,
        pagination: false,
        responsive: true,
        paginationNumbers: false,
        navigationText: false,
        stopOnHover: true
    });*/
    $('.team-carousel').owlCarousel({
        items: 1,
        itemsDesktop: [1023,1],
        itemsTablet: [959,1],
        itemsMobile : [767,1],
        autoPlay: 7000,
        paginationSpeed: 1600,
        navigation: true,
        pagination: false,
        responsive: true,
        paginationNumbers: false,
        navigationText: false,
        margin: 30,
        stopOnHover: true
    });
    $('.certificates-carousel').owlCarousel({
        items: 1,
        itemsDesktop: [1023,1],
        itemsTablet: [959,1],
        itemsMobile : [767,1],
        autoPlay: 7000,
        paginationSpeed: 1600,
        navigation: true,
        pagination: false,
        responsive: true,
        paginationNumbers: false,
        navigationText: false,
        stopOnHover: true
    });
    $('.portfolio-carousel').owlCarousel({
        items: 1,
        itemsDesktop: [1023,1],
        itemsTablet: [959,1],
        itemsMobile : [768,1],
        autoPlay: 7000,
        paginationSpeed: 1600,
        navigation: true,
        pagination: false,
        responsive: true,
        paginationNumbers: false,
        navigationText: false,
        stopOnHover: true
    });
    $('.product-carousel').owlCarousel({
        items: 1,
        itemsDesktop: [1023,1],
        itemsTablet: [959,1],
        itemsMobile : [767,1],
        autoPlay: 7000,
        paginationSpeed: 1600,
        navigation: true,
        pagination: false,
        responsive: true,
        paginationNumbers: false,
        navigationText: false,
        stopOnHover: true
    });
    function checkWindowWidthForMapCarousel() {
        if($(window).width() <= 1200) {
            $('.map-wrapper').owlCarousel({
                items: 1,
                itemsDesktop: [2100,1],
                itemsDesktopSmall: [1199,1],
                itemsTablet: [959,1],
                itemsMobile : [767,1],
                // autoPlay: 7000,
                paginationSpeed: 1600,
                navigation: true,
                pagination: false,
                responsive: true,
                paginationNumbers: false,
                navigationText: false,
                stopOnHover: true
            });
        };
    };
    checkWindowWidthForMapCarousel();
    $(window).resize(function() {
        checkWindowWidthForMapCarousel();
    });
    $('.iphones').owlCarousel({
        items: 3,
        itemsDesktop: [2100,3],
        itemsDesktopSmall: [1023,1],
        itemsTablet: [959,1],
        itemsMobile : [767,1],
        autoPlay: 7000,
        paginationSpeed: 1600,
        navigation: true,
        pagination: false,
        responsive: true,
        paginationNumbers: false,
        navigationText: false,
        stopOnHover: true
    });
    $('.license-carousel').owlCarousel({
        items: 1,
        itemsDesktop: [2100,1],
        itemsDesktopSmall: [1300,1],
        itemsTablet: [959,1],
        itemsMobile : [767,1],
        autoPlay: 7000,
        paginationSpeed: 1600,
        navigation: true,
        pagination: true,
        responsive: true,
        paginationNumbers: false,
        navigationText: false,
        stopOnHover: true
    });
    $('.work-carousel').slick({
        slidesToShow: 2,
        slidesToScroll: 1,
        arrows: true,
        responsive: [
            {
                breakpoint: 1301,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    });
    $('.top-carousel').slick({
        dots: false,
        infinite: true,
        speed: 1,
        fade: false,
        cssEase: 'ease-in-out',
        slidesToShow: 1,
    });
});
// end carousel

// animate
/*jQuery(function($){
    jQuery('.header-section, .section-slide, .section-footer, .section-bottom').addClass("hidden").viewportChecker({
        classToAdd: 'visible animated fadeIn',
        offset: 0
    });
    jQuery('.team-box').addClass("hidden").viewportChecker({
        classToAdd: 'visible animated fadeIn',
        offset: 200
    });
    jQuery('.section-company h2, .section-company .subtitle, .section-company .box, .section-company .company-text, .section-company .company-content .company-info-box, .section-work h2, .section-work .subtitle, .section-work .button-line, .section-team h2, .section-team .subtitle, .section-team .button, .section-portfolio h2, .portfolio-row .box-1, .portfolio-row .box-2, .portfolio-row .box-3, .portfolio-row .box-4, .portfolio-row .box-5, .portfolio-row .box-6, .portfolio-row .box-7, .section-portfolio .button-arrow, .certificates-box, .section-reviews h3, .reviews-content').addClass("hidden").viewportChecker({
        classToAdd: 'visible animated fadeInUp',
        offset: 100
    });
    jQuery('.work-item:nth-child(1) .work-link, .work-item:nth-child(3) .work-link, .work-item:nth-child(2) .work-info, .work-item:nth-child(4) .work-info, .section-certificates .button').addClass("hidden").viewportChecker({
        classToAdd: 'visible animated fadeInLeft',
        offset: 100
    });
    jQuery('.work-item:nth-child(2) .work-link, .work-item:nth-child(4) .work-link, .work-item:nth-child(1) .work-info, .work-item:nth-child(3) .work-info, .section-certificates h3').addClass("hidden").viewportChecker({
        classToAdd: 'visible animated fadeInRight',
        offset: 100
    });

});*/
// end animate

// portfolio menu
jQuery(function($){
    $('.portfolio-burger').on('click', function (){
        $('.portfolio-menu .list').toggleClass('open');
    });
});
// end portfolio menu

//placeholder ie
$(document).ready(function() {
    /* Placeholder for IE */
    if($.browser.msie) { // Условие для вызова только в IE
        $("form").find("input[type='text']").each(function() {
            var tp = $(this).attr("placeholder");
            $(this).attr('value',tp).css('color','#A9A9A9');
        }).focusin(function() {
            var val = $(this).attr('placeholder');
            if($(this).val() == val) {
                $(this).attr('value','').css('color','#747b80');
            }
        }).focusout(function() {
            var val = $(this).attr('placeholder');
            if($(this).val() == "") {
                $(this).attr('value', val).css('color','#A9A9A9');
            }
        });
        /* Protected send form */
        $("form").submit(function() {
            $(this).find("input[type='text']").each(function() {
                var val = $(this).attr('placeholder');
                if($(this).val() == val) {
                    $(this).attr('value','');
                }
            })
        });
    }
});
//end placeholder ie

// video popup
function videoPopupIframeSize() {
    $('.video-popup-content iframe').height($('.video-popup-content iframe').width() * 0.62);
};

videoPopupIframeSize();

$(window).resize(function () { 
    videoPopupIframeSize();
});

$('[data-video-src]').click(function () {
    $('.video-popup-content iframe').attr('src', $(this).data('video-src'));
    $('.video-popup-bg').addClass('active');
    videoPopupIframeSize();
});

function closeVideoPopup() {
    $('.video-popup-bg').removeClass('active');
    $('.video-popup-content iframe').attr('src', '');
};

$('.video-popup-bg').click(function() {
    closeVideoPopup();
});

$('.video-popup-inner .mfp-close').click(function() {
    closeVideoPopup();
});
// video popup end

// ymaps
if($('*').is('.map')) {
    ymaps.ready(init);
    function init() {
        var myMap1 = new ymaps.Map('map-1', {
            center: [55.753585, 37.621085],
            zoom: 10
            });

        myMap1.geoObjects
            .add(new ymaps.Placemark([55.753585, 37.621085], {
                balloonContent: 'Красная площадь'
            }, {
                // значение по умолчанию
                iconLayout: 'default#image',
                // путь к мзображению метки
                iconImageHref: 'img/icon/map-pin.svg',
                // размеры метки
                iconImageSize: [100, 100],
                // смещение метки (должно равняться половине от размера)
                iconImageOffset: [-50, -50]
            }))
            .add(new ymaps.Placemark([55.833436, 37.715175], {
                balloonContent: 'район Метрогородок'
            }, {
                iconLayout: 'default#image',
                iconImageHref: 'img/icon/map-pin.svg',
                iconImageSize: [70, 70],
                iconImageOffset: [-35, -35]
            }));

        var myMap2 = new ymaps.Map('map-2', {
            center: [59.939095, 30.315868],
            zoom: 10
            });

        myMap2.geoObjects
            .add(new ymaps.Placemark([59.939095, 30.315868], {
                balloonContent: 'Санкт-Петербург'
            }, {
                iconLayout: 'default#image',
                iconImageHref: 'img/icon/map-pin.svg',
                iconImageSize: [100, 100],
                iconImageOffset: [-50, -50]
            }));

        var myMap3 = new ymaps.Map('map-3', {
            center: [54.799392, 32.037220],
            zoom: 10
            });

        myMap3.geoObjects
            .add(new ymaps.Placemark([54.799392, 32.037220], {
                balloonContent: 'Витебское шоссе, 28'
            }, {
                iconLayout: 'default#image',
                iconImageHref: 'img/icon/map-pin.svg',
                iconImageSize: [100, 100],
                iconImageOffset: [-50, -50]
            }));
    };
};
// ymaps end