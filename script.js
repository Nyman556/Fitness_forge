const hamburger = document.getElementById("hamburger-menu");
const dropdown = document.getElementById("dropdown");
const landing = document.getElementById("landing");
let slideIndex = 1;
let state = 0;

updateIcons();

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
	let slides = document.getElementsByClassName("slide");
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

function togglePlan(n) {
	let buttons = document.getElementsByClassName("plans-toggle");
	for (i = 0; i < buttons.length; i++) {
		buttons[i].classList.remove("plans-active");
	}
	buttons[n].classList.add("plans-active");
	renderTable(n);
}

const tableData = {
	pushData: {
		exercises: [
			"Flat Bench",
			"Incline Bench",
			"Shoulder Press",
			"Lateral Raises",
			"Pushdowns",
			"Overhead Extensions",
		],
		sets: [5, 3, 5, 3, 3, 3],
		reps: [5, 10, 5, 12, 12, 12],
		time: ["60s", "60s", "60s", "60s", "35s", "60s"],
	},
	pullData: {
		exercises: [
			"Pull ups",
			"Pulldowns",
			"Barbell row",
			"Seated cable row",
			"Shrugs",
			"Bicep curls",
		],
		sets: [4, 4, 3, 3, 4, 4],
		reps: ["AMRAP", 10, 8, 10, 10, 10],
		time: ["60s", "60s", "160s", "60s", "60s", "60s"],
	},
	legsData: {
		exercises: [
			"Squats",
			"Rear deadlift",
			"lunges",
			"Hip thrusts",
			"Extensions",
			"Hamstring curls",
		],
		sets: [5, 4, 4, 3, 3, 3],
		reps: [5, 8, 12, 8, 12, 12],
		time: ["60s", "60s", "60s", "60s", "35s", "60s"],
	},
};

function renderTable(n) {
	const targetedTableData = Object.values(tableData)[n];
	tBody = document.getElementById("table").firstElementChild;
	tBody.innerHTML = `					
			<tr id="table-head">
				<th>Exercise Name</th>
				<th>Sets</th>
				<th>Reps</th>
				<th>Time/set</th>
				<th>Complete</th>
			</tr>`;
	for (i = 0; i < 6; i++) {
		tData = document.createElement("td");
		tRow = document.createElement("tr");
		tData.innerHTML = `${targetedTableData.exercises[i]}`;
		tRow.append(tData);
		tRow.classList.add(`row-${i}`);
		tBody.append(tRow);
		if (i < 6) {
			tData = document.createElement("td");
			tData.innerHTML = `${targetedTableData.sets[i]}`;
			tRow.append(tData);
			tBody.append(tRow);
		}
		if (i < 6) {
			tData = document.createElement("td");
			tData.innerHTML = `${targetedTableData.reps[i]}`;
			tRow.append(tData);
			tBody.append(tRow);
		}
		if (i < 6) {
			tData = document.createElement("td");
			tData.innerHTML = `${targetedTableData.time[i]}`;
			tRow.append(tData);
			tBody.append(tRow);
		}
		if (i < 6) {
			tData = document.createElement("td");
			tCheckbox = document.createElement("input");
			tCheckbox.setAttribute("type", "checkbox");
			tData.append(tCheckbox);
			tRow.append(tData);
			tBody.append(tRow);
		}
	}
}

if (landing != null) {
	showSlides();
	renderTable(1);
}
