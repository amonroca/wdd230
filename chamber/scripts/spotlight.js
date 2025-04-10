document.addEventListener("DOMContentLoaded", () => {
    const spotlightContainer = document.getElementById("spotlight-companies");

    // Caminho para o arquivo JSON
    const jsonUrl = "data/members.json";

    // Função para embaralhar os membros
    function shuffleArray(array) {
        return array.sort(() => Math.random() - 0.5);
    }

    // Função para criar o HTML de um membro
    function createSpotlightHTML(member) {
        return `
            <div class="company">
                <img src="${member.image}" alt="${member.name}">
                <div class="company-info">
                    <h3>${member.name}</h3>
                    <p>${member.description}</p>
                    <p><strong>Phone:</strong> ${member.phone}</p>
                    <p><strong>Website:</strong> <a href="${member.website}" target="_blank">${member.website}</a></p>
                    <p><strong>Membership Level:</strong> ${member.membership}</p>
                </div>
            </div>
        `;
    }

    // Busca os dados do JSON
    fetch(jsonUrl)
        .then(response => response.json())
        .then(data => {
            // Filtra os membros com nível de associação Silver ou Gold
            const qualifiedMembers = data.filter(member => 
                member.membership === "Silver" || member.membership === "Gold"
            );

            // Embaralha os membros e seleciona os 3 primeiros
            const spotlightMembers = shuffleArray(qualifiedMembers).slice(0, 3);

            // Gera o HTML para os membros selecionados
            spotlightMembers.forEach(member => {
                spotlightContainer.innerHTML += createSpotlightHTML(member);
            });
        })
        .catch(error => console.error("Error loading members data:", error));
});