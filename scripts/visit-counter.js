// Page Visit Counter
const visitCounter = document.getElementById('visit-counter');

// Recupera o número de visitas do localStorage
let visits = Number(localStorage.getItem('visits')) || 0;

// Incrementa o contador
visits++;

// Atualiza o localStorage com o novo valor
localStorage.setItem('visits', visits);

// Exibe o número de visitas na página
visitCounter.textContent = visits;