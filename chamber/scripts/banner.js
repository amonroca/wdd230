document.addEventListener("DOMContentLoaded", () => {
    const banner = document.getElementById("meet-greet-banner");
    const closeButton = document.getElementById("close-banner");

    const today = new Date().getDay();

    if (today >= 1 && today <= 3) {
        banner.classList.add("visible");
    }

    closeButton.addEventListener("click", () => {
        banner.classList.remove("visible");
    });
});