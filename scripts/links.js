const baseURL = "https://amonroca.github.io/wdd230/";
const linksURL = `${baseURL}data/links.json`;

const getLinks = async () => {
    try {
        const response = await fetch(linksURL);
        if (response.ok) {
            const data = await response.json();
            displayLinks(data.weeks);
        } else {
            throw new Error("Erro ao buscar os dados do links.json");
        }
    } catch (error) {
        console.error("Erro:", error);
    }
};

const displayLinks = (weeks) => {
    const linksList = document.querySelector("#activity-list");

    weeks.forEach((week) => {
        const weekTitle = week.week;
        const listItem = document.createElement("li");
        listItem.textContent = `${weekTitle}: `;

        week.links.forEach((link) => {
            const anchor = document.createElement("a");
            anchor.setAttribute("href", `${baseURL}${link.url}`);

            if (week.links.indexOf(link) !== week.links.length - 1) {
                anchor.textContent = `${link.title} | `;
            } else {
                anchor.textContent = `${link.title}`;
            }

            listItem.appendChild(anchor);
        });

        linksList.appendChild(listItem);
    });
};

getLinks();