//slider top
const swiperSliderTop = new Swiper('.slider-top .swiper', {
	loop: false,
	slidesPerView: 1,
	spaceBetween: 0,
	autoHeight: true,
	speed: 400,
	pagination: false,
	autoplay: {
		delay: 2500,
		disableOnInteraction: false,
	},
	navigation: {
		nextEl: '.btn-action-ico.ico-arrow.ico-arrow-next.button-slider-top-next',
		prevEl: '.btn-action-ico.ico-arrow.ico-arrow-prev.button-slider-top-prev',
	},
	breakpoints: {
	},

});


//slider works
const swiperSliderWorks = new Swiper('.slider-works .swiper', {
	loop: true,
	slidesPerView: 1,
spaceBetween: 0,
	autoHeight: true,
	speed: 400,
	pagination: false,
	autoplay: false,
	navigation: {
		nextEl: '.btn-action-ico.ico-arrow.ico-arrow-next.button-slider-works-next',
		prevEl: '.btn-action-ico.ico-arrow.ico-arrow-prev.button-slider-works-prev',
	},

});