// Visit Message Logic
const visitMessage = document.getElementById('visit-message');

// Recupera a última visita do localStorage
const lastVisit = localStorage.getItem('lastVisit');
const now = Date.now();

if (!lastVisit) {
    // Primeira visita
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

// Atualiza o localStorage com a data/hora atual
localStorage.setItem('lastVisit', now);