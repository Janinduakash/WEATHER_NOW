const apiKey = "6c240a00690346fa8d4153923262111";
const baseUrl = "https://api.weatherapi.com/v1";

function btnSearchCityOnAction() {
    const city = document.getElementById("txtCity").value.trim();
    const weatherInfo = document.getElementById("weatherInfo");
    weatherInfo.style.display = "none";

    if (!city) {
        alert("Enter name of city.");
        return;
    }

    fetch(`${baseUrl}/current.json?key=${apiKey}&q=${encodeURIComponent(city)}`)
        .then(res => res.json())
        .then(data => {
            weatherInfo.innerHTML = `
                <h2>${data.location.name}, ${data.location.country}</h2>
                <h3>${data.current.condition.text}</h3>
                <img src="https:${data.current.condition.icon}" alt="Weather icon">
                <p>${data.current.temp_c}°C</p>
                <p>Feels like ${data.current.feelslike_c} °C</p>
                
            `;
            weatherInfo.style.display = "block";

            allConditions.innerHTML = `
                <h1>All Conditions</h1>
                <p>Humidity ${data.current.humidity} %</p>
                <p>Wind ${data.current.wind_kph} km/h</p>
                <p>Visibility ${data.current.vis_km} km</p>
                <p>Pressure ${data.current.pressure_mb} hPa</p>
            `;
            allConditions.style.display = "block";
        });
}