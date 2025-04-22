import {weatherData} from './scripts/api.js';
import './styles/style.css';
const container = document.getElementById('container');

document.querySelector('form').addEventListener('submit', async (e) => {
  e.preventDefault();
  const location = document.querySelector('input').value;
  const unit = document.querySelector('select').value;
  const numberOfDays = document.querySelector('#days').value;
  if (!location || !unit || !numberOfDays) return;

  let unitSymbol = "°C";
  switch (unit) {
    case "us":
      unitSymbol = "°F"
      break;
    case "base":
      unitSymbol = "kelvin";
      break;
    default:
      break;
  }
  container.innerHTML = `<h1>Loading<h1><span class="loading"></span>`;
  try 
  {
    const data = await weatherData(location, unit, numberOfDays)
    const address = document.createElement('h2');
    address.textContent = `${data.address}`;
    const currentDate = document.createElement('div');
    currentDate.id = 'current-date'
    container.innerHTML = '';
    container.append(address);
    data.nextDays.forEach(day => {
      const div = document.createElement('div');
      div.innerHTML = `
      <h6 style="text-align: right;">${day.date}</h6>
      <h3 style="text-align: left">${day.description}</h3>
      <div>
        <p>Temperature: ${day.temp} ${unitSymbol}</p>
        <p>Feels Like: ${day.feelsLike} ${unitSymbol}</p>
        <p>Humidity: ${day.humidity}%</p>
      </div>
      `
      container.append(div);
      div.className = "data";
    });
  }
  catch (e)
  {
    container.textContent = e;
  }
});
