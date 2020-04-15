import apiKey from './config';


// VIEW VARIABLES
const KELVIN = 273;
const weatherDataStore = {};
const submission = document.getElementById('submit');
const iconElement = document.querySelector('#weather-icon');
const locationElement = document.querySelector('#location p');
const tempElement = document.querySelector('#temperature-value p');
const descElement = document.querySelector('#temperature-description p');


// DISPLAY WEATHER TO UI
function displayWeather() {
  iconElement.innerHTML = `<img src="../src/assets/icons/${weatherDataStore.iconId}.png"/>`;
  tempElement.innerHTML = `${weatherDataStore.temperature.value}°<span>C</span>`;
  descElement.innerHTML = weatherDataStore.description;
  locationElement.innerHTML = `${weatherDataStore.city}, ${weatherDataStore.country}`;
}


// FETCH WEATHER DATA IN JSON FORMAT
function getWeather() {
  const city = document.getElementById('city-input').value;
  fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`,
    { mode: 'cors' },
  )
    .then((response) => {
      const weatherData = response.json();
      return weatherData;
    })
    .then((weatherData) => {
      weatherDataStore.temperature.value = Math.floor(weatherData.main.temp - KELVIN);
      weatherDataStore.description = weatherData.weather[0].description;
      weatherDataStore.iconId = weatherData.weather[0].icon;
      weatherDataStore.city = weatherData.name;
      weatherDataStore.country = weatherData.sys.country;
    })
    .then(() => {
      displayWeather();
    });
}


// BUTTON EVENT LISTENER
submission.onclick = () => getWeather();


weatherDataStore.temperature = {
  unit: 'celsius',
};


// C to F conversion
function celsiusToFahrenheit(temperature) {
  return (temperature * (9 / 5)) + 32;
}


// WHEN THE USER CLICKS ON THE TEMPERATURE ELEMENET
tempElement.onclick = () => {
  if (weatherDataStore.temperature.value === undefined) return;

  if (weatherDataStore.temperature.unit === 'celsius') {
    let fahrenheit = celsiusToFahrenheit(weatherDataStore.temperature.value);
    fahrenheit = Math.floor(fahrenheit);

    tempElement.innerHTML = `${fahrenheit}°<span>F</span>`;
    weatherDataStore.temperature.unit = 'fahrenheit';
  } else {
    tempElement.innerHTML = `${weatherDataStore.temperature.value}°<span>C</span>`;
    weatherDataStore.temperature.unit = 'celsius';
  }
};
