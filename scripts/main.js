"use strict";

/* swiper */
const swiper = new Swiper(".swiper", {
	pagination: {
		el: '.swiper-pagination',
		clickable: true,
	},
	autoplay: {
		delay: 5000,
	},
	// Default parameters
	slidesPerView: 3,
	spaceBetween: 30,
	// Responsive breakpoints
	
})
  