"use strict";

/* burger-menu */
const burgerMenu = document.querySelector(".menu");
const burgerButton = document.querySelector(".burger-button");
const burgerLines = document.querySelectorAll(".burger-button__line");

if (burgerMenu) {
	burgerButton.addEventListener("click", function () {
		burgerMenu.classList.toggle("menu--open");
		document.body.classList.toggle("--hidden");
		burgerLines.forEach(element => {
			element.classList.toggle("burger-button__line--active");
		});
	})
}