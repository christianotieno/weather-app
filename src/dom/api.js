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

      // return {
      //   name: weatherData,
      //   main: weatherData.weather[0],
      //   description: weatherData.weather[0],
      //   temp: Math.round(weatherData.main.temp),
      //   pressure: weatherData.main,
      //   humidity: weatherData.main,
      //   speed: weatherData.wind,
      //   deg: weatherData.wind,
      //   visibility: weatherData,
      // };

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

      // Create a <p> element
      const cityName = document.createElement('P');
      const countryName = document.createElement('P');
      const weatherName = document.createElement('P');
      const weatherDescription = document.createElement('P');
      const weatherTemparature = document.createElement('P');
      const weatherPressure = document.createElement('P');
      const weatherHumidity = document.createElement('P');
      const weatherWindSpeed = document.createElement('P');
      const weatherSpeedDirection = document.createElement('P');
      const weatherVisibility = document.createElement('P');
      const cityLongitude = document.createElement('P');
      const cityLatitude = document.createElement('P');

      // Insert text
      cityName.innerText = name;
      countryName.innerText = country;
      weatherName.innerText = main;
      weatherDescription.innerText = description;
      weatherTemparature.innerText = temp;
      weatherPressure.innerText = pressure;
      weatherHumidity.innerText = humidity;
      weatherWindSpeed.innerText = speed;
      weatherSpeedDirection.innerText = deg;
      weatherVisibility.innerText = visibility;
      cityLongitude.innerText = lon;
      cityLatitude.innerText = lat;

      document.getElementById('name').append(cityName);
      document.getElementById('country').append(countryName);
      document.getElementById('main').append(weatherName);
      document.getElementById('description').append(weatherDescription);
      document.getElementById('temp').append(weatherTemparature);
      document.getElementById('pressure').append(weatherPressure);
      document.getElementById('humidity').append(weatherHumidity);
      document.getElementById('speed').append(weatherWindSpeed);
      document.getElementById('deg').append(weatherSpeedDirection);
      document.getElementById('visibility').append(weatherVisibility);
      document.getElementById('lon').append(cityLongitude);
      document.getElementById('lat').append(cityLatitude);

      console.log(name);
      console.log(country);
      console.log(main);
      console.log(description);
      console.log(pressure);
      console.log(humidity);
      console.log(temp);
      console.log(speed);
      console.log(deg);
      console.log(visibility);
      console.log(lon);
      console.log(lat);
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