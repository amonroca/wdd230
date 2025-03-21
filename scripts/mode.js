const modeButton = document.querySelector("#mode");
const main = document.querySelector("main");
const activities = document.querySelector("#activities");
const information = document.querySelector("#information");

modeButton.addEventListener("click", () => {
	if (modeButton.textContent.includes("🕶️")) {
		main.style.background = "#000";
		main.style.color = "#fff";
        activities.style.background = "#000";
        activities.style.color = "#fff";
        information.style.background = "#000";
        information.style.color = "#fff";
		modeButton.textContent = "🔆";
	} else {
		main.style.background = "#fff";
		main.style.color = "#000";
        activities.style.background = "#fff";
        activities.style.color = "#000";
        information.style.background = "#fff";
        information.style.color = "#000";
		modeButton.textContent = "🕶️";
	}
});