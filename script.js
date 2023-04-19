const hamburger = document.getElementById("hamburger-menu");
const dropdown = document.getElementById("dropdown");
const slidesLoaded = document.getElementsByClassName("slide");

let slideIndex = 1;
let state = 0;

updateIcons();
showSlides();

function toggle() {
	if (state == 0) {
		hamburger.innerHTML = '<i data-feather="x"></i>';
		state++;
		hamburger.setAttribute("currentState", state);
		updateIcons();
		dropdown.classList.replace("hidden", "flex");
		return;
	} else hamburger.innerHTML = '<i data-feather="menu"></i>';
	hamburger.setAttribute("currentState", "0");
	state--;
	updateIcons();
	dropdown.classList.replace("flex", "hidden");
}

function updateIcons() {
	feather.replace();
}

var header = document.getElementById("header");
window.onscroll = function () {
	stickyHeader();
};
var sticky = header.offsetTop;

function stickyHeader() {
	if (window.pageYOffset > sticky) {
		header.classList.add("sticky");
	} else {
		header.classList.remove("sticky");
	}
}

function plusSlides(n) {
	showSlides((slideIndex += n));
}

function currentSlide(n) {
	showSlides((slideIndex = n));
}

function showSlides(n) {
	let i;
	let slides = slidesLoaded;
	if (n > slides.length) {
		slideIndex = 1;
	}
	if (n < 1) {
		slideIndex = slides.length;
	}
	for (i = 0; i < slides.length; i++) {
		slides[i].style.display = "none";
	}
	slides[slideIndex - 1].style.display = "block";
}
