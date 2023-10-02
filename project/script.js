const apiKey = '5e0eea3c80634f73ab322334230210';
const apiUrl = 'https://api.weatherapi.com/v1/forecast.json?key=5e0eea3c80634f73ab322334230210&q=';

const searchBox = document.querySelector('.search-input');
const searchBtn = document.querySelector('.search-button');
const weatherIcon = document.querySelector('.weather-icon');
const insideContainer = document.getElementById('days');
const currentDay = document.getElementById('current');
const mainContainer = document.getElementById('current-card');
const forecastDay = document.getElementById('forecast-card');

async function checkWeather(city) {
  const response = await fetch(`${apiUrl}${city}&days=4&aqi=no&alerts=no`);

  if (response.status === 400) {
    document.querySelector(".error").style.display = "block";
    document.querySelector(".weather").style.display = "none";
  } else {
    const data = await response.json();
    console.log(data);

    const currentDayCard = generateCurrentCard(data.current, 'Today', data.location);
    document.querySelector('.current-weather-container').innerHTML = currentDayCard;

    data.forecast.forecastday.forEach(day => {
      const forecastDayCard = generateForecastCard(day.day, getDayName(day.date), data.location);
      document.querySelector('.forecast-day-card').innerHTML = forecastDayCard
    });

    const temps = data.forecast.forecastday.map(day => day.day.avgtemp_f);
    const lowestIndex = temps.indexOf(Math.min(...temps));
    const highestIndex = temps.indexOf(Math.max(...temps));
    const hottestDay = data.forecast.forecastday[highestIndex].date;
    const coldestDay = data.forecast.forecastday[lowestIndex].date;

    const info = document.getElementById('current-summary');
    if (temps.length > 0) {
      const averageTemp = temps.reduce((a, b) => a + b) / temps.length;
      if (averageTemp < 75) {
        info.innerText = `The coldest day this week is ${coldestDay}`;
      } else {
        info.innerText = `The hottest day this week is ${hottestDay}`;
      }
    } else {
      info.innerText = "";
    }
  }
}

function generateCurrentCard(day, label, location) {
  return `
    <div class="card weather">
        <div class="label-container">
            <h2 class="label">${label}</h2>
        </div>
        <div class="weather-location-details">
            <img class="weather-icon" src="${day.condition.icon}" alt="rain-icon">
            <h1 class="temp_f">${day.avgtemp_f}°F</h1>
            <h1 class="temp_c">${day.avgtemp_c}°C</h1>
            <h2 class="city">${location.name}, <span class="state">${location.region}</span></h2>
            <h3 class="country">${location.country}</h3>
        </div>
        <div class="row details">
            <div class="col inner-details">
                <div>
                    <img id="rain" class="umbrella forecast-weather-icon" src="./images/umbrella_rain.png" alt="rain-icon">
                </div>
                <div>
                    <p class="rain-percentage">${day.daily_chance_of_rain}%</p>
                    <p class="rain-text">Chance Of Rain</p>
                </div>
            </div>
            <div class="col inner-details">
                <div>
                    <img id="max" class="max-min-weather-icon" src="./images/high_low.png" alt="hi-icon">
                </div>
                 <div>
                    <p id="max_f" class="hi-low_f">${day.maxtemp_f}°F</p>
                    <p id="max_c" class="hi-low_c">${day.maxtemp_c}°C</p>
                    <p class="icons-label">High: </p>
                </div>
            </div>
            <div class="col inner-details">
                <div>
                    <img id="low" class="max-min-weather-icon" src="./images/high_low.png" alt="low-icon">
                </div>
                <div>
                    <p id="min_f" class="hi-low_f">${day.mintemp_f}°F</p>
                    <p id="min_c" class="hi-low_f">${day.mintemp_c}°C</p>
                    <p class="icons-label">Low:</p>
                </div>
            </div>
        </div>
    </div>
  `;
}

function generateForecastCard(day, label, location) {
    return `
      <div class="card weather">
          <div class="label-container">
              <h2 class="label">${label}</h2>
          </div>
          <div class="weather-location-details">
              <img class="weather-icon" src="${day.condition.icon}" alt="rain-icon">
              <h1 class="temp_f">${day.temp_f}°F</h1>
              <h1 class="temp_c">${day.temp_c}°C</h1>
              <h2 class="city">${location.name}, <span class="state">${location.region}</span></h2>
              <h3 class="country">${location.country}</h3>
          </div>
          <div class="row details">
              <div class="col inner-details">
                  <div>
                      <img id="rain" class="umbrella forecast-weather-icon" src="./images/umbrella_rain.png" alt="rain-icon">
                  </div>
                  <div>
                      <p class="rain-percentage">${day.daily_chance_of_rain}%</p>
                      <p class="rain-text">Chance Of Rain</p>
                  </div>
              </div>
              <div class="col inner-details">
                  <div>
                      <img id="max" class="max-min-weather-icon" src="./images/high_low.png" alt="hi-icon">
                  </div>
                   <div>
                      <p id="max_f" class="hi-low_f">${day.maxtemp_f}°F</p>
                      <p id="max_c" class="hi-low_c">${day.maxtemp_c}°C</p>
                      <p class="icons-label">High: </p>
                  </div>
              </div>
              <div class="col inner-details">
                  <div>
                      <img id="low" class="max-min-weather-icon" src="./images/high_low.png" alt="low-icon">
                  </div>
                  <div>
                      <p id="min_f" class="hi-low_f">${day.mintemp_f}°F</p>
                      <p id="min_c" class="hi-low_f">${day.mintemp_c}°C</p>
                      <p class="icons-label">Low:</p>
                  </div>
              </div>
          </div>
      </div>
    `;
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
