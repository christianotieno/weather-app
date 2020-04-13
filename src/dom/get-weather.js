import apiKey from './config';
import { submission, cityInput } from './form-input';


async function getWeather(cityInput) {
  const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityInput}&appid=${apiKey}`, { mode: 'cors' });
  const weatherData = await response.json();
  console.log(weatherData);
}


submission.addEventListener('click', getWeather(cityInput));

console.log('hello');