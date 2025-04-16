const currentTemp = document.querySelector("#current-temp");
const weatherDesc = document.querySelector("#weather-desc");
const weatherInfo = document.querySelector(".weather-info");
const apiKey = "613d41393c8bb7fff149434d77fa2ffc";
const lat = "-23.5329";
const lon = "-46.7923";
const weatherURL = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=imperial`;

const fetchWeather = async () => {
    try {
        const response = await fetch(weatherURL);
        if (response.ok) {
            const data = await response.json();
            updateWeatherCard(data);
        } else {
            throw new Error("Failed to fetch weather data.");
        }
    } catch (error) {
        console.error("Error:", error);
    }
};

const updateWeatherCard = (data) => {
    const weatherIcon = document.createElement("img");
    weatherIcon.setAttribute("id", "weather-icon");
    currentTemp.innerHTML = `<strong>${data.main.temp.toFixed(1)}°F</strong>`;
    weatherDesc.textContent = data.weather[0].description
        .split(" ")
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
        .join(" ");
    weatherIcon.setAttribute(
        "src",
        `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`
    );
    weatherIcon.setAttribute("alt", data.weather[0].description);
    weatherInfo.appendChild(weatherIcon);
};

fetchWeather();