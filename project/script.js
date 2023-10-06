document.addEventListener('DOMContentLoaded', () => { })

const apiKey = '5e0eea3c80634f73ab322334230210';
const apiUrl = 'https://api.weatherapi.com/v1/forecast.json?key=5e0eea3c80634f73ab322334230210&q=';

const searchBox = document.querySelector('.search-input');
const searchBtn = document.querySelector('.search-button');
const weatherIcon = document.querySelector('.weather-icon');
const insideContainer = document.getElementById('days');
const currentDay = document.getElementById('current');
const mainContainer = document.getElementById('current-card');
const forecastDay = document.getElementById('forecast-card');
const switchSlider = document.getElementById('switch')

async function checkWeather(city) {
    const response = await fetch(`${apiUrl}${city}&days=4&aqi=no&alerts=no`);

    if (response.status === 400) {
        document.querySelector(".error").style.display = "block";
        document.querySelector(".weather").style.display = "none";
    } else {
        const data = await response.json();
        console.log(data);

        const currentDayCard = generateCurrentCard(data.current, data.forecast.forecastday[0].day, 'Today', data.location);
        document.querySelector('.current-weather-container').innerHTML = `${currentDayCard} `;


        generateForecastCards(data.forecast.forecastday, data.location)


        const temps = data.forecast.forecastday.map(day => day.day.avgtemp_f);
        const highestIndex = temps.indexOf(Math.max(...temps));
        const day = data.forecast.forecastday[highestIndex];

        document.getElementById('hottest').innerHTML = "The hottest day of this week is " + getDayName(day.date);

    }
}

function getInfo(temp) {
    if (temp > 75) {
        return "Its hot today!"
    } else if (temp < 74 && temp > 46) {
        return "it's moderate today";
    } else if (temp < 45) {
        return "It's cold today!"
    }
}



function generateCurrentCard(current, day, label, location) {

    console.log(current)

    const condition = current.condition;

    const card = `
    <div class="col" id="current">
    <div id="main-body" class="card weather ${getTempColor(current.temp_f)}">
        <div class="label-container">
            <h2 class="label">${label}</h2>
        </div>
        <div class="weather-location-details">
            <img class="weather-icon" src="${current.condition.icon}" alt="${current.condition.text}">
            <h1 class="temp_f">${current.temp_f}°F</h1>
            <h1 class="temp_c">${current.temp_c}°C</h1>
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
                    <p id="max_f" class="temp_f">${day.maxtemp_f}°F</p>
                    <p id="max_c" class="temp_c">${day.maxtemp_c}°C</p>
                    <p class="icons-label">High: </p>
                </div>
            </div>
            <div class="col inner-details">
                <div>
                    <img id="low" class="max-min-weather-icon" src="./images/high_low.png" alt="low-icon">
                </div>
                <div>
                    <p id="min_f" class="temp_f">${day.mintemp_f}°F</p>
                    <p id="min_c" class="temp_c">${day.mintemp_c}°C</p>
                    <p class="icons-label">Low:</p>
                </div>
            </div>
        </div>
    </div>
    </div>
    <div class="col"><p class="info">
    ${getInfo(current.temp_f)}
     </p></div>
    <div id="temp_info" class="col"></div>

  `;
    return card;
}

function getTempColor(temp) {
    console.log(temp)
    if (temp > 75) {
        return "hot-temperature"
    } else if (temp < 74 && temp > 46) {
        return "moderate-temperature"
    } else {
        return "cold-temperature"
    }
}


function generateForecastCards(days, location) {
    let daysUI = document.getElementById("days")
    days.slice(1).forEach(day => {
        const div = document.createElement("div");
        div.classList.add("card")
        div.classList.add(getTempColor(day.day.avgtemp_f))
        div.classList.add("weather")
        const card = `
          <div class="label-container">
              <h2 class="label">${getDayName(day.date)}</h2>
          </div>
          <div class="weather-location-details">
              <img class="weather-icon" src="${day.day.condition.icon}" alt="${day.day.condition.text}">
              <h2 class="temp_f">${day.day.avgtemp_f}°F</h2>
              <h3 class="temp_c">${day.day.avgtemp_c}°C</h3>
              <h4 class="city">${location.name}, <span class="state">${location.region}</span></h4>
              <h5 class="country">${location.country}</h5>
          </div>
          <div class="row details">
              <div class="col inner-details">
                  <div>
                      <img class="umbrella forecast-weather-icon" src="./images/umbrella_rain.png" alt="rain-icon">
                  </div>
                  <div>
                      <p class="rain-percentage">${day.day.daily_chance_of_rain}%</p>
                      <p class="rain-text">Chance Of Rain</p>
                  </div>
              </div>
              <div class="col inner-details">
                  <div>
                      <img class="max-min-weather-icon" src="./images/high_low.png" alt="hi-icon">
                  </div>
                   <div>
                      <p id="forecast-max_f" class="temp_f">${day.day.maxtemp_f}°F</p>
                      <p id="forecast-max_c" class="temp_c">${day.day.maxtemp_c}°C</p>
                      <p class="icons-label">High: </p>
                  </div>
              </div>
              <div class="col inner-details">
                  <div>
                      <img class="max-min-weather-icon" src="./images/high_low.png" alt="low-icon">
                  </div>
                  <div>
                      <p id="forecast-min_f" class="temp_f">${day.day.mintemp_f}°F</p>
                      <p id="forecast-min_c" class="temp_f">${day.day.mintemp_c}°C</p>
                      <p class="icons-label">Low:</p>
                  </div>
              </div>
        </div>
        <div class="col info"></div>
        <div id="forecast_temp_info" class="col"></div>
    `;
        div.innerHTML = card
        daysUI.append(div)
    })

}

switchSlider.addEventListener('change', function (e) {
    if (e.target.checked) {
        document.body.classList.add('temp-selected-c')
    } else {
        document.body.classList.remove('temp-selected-c')
    }
})

function getDayName(dateStr) {
    console.log(dateStr)
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const date = new Date(dateStr);
    const dayName = days[date.getDay()];
    console.log(date, dayName)
    return dayName;
}

if (searchBtn) {
    searchBtn.addEventListener('click', () => {
        checkWeather(searchBox.value);
    });
}
