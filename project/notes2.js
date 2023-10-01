


// function getCondition(temp) {

//     if (temp < 45) {
//         div.todays - summary - cold//show
//         div.todays - summary - moderate//hide
//         div.todays - summary - hot//hide
//         return "It's Cold Today!"
//     } else if (temp < 75) {
//         div.todays - summary - moderate//show
//         div.todays - summary - cold//hide
//         div.todays - summary - hot//hide
//         return "Its Moderate Today!"
//     } else {
//         div.todays - summary - hot//show
//         div.todays - summary - cold//hide
//         div.todays - summary - moderate//hide
//         return "It's Hot Today!"
//     }
// }

// function getState(stateFullName) {
//     for (let i = 0; i < stateList; i++) {
//         if (data.location.region === stateList[i]) {
//             return this.stateList[stateFullName];
//         }
//     }
// }
// let searchInput = document.getElementsByClassName(".search-input");
// function getStateAbbr(searchInput) {
//     const states = require('us-state-converter');
//     const abbr = states.abbr('searchInput')

//     console.log(abbr);
// }

// const stateList = {
//     'Arizona': 'AZ',
//     'Alabama': 'AL',
//     'Alaska': 'AK',
//     'Arkansas': 'AR',
//     'California': 'CA',
//     'Colorado': 'CO',
//     'Connecticut': 'CT',
//     'Delaware': 'DE',
//     'Florida': 'FL',
//     'Georgia': 'GA',
//     'Hawaii': 'HI',
//     'Idaho': 'ID',
//     'Illinois': 'IL',
//     'Indiana': 'IN',
//     'Iowa': 'IA',
//     'Kansas': 'KS',
//     'Kentucky': 'KY',
//     'Louisiana': 'LA',
//     'Maine': 'ME',
//     'Maryland': 'MD',
//     'Massachusetts': 'MA',
//     'Michigan': 'MI',
//     'Minnesota': 'MN',
//     'Mississippi': 'MS',
//     'Missouri': 'MO',
//     'Montana': 'MT',
//     'Nebraska': 'NE',
//     'Nevada': 'NV',
//     'New Hampshire': 'NH',
//     'New Jersey': 'NJ',
//     'New Mexico': 'NM',
//     'New York': 'NY',
//     'North Carolina': 'NC',
//     'North Dakota': 'ND',
//     'Ohio': 'OH',
//     'Oklahoma': 'OK',
//     'Oregon': 'OR',
//     'Pennsylvania': 'PA',
//     'Rhode Island': 'RI',
//     'South Carolina': 'SC',
//     'South Dakota': 'SD',
//     'Tennessee': 'TN',
//     'Texas': 'TX',
//     'Utah': 'UT',
//     'Vermont': 'VT',
//     'Virginia': 'VA',
//     'Washington': 'WA',
//     'West Virginia': 'WV',
//     'Wisconsin': 'WI',
//     'Wyoming': 'WY'
// }
// const currentDate = data.location.localtime
// const futureDate = data.forecst.forecastday.date;
// let date = currentDate || futureDate;
// const getDayName = function(date) {
//     if(date == currentDate) {
//         let days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
//         for (let i = 0; i < days.length; i++) {
//             let d = new Date(currentDate);
//             let dayName = days[d.getDay()];
//             console.log(dayName);
//         }
//     } else {
//         for (let i = 0; i < days.length; i++) {
//             let d = new Date(futureDate);
//             let dayName = days[d.getDay()];
//             console.log(dayName);
//         }
//     }
// }
//     getDayName(getForecastDate, searchInput);


// function getMetricTempData(avgtemp_c, maxtemp_c, mintemp_c) {
//     for (let i = 0; i < data.forecast.forecastday.length; i++) {
//         if (avgtemp_c) {
//             avgtemp_c = data.forecast.forecastday[i].day.avgtemp_c;
//             return avgtemp_c;
//         } else if (maxtemp_c) {
//             maxtemp_c = data.forecast.forecastday[i].day.maxtemp_c;
//             return maxtemp_c;
//         } else if (mintemp_c) {
//             mintemp_c = data.forecast.forecastday[i].day.mintemp_c;
//             return mintemp_c;
//         } else {
//             null;
//         }
//     }
// }

