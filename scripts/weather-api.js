const currentTemp = document.querySelector("#current-temp");
const weatherIcon = document.querySelector("#weather-icon");
const apiKey = "613d41393c8bb7fff149434d77fa2ffc";
const lat = "-23.55";
const lon = "-46.68";
const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=imperial`;

const apiFetch = async () => {
    try {
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            console.log(data);
            displayResults(data);
        } else {
            throw new Error(await response.text());
        }
    } catch (error) {
        console.error("Erro ao buscar os dados da API:", error);
    }
};

const displayResults = (data) => {
    const iconSrc = `https://openweathermap.org/img/wn/${data.weather[0].icon}.png`;
    weatherIcon.setAttribute("src", iconSrc);
    weatherIcon.setAttribute("alt", data.weather[0].description);

    const weatherDesc = data.weather[0].description
        .split(" ")
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
        .join(" ");

    currentTemp.innerHTML = `<strong>${data.main.temp.toFixed(1)}°F</strong> - ${weatherDesc}`;
};

apiFetch();
