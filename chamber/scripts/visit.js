const visitMessage = document.getElementById('visit-message');
const lastVisit = localStorage.getItem('lastVisit');
const now = Date.now();

if (!lastVisit) {
    visitMessage.textContent = "Welcome! Let us know if you have any questions.";
} else {
    const lastVisitDate = new Date(parseInt(lastVisit, 10));
    const differenceInTime = now - lastVisitDate.getTime();
    const differenceInDays = Math.floor(differenceInTime / (1000 * 60 * 60 * 24));

    if (differenceInDays < 1) {
        visitMessage.textContent = "Back so soon! Awesome!";
    } else if (differenceInDays === 1) {
        visitMessage.textContent = "You last visited 1 day ago.";
    } else {
        visitMessage.textContent = `You last visited ${differenceInDays} days ago.`;
    }
}

localStorage.setItem('lastVisit', now);