// function getImperialTempData(avgTemp_f, maxTemp_f, minTemp_f) {
//     for (let j = 0; j < data.forecast.forecastday.length; j++) {
//         if (avgTemp_f) {
//             avgTemp_f = data.forecast.forecastday[j].day.avgtemp_f;
//             return avgTemp_f;
//         } else if (maxTemp_f) {
//             maxTemp_f = data.forecast.forecastday[j].day.maxtemp_f;
//             return maxTemp_f;
//         } else if (minTemp_f) {
//             minTemp_f = data.forecast.forecastday[j].day.mintemp_f;
//             return minTemp_f;
//         } else {
//             null;
//         }
//     }
// }



// function getChanceOfRain() {
//     for (let m = 0; m < data.forecast.forecastday; m++) {
//         chanceOfRain = data.forecast.forecastday[m].day.daily_chance_of_rain;
//         return chanceOfRain;
//     }
// }

// function getConditionIcon(label) {
//     if(label === today) {
//         conditionIcon = data.current.condition.icon;
//     } else {
//         for (let n = 0; n < data.forecast.forecastday; n++) {
//             conditionIcon = data.forecast.forecastday[n].condition.icon;
//             return conditionIcon;
//         }
//     }
// }


// function generateCard({ data }) {

//     const currentTemp_f = data.current.temp_f;
//     const currentTemp_c = data.current.temp_c;
//     let avgTemp_f = data.forecast.forecastday.day.avgTemp_f;
//     let avgTemp_c = data.forecast.forecastday.day.avgTemp_c;
//     const condition = data.current.condition.text;
//     let chanceOfRain = data.forecast.forecastday.day.daily_chance_of_rain;
//     let maxTemp_f = data.forecast.forecastday.day.maxTemp_f;
//     let maxTemp_c = data.forecast.forecastday.day.maxTemp_c;
//     let minTemp_f = data.forecast.forecastday.day.minTemp_f;
//     let minTemp_c = data.forecast.forecastday.day.avgTemp_c;
//     const city = data.location.name;
//     const state = data.location.region;
//     const country = data.location.country;
//     const currentConditionIcon = data.current.condition.text;
//     let conditionIcon = getConditionIcon(label);
//     let forecastDate = data.forecast.date;
//     const currentDate = data.location.localtime;


//     return `<!-- <div class="row weather-container">
// <div class="col current-card">
//     <div class="error">
//         <p>Invalid city name</p>
//     </div>
//     <div class="card weather">
//         <div>
//             <h2 class="label">${forecastDate}</h2>
//         </div>
//         <div class="weather-location-details">
//             <img class="weather-icon" src=${conditionIcon}>
//             <h1 class="temp">${avgTemp_f}°F</h1>
//             <h1 class="temp">${avgTemp_f}°C</h1>
//             <h2 class="city">${city}, <span class="state">${state}</span></h2>
//             <h3 class="country">${country}</h3>
//         </div>
//         <div class="row details">
//             <div class="col">
//                 <img class="forecast-weather-icon" src="./images/percipitation.png" alt="rain-icon">
//                 <div>
//                     <p class="chance-of-rain">${getChanceOfRain()}%</p>
//                     <p class="chance-of-rain">Chance Of Rain</p>
//                 </div>
//             </div>
//             <div class="col">
//                 <img class="forecast-weather-icon" src="./images/high_low.png" alt="hi-icon">
//                 <div class="inner-details">
//                     <p class="hi-low_f">${getImperialTempData(avgTemp_f, maxTemp_f, minTemp_f)}°F</p>
//                     <p class="hi-low_c">${getMetricTempData(avgTemp_c, maxTemp_c, minTemp_c)}°C</p>
//                     <p class="icons-label">High: </p>
//                 </div>
//             </div>
//             <div class="col">
//                 <img class="forecast-weather-icon" src="./images/high_low.png" alt="low-icon">
//                 <div class="inner-details">
//                     <p class="hi-low_f">${getImperialData(avgTemp_f, maxTemp_f, minTemp_f)}°F</p>
//                     <p class="hi-low_f">${getMetricData(avgTemp_f, maxTemp_f, minTemp_f)}°C</p>
//                     <p class="icons-label">Low:</p>
//                 </div>
//             </div>
//         </div>
//     </div>
// </div>
// <div class="col current-summary">
//     <div class="todays-summary_hot">
//         <p class="todays-hot-conditions">It's<span class="hot-day"></span> Today!</p>
//         <p class="hottest"></p>
//     </div>
//     <div class="todays-summary_moderate">
//         <p class="todays-moderate-conditions">It's<span class="moderate-day"></span> Today</p>
//         <p class="hottest"></p>
//     </div>
//     <div class="todays-summary_cold">
//         <p class="todays-cold-conditions">It's <span class="cold-day"></span> Today!</p>
//         <p class="hottest">Tuesday is the hottest day this week.</p>
//     </div>
// </div>
// </div> -->`
// }


