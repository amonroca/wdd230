const directoryURL = "data/members.json";
const directoryContainer = document.querySelector("#directory-container");
const gridViewButton = document.querySelector("#grid-view");
const listViewButton = document.querySelector("#list-view");

const getDirectoryData = async () => {
    try {
        const response = await fetch(directoryURL);
        if (response.ok) {
            const data = await response.json();
            displayDirectory(data);
        } else {
            throw new Error("Failed to fetch directory data.");
        }
    } catch (error) {
        console.error("Error:", error);
    }
};

const displayDirectory = (companies) => {
    directoryContainer.innerHTML = "";

    if (directoryContainer.classList.contains("grid-view")) {
        companies.forEach((company) => {
            const card = document.createElement("section");
            card.classList.add("directory-card");

            const img = document.createElement("img");
            img.setAttribute("src", company.image);
            img.setAttribute("alt", `${company.name} logo`);
            img.setAttribute("loading", "lazy");

            const name = document.createElement("h2");
            name.textContent = company.name;

            const address = document.createElement("p");
            address.textContent = company.address;

            const phone = document.createElement("p");
            phone.textContent = company.phone;

            const website = document.createElement("a");
            website.setAttribute("href", company.website);
            website.setAttribute("target", "_blank");
            website.textContent = "Visit Website";

            const membership = document.createElement("p");
            membership.textContent = `Membership Level: ${company.membership}`;

            card.appendChild(img);
            card.appendChild(name);
            card.appendChild(address);
            card.appendChild(phone);
            card.appendChild(website);
            card.appendChild(membership);

            directoryContainer.appendChild(card);
        });
    } else if (directoryContainer.classList.contains("list-view")) {
        const table = document.createElement("table");
        const thead = document.createElement("thead");
        const tbody = document.createElement("tbody");

        thead.innerHTML = `
            <tr>
                <th>Name</th>
                <th>Address</th>
                <th>Phone</th>
                <th>Website</th>
                <th>Membership</th>
            </tr>
        `;
        companies.forEach((company) => {
            const row = document.createElement("tr");

            const nameCell = document.createElement("td");
            nameCell.textContent = company.name;

            const addressCell = document.createElement("td");
            addressCell.textContent = company.address;

            const phoneCell = document.createElement("td");
            phoneCell.textContent = company.phone;

            const websiteCell = document.createElement("td");
            const websiteLink = document.createElement("a");
            websiteLink.setAttribute("href", company.website);
            websiteLink.setAttribute("target", "_blank");
            websiteLink.textContent = "Visit Website";
            websiteCell.appendChild(websiteLink);

            const membershipCell = document.createElement("td");
            membershipCell.textContent = company.membership;

            row.appendChild(nameCell);
            row.appendChild(addressCell);
            row.appendChild(phoneCell);
            row.appendChild(websiteCell);
            row.appendChild(membershipCell);

            tbody.appendChild(row);
        });

        table.appendChild(thead);
        table.appendChild(tbody);
        directoryContainer.appendChild(table);
    }
};

gridViewButton.addEventListener("click", () => {
    directoryContainer.classList.add("grid-view");
    directoryContainer.classList.remove("list-view");
    getDirectoryData();
});

listViewButton.addEventListener("click", () => {
    directoryContainer.classList.add("list-view");
    directoryContainer.classList.remove("grid-view");
    getDirectoryData();
});

getDirectoryData();