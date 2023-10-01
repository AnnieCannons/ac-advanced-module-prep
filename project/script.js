
const apiKey = 'f0353b213ac242189e4115006230110';
const apiUrl = 'http://api.weatherapi.com/v1/forecast.json?key=f0353b213ac242189e4115006230110&q=${input}&days=5&aqi=no&alerts=no';

const searchBox = document.querySelector('.search-input');
const searchBtn = document.querySelector('.search-button');
const weatherIcon = document.querySelector('.weather-icon');
const insideContainer = document.getElementById('days');
const currentDay = document.getElementById('current');

async function checkWeather(city) {
  const url = `${apiUrl}?key=${apiKey}&q=${city}&days=5&aqi=no&alerts=no`;
  const response = await fetch(url);
  const data = await response.json();

  // Display current weather information
  document.querySelector('.city').innerHTML = data.location.name;
  document.querySelector('.state').innerHTML = data.location.region;
  document.querySelector('.country').innerHTML = data.location.country;
  document.querySelector('.forecast-weather-icon').src = data.current.condition.icon;
  document.querySelector('.temp_f').innerHTML = data.current.temp_f;
  document.querySelector('.temp_c').innerHTML = data.current.temp_c;
  document.querySelector('.current-insert-rain').innerHTML = data.current.precip_mm;

  // Display forecast for each day
  insideContainer.innerHTML = '';
  data.forecast.forecastday.forEach((day) => {
    const card = generateCard(day);
    insideContainer.innerHTML += card;
  });

  // Calculate and display hottest/coldest day
  const temps = data.forecast.forecastday.map((day) => day.day.avgtemp_f);
  const lowestIndex = temps.indexOf(Math.min(...temps));
  const highestIndex = temps.indexOf(Math.max(...temps));
  const hottestDay = data.forecast.forecastday[highestIndex].date;
  const coldestDay = data.forecast.forecastday[lowestIndex].date;

  if (temps.length > 0) {
    let type = 'hot';
    if (temps.reduce((a, b) => a + b) / temps.length < 75) {
      type = 'cold';
    }

    const info = document.getElementById('hottest');
    if (type === 'hot') {
      info.innerText = 'The hottest day this week is ' + hottestDay;
    } else {
      info.innerText = 'The coldest day this week is ' + coldestDay;
    }
  }
}

function generateCard(day) {
  const card = `
    <div class="card">
      <h2>${getDayName(day.date)}</h2>
      <img src="${day.day.condition.icon}" alt="Weather Icon">
      <p>Max Temp: ${day.day.maxtemp_f}°F / ${day.day.maxtemp_c}°C</p>
      <p>Min Temp: ${day.day.mintemp_f}°F / ${day.day.mintemp_c}°C</p>
      <p>Rain: ${day.day.daily_chance_of_rain}%</p>
    </div>
  `;
  return card;
}

function getDayName(dateStr) {
  const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const date = new Date(dateStr);
  const dayName = days[date.getDay()];
  return dayName;
}

if (searchBtn) {
  searchBtn.addEventListener('click', () => {
    checkWeather(searchBox.value);
  });
}
