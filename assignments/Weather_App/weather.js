let cityName = "Mumbai";

async function fetchData(cityName) {
    try {
        const data = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=307a9bd7416fd44e13d96cbe4d3e080e&units=metric`);
        const response = await data.json();
        console.log(response);
        const container = document.getElementById("container");

        if (response.cod === "404") {
            container.innerHTML = `<p class="text-center text-red-500 font-semibold">City not found. Please try again.</p>`;
            return;
        }

        container.innerHTML = `
                    <p><b>🌆 City Name:</b> ${response.name}</p>
                    <p><b>💧 Humidity:</b> ${response.main?.humidity}%</p>
                    <p><b>🌡️ Temperature:</b> ${response.main?.temp} <sup>°</sup>C</p>
                    <p><b>🔺 Max Temperature:</b> ${response.main?.temp_max} <sup>°</sup>C</p> 
                    <p><b>🔻 Min Temperature:</b> ${response.main?.temp_min} <sup>°</sup>C</p>
                    <p><b>🌥️ Weather:</b> ${response.weather?.[0]?.description}</p>
                    <p><b>💨 Wind Speed:</b> ${response.wind?.speed} m/s</p>
                    <p><b>🌆 Date:</b> ${new Date()}</p>

                    `;
    } catch (error) {
        console.log("Error while fetching data from Weather_API:", error);
        document.getElementById("container").innerHTML = `<p class="text-red-500">An error occurred. Try again later.</p>`;
    }
}

function handleChange(event) {
    cityName = event.target.value.trim();
    if (cityName) fetchData(cityName);
}

// Initial fetch
fetchData(cityName);