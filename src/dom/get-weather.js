import apiKey from './config';


const submission = document.getElementById('submit');

// const city = 'Nairobi';
async function getWeather() {
  try {
    const city = document.getElementById('city-input').value;
    console.log(city);
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`, { mode: 'cors' });

    if (response.ok) {
      const weatherData = await response.json();
      // return weatherData;
      console.log(weatherData);
    } if (response.status === 404) {
      console.log(response.status);
    } else {
      console.log(response.status);
    }
  } catch (error) {
    console.error(error);
  }
}

submission.onclick = () => getWeather();