import apiKey from './config';

async function getWeather() {
  const response = await fetch(apiKey, { mode: 'cors' });
  const weatherData = await response.json();
  console.log(weatherData);
}

export default getWeather;