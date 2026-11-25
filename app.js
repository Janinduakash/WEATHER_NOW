const apiKey = "6c240a00690346fa8d4153923262111";
const baseUrl = "https://api.weatherapi.com/v1";

function btnSearchCityOnAction() {
    const city = document.getElementById("txtCity").value.trim();
    const weatherInfo = document.getElementById("weatherInfo");

    if (!city) {
        alert("Enter name of city.");
        return;
    }

    fetch(`${baseUrl}/current.json?key=${apiKey}&q=${encodeURIComponent(city)}`)
        .then(res => res.json())
        .then(data => {
            weatherInfo.innerHTML = `
                <h2>${data.location.name}, ${data.location.country}</h2>
                <h1>${data.current.condition.text}</h1>
                <img src="https:${data.current.condition.icon}" alt="Weather icon">
                <p>${data.current.temp_c}°C</p>
                <p>${data.current.humidity}%</p>
            `;
        });
}