// const apiKey = 'aabb6cd27ba044f882b210207232509';

// const searchBox = document.querySelector('.search-input');
// const searchBtn = document.querySelector('.search-button');
// const insideContainer = document.getElementById('days');
// const currentDay = document.getElementById('current')

// async function checkWeather(city) {
//     const apiUrl = `https://api.weatherapi.com/v1/forecast.json?key=aabb6cd27ba044f882b210207232509&q={$city}&days=5&aqi=no&alerts=no`

//     const response = await fetch(apiUrl + city + `appid=${apiKey}`);

//     let data = await response.json();
//     console.log(data)

    // const currentDayCard = generateCard({
    //     label: 'Today',
    //     temp_f: data.current.temp_f,
    //     temp_c: data.current.temp_c,
    //     location_name: data.location.name,
    //     location_region: data.location.region,
    //     day: data.forecast.forecastday.day,
        //maxtemp_f: getCondition(maxtemp_f),
        //maxtemp_c: getCondition(maxtemo_c),
        //mintemp_f: getCondition(mintemp_f),
        //mintemp_c: dgetCondition(mintemp_c),
        //rain: getChanceOfRain(),
   // })

    // currentDay.innerHTML = currentDayCard

    // const forecastCard = generateCard({

    // })

    // function getTempClass(temp) {
    //     let tempTarget = querySelector("#card-container");
    //     // Adding class to div element
    //     if(temp < 45) {
    //     classList.add("cold-background");
    //     } else if(temp < 75) {
    //     classList.add("moderate-background");
    //     }else classList.add("hot-baackground");
    // }

//     const currentWeekday = document.getElementsByClass("label");
//     `currentWeekday.innerHTML(${getDayName(currentDate)})`;

//     document.querySelector('.weather-icon').innerHTml = data.location.localtime;

//     let temp_f = document.getElementById('.current-insert-temp_f');
//     temp_f.innerHTML = data.forcast.forecastday[0].day.avgtemp_f;
//     let temp_c = document.getElementById('.current-insert-temp_c');
//     temp_c.innerHTML = data.forcast.forecastday[0].day.avgtemp_c;

//     document.querySelector('.city').innerHTML =data.location.name;
//     document.querySelector('.state')
//     document.querySelector('.country')
//     document.querySelector('.forecast-weather-icon').appendChild(data.current.condition.icon)
//     document.querySelector('.state')
//     document.querySelector('.state')
//     const conditionCard = document.createElement('div')
//     conditionCard.innerText = getCondition(data.current.temp_f)
//     conditionCard.classList.add('conditional-card')
//     document.querySelector('conditional-card')

//    // currentDay.appendChild(conditionCard)

//     const temps = []
//     temps.push(data.forecast.forecastday[0].day.avgtemp_f)

//     for (let i = 1; i < data.forecast.forecastday.length; i++) {
//         const day = data.forecast.forecastday[i];


//         const card = generateCard({
//             label: day.date,
//             location: city, state,
//             day: day.day,
//             humidity: day.day,
//             wind: data.current,
//             rain: data.day,
//             maxtemp_f: getCondition(maxtemp_f),
//             mintemp_f: data.day,
//             function: temps.push(day.day.avgtemp_f)

//         })


//         const div = document.createElement('div')
//         div.innerHTML = card
//         insideContainer.appendChild(div)
//     }

//     let lowestIndex = 0;
//     let highestIndex = 0;
//     let sum = 0

//     for (let i = 0; i < temps.length; i++) {
//         sum += temps[i]

//         if (temps[i] < temps[lowestIndex]) {
//             lowestIndex = i;
//         }
//         if (temps[i] > temps[highestIndex]) {
//             highestIndex = i;
//         }
//     }

//     const avgTemps = sum / temps.length

//     let type = 'hot'

//     if (avgTemps < 75) {
//         type = 'cold'
//     }


//     const dayIndex = type === 'hot' ? highestIndex : lowestIndex;
//     const day = data.forecast.forecastday[dayIndex];
//     const info = document.getElementById('hottest');

//     if (type == 'hot') {
//         info.innerText = 'The hottest day this week is ' + day.date;
//     } else {
//         info.innerText = 'The coldest day this week is ' + day.date;
//     }
// }


// if (searchBtn) {
//     searchBtn.addEventListener("click", () => {
//         checkWeather(searchBox.value);
//     })
// }