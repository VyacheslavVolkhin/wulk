//field-password
const passwordToggle = document.querySelectorAll(".js-password-toggle");
for (let i = 0; i < passwordToggle.length; i++) {
  passwordToggle[i
	].addEventListener("click", function (e) {
	if (this.classList.contains("active")) {
	  this.classList.remove("active");
	  const input = this.closest(".frm-field-password").querySelector(
		".form-input"
	  );
	  input.type = "password";
		} else {
	  this.classList.add("active");
	  const input = this.closest(".frm-field-password").querySelector(
		".form-input"
	  );
	  input.type = "text";
		}
	e.preventDefault();
	})
}


//files add
if (document.querySelector('.js-field-file .js-file-button')) {
	document
    .querySelector(".js-field-file .js-file-button")
    .addEventListener("click", function () {
      this.parentElement.querySelector('input[type="file"]').click();
    });
}
const inputs = document.querySelectorAll('.js-field-file input[type="file"]');
for (let i = 0; i < inputs.length; i++) {
  inputs[i].addEventListener('change', function(event) {
	let fileName = event.target.value;
	if (fileName == '') {
	  fileName = this.parentNode.querySelector('.js-file-button').getAttribute('data-title');

	  this.parentNode.classList.remove('active');
	  this.parentNode.querySelector('.js-file-button .button-title').innerHTML = fileName;
	} else {
	  this.parentNode.classList.add('active');
	  this.parentNode.querySelector('.js-file-button .button-title').innerHTML = fileName;
	}
  });
}


//slider lkmenu
const swiperSliderLKMenu = new Swiper('.slider-lkmenu .swiper', {
	loop: true,
	slidesPerView: "auto",
	spaceBetween: 0,
	autoHeight: false,
	speed: 400,
	pagination: false,
	autoplay: false,
	freeMode: true,
	navigation: {
		nextEl: '.btn-action-ico.ico-arrow.ico-arrow-next.button-slider-lkmenu-next',
		prevEl: '.btn-action-ico.ico-arrow.ico-arrow-prev.button-slider-lkmenu-prev',
	},

});