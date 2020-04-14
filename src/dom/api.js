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

      console.log(weatherData);

      // return {
      //   name: weatherData,
      //   main: weatherData.weather[0],
      //   description: weatherData.weather[0],
      //   temp: Math.round(weatherData.main.temp),
      //   pressure: weatherData.main,
      //   humidity: weatherData.main,
      //   speed: weatherData.wind,
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
      // const temp = Math.round(weatherData.main.temp);

      // const coord = weatherData.
      // const oorde = weatherData.lat;

      const para1 = document.createElement('P'); // Create a <p> element
      const para2 = document.createElement('P'); // Create a <p> element
      const para3 = document.createElement('P'); // Create a <p> element
      const para4 = document.createElement('P'); // Create a <p> element
      const para5 = document.createElement('P'); // Create a <p> element
      const para6 = document.createElement('P'); // Create a <p> element
      const para7 = document.createElement('P'); // Create a <p> element
      const para8 = document.createElement('P'); // Create a <p> element
      const para9 = document.createElement('P'); // Create a <p> element

      para1.innerText = name; // Insert text
      para2.innerText = main; // Insert text
      para3.innerText = description; // Insert text
      para4.innerText = pressure; // Insert text
      para5.innerText = humidity; // Insert text
      para6.innerText = temp; // Insert text
      para7.innerText = speed; // Insert text
      para8.innerText = country; // Insert text
      para9.innerText = deg; // Insert text


      document.getElementById('results').append(para1);
      document.getElementById('results').append(para2);
      document.getElementById('results').append(para3);
      document.getElementById('results').append(para4);
      document.getElementById('results').append(para5);
      document.getElementById('results').append(para6);
      document.getElementById('results').append(para7);
      document.getElementById('results').append(para8);
      document.getElementById('results').append(para9);

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
    }

    // if (response.status === 404) {
    //   console.log(response.status);
    // } else {
    //   console.log(response.status);
    // }
  } catch (error) {
    console.error(error);
  }
  // return true;
}


submission.onclick = () => getWeather();