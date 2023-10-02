
const apiKey = '5e0eea3c80634f73ab322334230210';
const apiUrl = 'https://api.weatherapi.com/v1/forecast.json?key=5e0eea3c80634f73ab322334230210&q=${city}}&days=4&aqi=no&alerts=no';

const searchBox = document.querySelector('.search-input');
const searchBtn = document.querySelector('.search-button');
const weatherIcon = document.querySelector('.weather-icon');
const insideContainer = document.getElementById('days');
const currentDay = document.getElementById('current');
const mainContainer = document.getElementById('current-card');
const forecastDay = document.getElementById('forecast-car');

async function checkWeather(city) {
  const response = await fetch(apiUrl + city + `&appid=${apiKey}`);

  if(response.status == 400) {
    document.querySelector(".error").style.display = "block";
    document.querySelector(".weather").style.display ="none";
  } else {

    let data = await response.json();
    console.log(data);

    const currentDayCard = generateCard({
        label: 'Today',
        temp_f: data.current.temp_f,
        temp_c: data.current.temp_c,
        city: data.location.name,
        state: data.location.region,
        country: data.location.country,
        day: data.forecast.forecastday[0],
        rain: getChanceOfRain(),
        icon: data.current.condition.icon,
        rain_percent: data.current.precip_in,
   })


    // Display current weather information
    document.querySelector('.label').innerHTML = 'Today';
    document.querySelector('.city').innerHTML = data.location.name;
    document.querySelector('.state').innerHTML = data.location.region;
    document.querySelector('.country').innerHTML = data.location.country;
    document.querySelector('.forecast-weather-icon').src = data.current.condition.icon;
    document.querySelector('.temp_f').innerHTML = data.current.temp_f;
    document.querySelector('.temp_c').innerHTML = data.current.temp_c;
    document.querySelector('.rain-percentage').innerHTML = data.current.precip_in;
    document.querySelector('current-card').innerHTML = data.current;
    currentDay.innerHTML = '';
    data.current.add(() => {
        let card = generateCard(current);
        currentDay.innerHTML += card;
    });

    for(let i = 1; 1 < data.forecast.forecastday; i++) () => {
    const forecastDayCard = generateCard({
        label: getDayName(data.forecast.forecastday[i].date),
        temp_f: data.forecast.forecastday[i].avgtemp_f,
        temp_c: data.forecast.forecastday[i].avgtemp_c,
        city: data.location.name,
        state: data.location.region,
        country: data.location.country,
        day: data.forecast.forecastday[i].day,
        rain: getchanceofRain(),
        icon: data.forecast.forecastday[i].day.condition.icon,
        rain_percent: data.forecast.forecastday[i].day.daily_chance_of_rain,
    })


    //Display 3 day forecast
    document.querySelector('.weather.icon').innerHTNL = data.forecast.forecastday.condtion.icon;
    document.querySelector('.city').innerHTML = data.location.name;
    document.querySelector('.state').innerHTML = data.location.region;
    document.querySelector('.country').innerHTML = data.location.country;
    document.querySelector('.forecast-weather-icon').src = data.current.condition.icon;
    document.querySelector('.temp_f').innerHTML = data.current.temp_f;
    document.querySelector('.temp_c').innerHTML = data.current.temp_c;
    document.querySelector('.rain-percentage').innerHTML = data.current.precip_in;
    document.querySelector('forecast-card').innerHTML = data.forecast.forecastday;
    insideContainer.innerHTML = '';
    data.forecast.forecastday.forEach((day) => {
        for(let i=1; 1< data.forecast.forecastday; i++){
            let card = generateCard(day);
            forecastDay = data.forecast.forecastday[i]
        }
        insideContainer.innerHTML += card;
    })

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

    function generateCurrentCard(day) {
        const currentCard = `
    `
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

};

if (searchBtn) {
    searchBtn.addEventListener('click', () => {
        checkWeather(searchBox.value);
    });
}}};
