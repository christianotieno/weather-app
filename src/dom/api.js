import apiKey from './config';

const submission = document.getElementById('submit');

async function getWeather() {
  try {
    const city = document.getElementById('city-input').value;
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`,
      { mode: 'cors' },
    );

    if (response.ok) {
      const weatherData = await response.json();
      const { name } = weatherData;
      const { country } = weatherData.sys;
      const { main } = weatherData.weather[0];
      const { description } = weatherData.weather[0];
      const temp = Math.round(weatherData.main.temp);
      const { pressure } = weatherData.main;
      const { humidity } = weatherData.main;
      const { speed } = weatherData.wind;
      const { deg } = weatherData.wind;
      const { visibility } = weatherData;
      const { lon } = weatherData.coord;
      const { lat } = weatherData.coord;

      document.getElementById('name').append(name);
      document.getElementById('country').append(country);
      document.getElementById('main').append(main);
      document.getElementById('description').append(description);
      document.getElementById('temp').append(temp);
      document.getElementById('pressure').append(pressure);
      document.getElementById('humidity').append(humidity);
      document.getElementById('speed').append(speed);
      document.getElementById('deg').append(deg);
      document.getElementById('visibility').append(visibility);
      document.getElementById('lon').append(lon);
      document.getElementById('lat').append(lat);
    }

    if (response.status === 404) {
      console.log(response.status);
    } else {
      console.log(response.status);
    }
  } catch (error) {
    console.error(error);
  }
}


submission.onclick = () => getWeather();