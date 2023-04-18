updateIcons();

const hamburger = document.getElementById("hamburger-menu");
const dropdown = document.getElementById("dropdown");
let state = 0;

function toggle() {
	if (state == 0) {
		hamburger.innerHTML = '<i data-feather="x"></i>';
		state++;
		hamburger.setAttribute("currentState", state);
		updateIcons();
		dropdown.classList.remove("hidden");
		dropdown.classList.add("flex");
		return;
	} else hamburger.innerHTML = '<i data-feather="menu"></i>';
	hamburger.setAttribute("currentState", "0");
	state--;
	updateIcons();
	dropdown.classList.remove("flex");
	dropdown.classList.add("hidden");
}

function updateIcons() {
	feather.replace();
}
