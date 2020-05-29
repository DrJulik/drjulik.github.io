// theme toggling
const theme_toggler = document.querySelector("#theme-toggler");

theme_toggler.addEventListener("change", function (e) {
	updateTheme(); // update color theme
});

const initTheme = () => {
	let lightThemeSelected =
		localStorage.getItem("themeSwitch") !== null &&
		localStorage.getItem("themeSwitch") === "light";

	//   update checkbox
	theme_toggler.checked = lightThemeSelected;
	// update class
	lightThemeSelected
		? document.body.classList.add("light")
		: document.body.classList.remove("light");
};

const updateTheme = () => {
	if (theme_toggler.checked) {
		// light theme selected
		document.body.classList.add("light");
		localStorage.setItem("themeSwitch", "light"); // save theme selection
	} else {
		document.body.classList.remove("light");
		localStorage.removeItem("themeSwitch"); // reset theme selection
	}
};

initTheme();
