const urlParams = new URLSearchParams(window.location.search);

function captalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

document.getElementById("first-name").textContent = urlParams.get("first-name") || "N/A";
document.getElementById("last-name").textContent = urlParams.get("last-name") || "N/A";
document.getElementById("title").textContent = urlParams.get("title") || "N/A";
document.getElementById("email").textContent = urlParams.get("email") || "N/A";
document.getElementById("phone").textContent = urlParams.get("phone") || "N/A";
document.getElementById("organization").textContent = urlParams.get("organization") || "N/A";
document.getElementById("membership-level").textContent = captalizeFirstLetter(urlParams.get("membership-level")) || "N/A";
document.getElementById("description").textContent = urlParams.get("description") || "N/A";
document.getElementById("timestamp").textContent = urlParams.get("timestamp") || "N/A";