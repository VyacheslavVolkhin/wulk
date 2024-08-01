$(document).ready(function(){

    //popup block
    $('.js-popup-wrap .js-btn-toggle').on('click', function() {
        if ($(this).hasClass('active')) {
            $(this).removeClass('active');
            $('body').removeClass('menu-show');
            $('.js-popup-wrap').removeClass('popup-right');
        } else {
            $('.js-popup-wrap:not(.no-close) .js-btn-toggle').removeClass('active');
            $(this).addClass('active');
            if ($(this).parent().hasClass('header-nav-panel')) {
                $('body').addClass('menu-show');
            }
            pLeft = $(this).parent('.js-popup-wrap').find('.js-popup-block').offset().left;
            pWidth = $(this).parent('.js-popup-wrap').find('.js-popup-block').outerWidth();
            pMax = pLeft + pWidth;
            if ( pMax > $('.wrap').width() ) {
                $(this).parent('.js-popup-wrap').addClass('popup-right');
            } else {
                $('.js-popup-wrap').removeClass('popup-right');
            }
        }
        return false;
    })
    $('.js-popup-wrap .js-btn-close').on('click', function() {
        $(this).parents('.js-popup-wrap').children('.js-btn-toggle').removeClass('active');
        $('.js-popup-wrap').removeClass('popup-right');
        $('body').removeClass('menu-show');
        return false;
    })
    $(document).click(function(event) {
        if ($(event.target).closest(".js-popup-block").length) return;
        $('.js-popup-wrap:not(.no-close) .js-btn-toggle').removeClass('active');
        $('.js-popup-wrap').removeClass('popup-right');
        $('body').removeClass('menu-show');
        event.stopPropagation();
    });
    $('.js-popup-wrap').each(function() {
        if ($(this).hasClass('js-popup-select')) {
            if ($(this).find('.js-popup-block').find('.active').length>0) {
                $(this).find('.js-btn-toggle').addClass('selected');
                var currentSelect = $(this).find('.js-popup-block').find('.active').html();
                $(this).find('.js-btn-toggle').children('.button-title').html(currentSelect);
            } else {
                $(this).find('.js-btn-toggle').removeClass('selected');
            }
        }
    })
    $('.js-popup-wrap.js-popup-select .js-popup-block a').on('click', function() {
        if ($(this).hasClass('active')) {} else {
            $(this).parents('.js-popup-wrap').find('.js-popup-block').find('.active').removeClass('active');
            $(this).addClass('active');
            $('.js-tab-block').removeClass('active');
            $('.js-tabs-nav').each(function() {
                $('.js-tab-block[data-tab*="'+$(this).find('.js-popup-block').find('.active').attr('data-tab')+'"]').addClass('active');
            })
        }
        $('.js-popup-wrap').each(function() {
            if ($(this).hasClass('js-popup-select')) {
                if ($(this).find('.js-popup-block').find('.active').length>0) {
                    $(this).find('.js-btn-toggle').addClass('selected');
                    var currentSelect = $(this).find('.js-popup-block').find('.active').html();
                    $(this).find('.js-btn-toggle').children('.button-title').html(currentSelect);
                } else {
                    $(this).find('.js-btn-toggle').removeClass('selected');
                }
            }
        })
        $(this).parents('.js-popup-wrap').find('.js-btn-toggle').removeClass('active');
        return false;
    })

    //item-tile-video
    $('.js-btn-video').on('click', function () {
        let videoURL = $(this).parent('.item-tile-video').attr('data-video');
        $(this).parents('.item-tile-video').addClass('active');
        $(this).parents('.item-tile-video').append('<iframe width="100%" height="100%" src="' + videoURL + '" frameborder="0" allowfullscreen></iframe>')
        return false;
    })

    //section-top-box
    if (!!$('.section-top-box').offset()) {
        $('.section-top-box .slider').slick({
            dots: false,
            slidesToShow: 1,
            variableWidth: false,
            infinite: true,
            adaptiveHeight: false,
            rows: 1,
            swipeToSlide: true,
            prevArrow: false,
            nextArrow: false,
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        prevArrow: '<span class="btn-action-ico ico-arrow ico-arrow-prev"></span>',
                        nextArrow: '<span class="btn-action-ico ico-arrow ico-arrow-next"></span>',
                    }
                },
            ]
        });
    }

    //section-teams-box
    if (!!$('.section-teams-box').offset()) {
        $('.section-teams-box .slider').slick({
            dots: false,
            slidesToShow: 1,
            variableWidth: false,
            infinite: false,
            adaptiveHeight: false,
            rows: 1,
            swipeToSlide: true,
            prevArrow: false,
            nextArrow: false,
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        prevArrow: '<span class="btn-action-ico ico-arrow ico-arrow-prev"></span>',
                        nextArrow: '<span class="btn-action-ico ico-arrow ico-arrow-next"></span>',
                        variableWidth: true,
                    }
                },
            ]
        });
    }


    //section-portfolio-box
    if (!!$('.section-portfolio-box').offset()) {
        $('.section-portfolio-box .slider').slick({
            dots: false,
            slidesToShow: 4,
            variableWidth: false,
            infinite: true,
            adaptiveHeight: false,
            rows: 1,
            swipeToSlide: true,
            prevArrow: false,
            nextArrow: false,
            responsive: [
                {
                    breakpoint: 1200,
                    settings: {
                        slidesToShow: 3,
                        prevArrow: false,
                        nextArrow: false,
                    }
                },
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 2,
                        prevArrow: '<span class="btn-action-ico ico-arrow ico-arrow-prev"></span>',
                        nextArrow: '<span class="btn-action-ico ico-arrow ico-arrow-next"></span>',
                    }
                },
                {
                    breakpoint: 640,
                    settings: {
                        slidesToShow: 1,
                        prevArrow: '<span class="btn-action-ico ico-arrow ico-arrow-prev"></span>',
                        nextArrow: '<span class="btn-action-ico ico-arrow ico-arrow-next"></span>',
                    }
                },
            ]
        });
    }

    //section-srt-box
    if (!!$('.section-srt-box').offset()) {
        $('.section-srt-box .slider').slick({
            dots: false,
            slidesToShow: 1,
            variableWidth: true,
            infinite: true,
            adaptiveHeight: false,
            rows: 1,
            swipeToSlide: true,
            prevArrow: false,
            nextArrow: false,
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        prevArrow: '<span class="btn-action-ico ico-arrow ico-arrow-prev"></span>',
                        nextArrow: '<span class="btn-action-ico ico-arrow ico-arrow-next"></span>',
                    }
                },
            ]
        });
    }

    //section-reviews-box
    if (!!$('.section-reviews-box').offset()) {
        $('.section-reviews-box .slider').slick({
            dots: false,
            slidesToShow: 1,
            variableWidth: false,
            infinite: true,
            adaptiveHeight: true,
            rows: 1,
            swipeToSlide: true,
            prevArrow: false,
            nextArrow: false,
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        prevArrow: '<span class="btn-action-ico ico-arrow ico-arrow-prev"></span>',
                        nextArrow: '<span class="btn-action-ico ico-arrow ico-arrow-next"></span>',
                    }
                },
            ]
        });
    }


    //section-sps-box
    if (!!$('.section-sps-box').offset()) {
        $('.section-sps-box .slider').slick({
            dots: true,
            slidesToShow: 4,
            variableWidth: false,
            infinite: true,
            adaptiveHeight: false,
            rows: 1,
            swipeToSlide: true,
            prevArrow: '<span class="btn-action-ico ico-arrow ico-arrow-prev"></span>',
            nextArrow: '<span class="btn-action-ico ico-arrow ico-arrow-next"></span>',
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        variableWidth: true,
                        slidesToShow: 1,
                        dots: false,
                        prevArrow: '<span class="btn-action-ico ico-arrow ico-arrow-prev"></span>',
                        nextArrow: '<span class="btn-action-ico ico-arrow ico-arrow-next"></span>',
                    }
                },
            ]
        });
    }


    //section-top-slider-box
    if (!!$('.section-top-slider-box').offset()) {
        $('.section-top-slider-box .slider').slick({
            dots: false,
            slidesToShow: 1,
            slidesToScroll: 1,
            touchThreshold: 100,
            variableWidth: false,
            infinite: true,
            adaptiveHeight: true,
            rows: 1,
            swipeToSlide: true,
            autoplay: false,
            autoplaySpeed: 5000,
            prevArrow: false,
            nextArrow: false,
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 1,
                        prevArrow: '<span class="btn-action-ico ico-arrow ico-arrow-prev"></span>',
                        nextArrow: '<span class="btn-action-ico ico-arrow ico-arrow-next"></span>',
                    }
                },
            ]
        });

    }

});


