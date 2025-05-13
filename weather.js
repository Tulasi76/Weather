const apiKey = "9768fbf6a06c72ea66ef4e1f0495c871";

async function checkWeather() {
    const city = document.getElementById("cityInput").value.trim();
    
    if (city === "") {
        alert("Please enter a city name.");
        return;
    }

    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?units=metric&q=${city}&appid=${apiKey}`;

    try {
        const response = await fetch(apiUrl);
        const data = await response.json();

        if (response.ok) {
            document.querySelector(".city").innerHTML = data.name;
            document.querySelector(".temp").innerHTML = data.main.temp + "°C";
            document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
            document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";
        } else {
            alert("City not found. Please try another name.");
        }
    } catch (error) {
        alert("Error fetching weather data.");
        console.error(error);
    }
}
