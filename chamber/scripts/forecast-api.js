document.addEventListener("DOMContentLoaded", () => {
    const apiKey = "613d41393c8bb7fff149434d77fa2ffc";
    const city = "Osasco";
    const units = "imperial";
    const weatherUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=${units}&appid=${apiKey}`;
    const forecastUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=${units}&appid=${apiKey}`;

    fetch(weatherUrl)
        .then(response => response.json())
        .then(data => {
            document.getElementById("current-temp").innerHTML = `<strong>${data.main.temp.toFixed(1)}°F</strong>`;
            document.getElementById("weather-desc").textContent = data.weather[0].description
                .split(" ")
                .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
                .join(" ");
        })
        .catch(error => console.error("Error fetching current weather:", error));

    fetch(forecastUrl)
        .then(response => response.json())
        .then(data => {
            const forecastList = document.getElementById("weather-details");
            forecastList.innerHTML = "";

            const dailyForecasts = data.list.filter((item, index) => index % 8 === 0).slice(0, 3);

            dailyForecasts.forEach(forecast => {
                const divItem = document.createElement("div");
                const paragraph = document.createElement("p");
                const h4 = document.createElement("h4");
                const date = new Date(forecast.dt * 1000).toLocaleDateString("en-US", {
                    weekday: "long"
                });
                const temp = Math.round(forecast.main.temp);
                const description = forecast.weather[0].description
                    .split(" ")
                    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
                    .join(" ");

                paragraph.innerHTML = `<strong>${temp}°F</strong>, ${description}`;
                h4.textContent = date;
                divItem.appendChild(h4);
                divItem.appendChild(paragraph);
                forecastList.appendChild(divItem);
            });
        })
        .catch(error => console.error("Error fetching weather forecast:", error));
});