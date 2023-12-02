// weather.js
const apiKey = 'your_api_key'; // replace with your actual API key
const location = 'CA/San_Francisco'; // replace with your desired location

fetch(`http://api.wunderground.com/api/${apiKey}/conditions/q/${location}.json`)
    .then(response => response.json())
    .then(data => {
        const weatherDataDiv = document.getElementById('weatherData');
        weatherDataDiv.innerHTML = `
            <h2>${data.current_observation.display_location.full}</h2>
            <p>${data.current_observation.weather}</p>
            <p>${data.current_observation.temperature_string}</p>
            <p>Humidity: ${data.current_observation.relative_humidity}</p>
            <p>Wind: ${data.current_observation.wind_string}</p>
        `;
    })
    .catch(error => console.error('Error:', error));