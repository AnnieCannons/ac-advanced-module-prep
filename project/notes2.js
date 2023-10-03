


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



//Script.js file before deleting:

// const apiKey = '5e0eea3c80634f73ab322334230210';
// const apiUrl = 'https://api.weatherapi.com/v1/forecast.json?key=5e0eea3c80634f73ab322334230210&q=${city}}&days=4&aqi=no&alerts=no';

// const searchBox = document.querySelector('.search-input');
// const searchBtn = document.querySelector('.search-button');
// const weatherIcon = document.querySelector('.weather-icon');
// const insideContainer = document.getElementById('days');
// const currentDay = document.getElementById('current');
// const mainContainer = document.getElementById('current-card');
// const forecastDay = document.getElementById('forecast-car');

// async function checkWeather(city) {
//   const response = await fetch(apiUrl + city + `&appid=${apiKey}`);

//   if(response.status == 400) {
//     document.querySelector(".error").style.display = "block";
//     document.querySelector(".weather").style.display ="none";
//   } else {

//     let data = await response.json();
//     console.log(data);

//     const currentDayCard = generateCard({
//         label: 'Today',
//         temp_f: data.current.temp_f,
//         temp_c: data.current.temp_c,
//         city: data.location.name,
//         state: data.location.region,
//         country: data.location.country,
//         day: data.forecast.forecastday[0],
//         rain: getChanceOfRain(),
//         icon: data.current.condition.icon,
//         rain_percent: data.current.precip_in,
//    })


    // Display current weather information
    // document.querySelector('.label').innerHTML = 'Today';
    // document.querySelector('.city').innerHTML = data.location.name;
    // document.querySelector('.state').innerHTML = data.location.region;
    // document.querySelector('.country').innerHTML = data.location.country;
    // document.querySelector('.forecast-weather-icon').src = data.current.condition.icon;
    // document.querySelector('.temp_f').innerHTML = data.current.temp_f;
    // document.querySelector('.temp_c').innerHTML = data.current.temp_c;
    // document.querySelector('.rain-percentage').innerHTML = data.current.precip_in;
    // document.querySelector('current-card').innerHTML = data.current;
    // currentDay.innerHTML = '';
    // data.current.add(() => {
    //     let card = generateCard(current);
    //     currentDay.innerHTML += card;
    // });

    // for(let i = 1; 1 < data.forecast.forecastday; i++) () => {
    // const forecastDayCard = generateCard({
    //     label: getDayName(data.forecast.forecastday[i].date),
    //     temp_f: data.forecast.forecastday[i].avgtemp_f,
    //     temp_c: data.forecast.forecastday[i].avgtemp_c,
    //     city: data.location.name,
    //     state: data.location.region,
    //     country: data.location.country,
    //     day: data.forecast.forecastday[i].day,
    //     rain: getchanceofRain(),
    //     icon: data.forecast.forecastday[i].day.condition.icon,
    //     rain_percent: data.forecast.forecastday[i].day.daily_chance_of_rain,
    // })


    //Display 3 day forecast
    // document.querySelector('.weather.icon').innerHTNL = data.forecast.forecastday.condtion.icon;
    // document.querySelector('.city').innerHTML = data.location.name;
    // document.querySelector('.state').innerHTML = data.location.region;
    // document.querySelector('.country').innerHTML = data.location.country;
    // document.querySelector('.forecast-weather-icon').src = data.current.condition.icon;
    // document.querySelector('.temp_f').innerHTML = data.current.temp_f;
    // document.querySelector('.temp_c').innerHTML = data.current.temp_c;
    // document.querySelector('.rain-percentage').innerHTML = data.current.precip_in;
    // document.querySelector('forecast-card').innerHTML = data.forecast.forecastday;
    // insideContainer.innerHTML = '';
    // data.forecast.forecastday.forEach((day) => {
    //     for(let i=1; 1< data.forecast.forecastday; i++){
    //         let card = generateCard(day);
    //         forecastDay = data.forecast.forecastday[i]
    //     }
    //     insideContainer.innerHTML += card;
    // })

    // Calculate and display hottest/coldest day
//     const temps = data.forecast.forecastday.map((day) => day.day.avgtemp_f);
//     const lowestIndex = temps.indexOf(Math.min(...temps));
//     const highestIndex = temps.indexOf(Math.max(...temps));
//     const hottestDay = data.forecast.forecastday[highestIndex].date;
//     const coldestDay = data.forecast.forecastday[lowestIndex].date;

//     if (temps.length > 0) {
//         let type = 'hot';
//         if (temps.reduce((a, b) => a + b) / temps.length < 75) {
//             type = 'cold';
//         }

//         const info = document.getElementById('hottest');
//         if (type === 'hot') {
//             info.innerText = 'The hottest day this week is ' + hottestDay;
//         } else {
//             info.innerText = 'The coldest day this week is ' + coldestDay;
//         }
//     }

//     function generateCurrentCard(day) {
//         const currentCard = `
//     `
//     }
//     function generateCard(day) {
//   const card = `
//     <div class="card">
//       <h2>${getDayName(day.date)}</h2>
//       <img src="${day.day.condition.icon}" alt="Weather Icon">
//       <p>Max Temp: ${day.day.maxtemp_f}°F / ${day.day.maxtemp_c}°C</p>
//       <p>Min Temp: ${day.day.mintemp_f}°F / ${day.day.mintemp_c}°C</p>
//       <p>Rain: ${day.day.daily_chance_of_rain}%</p>
//     </div>
//   `;
//   return card;
//     }

//     function getDayName(dateStr) {
//   const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
//   const date = new Date(dateStr);
//   const dayName = days[date.getDay()];
//   return dayName;
//     }

// };

// if (searchBtn) {
//     searchBtn.addEventListener('click', () => {
//         checkWeather(searchBox.value);
//     });
// }}};




//4:25am

// document.addEventListener('DOMContentLoaded', () => {
//     const apiKey = '5e0eea3c80634f73ab322334230210';
//     const apiUrl = 'https://api.weatherapi.com/v1/forecast.json?key=5e0eea3c80634f73ab322334230210&q=';

//     const searchBox = document.querySelector('.search-input');
//     const searchBtn = document.querySelector('.search-button');
//     const weatherIcon = document.querySelector('.weather-icon');
//     const insideContainer = document.getElementById('days');
//     const currentDay = document.getElementById('current');
//     const mainContainer = document.getElementById('current-card');
//     const forecastDay = document.getElementById('forecast-card');

//     async function checkWeather(city) {
//       const response = await fetch(`${apiUrl}${city}&days=4&aqi=no&alerts=no`);

//       if (response.status === 400) {
//         document.querySelector(".error").style.display = "block";
//         document.querySelector(".weather").style.display = "none";
//       } else {
//         const data = await response.json();
//         console.log(data);

//         const currentDayCard = generateCurrentCard(data.current, 'Today', data.location);
//         document.querySelector('.current-weather-container').innerHTML = currentDayCard;

//         data.forecast.forecastday.forEach(day => {
//           const forecastDayCard = generateForecastCard(day.day, getDayName(day.date), data.location);
//           document.querySelector('.forecast-day-card').innerHTML = forecastDayCard
//         });

//         const temps = data.forecast.forecastday.map(day => day.day.avgtemp_f);
//         const lowestIndex = temps.indexOf(Math.min(...temps));
//         const highestIndex = temps.indexOf(Math.max(...temps));
//         const hottestDay = data.forecast.forecastday[highestIndex].date;
//         const coldestDay = data.forecast.forecastday[lowestIndex].date;

//         const info = document.getElementById('current-summary');
//         if (temps.length > 0) {
//           const averageTemp = temps.reduce((a, b) => a + b) / temps.length;
//           if (averageTemp < 75) {
//             info.innerText = `The coldest day this week is ${coldestDay}`;
//           } else {
//             info.innerText = `The hottest day this week is ${hottestDay}`;
//           }
//         } else {
//           info.innerText = "";
//         }
//       }
//     }

//     function generateCurrentCard(day, label, location) {
//       return `
//         <div class="card weather">
//             <div class="label-container">
//                 <h2 class="label">${label}</h2>
//             </div>
//             <div class="weather-location-details">
//                 <img class="weather-icon" src="${day.condition.icon}" alt="rain-icon">
//                 <h1 class="temp_f">${day.avgtemp_f}°F</h1>
//                 <h1 class="temp_c">${day.avgtemp_c}°C</h1>
//                 <h2 class="city">${location.name}, <span class="state">${location.region}</span></h2>
//                 <h3 class="country">${location.country}</h3>
//             </div>
//             <div class="row details">
//                 <div class="col inner-details">
//                     <div>
//                         <img id="rain" class="umbrella forecast-weather-icon" src="./images/umbrella_rain.png" alt="rain-icon">
//                     </div>
//                     <div>
//                         <p class="rain-percentage">${day.daily_chance_of_rain}%</p>
//                         <p class="rain-text">Chance Of Rain</p>
//                     </div>
//                 </div>
//                 <div class="col inner-details">
//                     <div>
//                         <img id="max" class="max-min-weather-icon" src="./images/high_low.png" alt="hi-icon">
//                     </div>
//                      <div>
//                         <p id="max_f" class="hi-low_f">${day.maxtemp_f}°F</p>
//                         <p id="max_c" class="hi-low_c">${day.maxtemp_c}°C</p>
//                         <p class="icons-label">High: </p>
//                     </div>
//                 </div>
//                 <div class="col inner-details">
//                     <div>
//                         <img id="low" class="max-min-weather-icon" src="./images/high_low.png" alt="low-icon">
//                     </div>
//                     <div>
//                         <p id="min_f" class="hi-low_f">${day.mintemp_f}°F</p>
//                         <p id="min_c" class="hi-low_f">${day.mintemp_c}°C</p>
//                         <p class="icons-label">Low:</p>
//                     </div>
//                 </div>
//             </div>
//         </div>
//       `;
//     }

//     function generateForecastCard(day, label, location) {
//         return `
//           <div class="card weather">
//               <div class="label-container">
//                   <h2 class="label">${label}</h2>
//               </div>
//               <div class="weather-location-details">
//                   <img class="weather-icon" src="${day.condition.icon}" alt="rain-icon">
//                   <h1 class="temp_f">${day.temp_f}°F</h1>
//                   <h1 class="temp_c">${day.temp_c}°C</h1>
//                   <h2 class="city">${location.name}, <span class="state">${location.region}</span></h2>
//                   <h3 class="country">${location.country}</h3>
//               </div>
//               <div class="row details">
//                   <div class="col inner-details">
//                       <div>
//                           <img class="umbrella forecast-weather-icon" src="./images/umbrella_rain.png" alt="rain-icon">
//                       </div>
//                       <div>
//                           <p class="rain-percentage">${day.daily_chance_of_rain}%</p>
//                           <p class="rain-text">Chance Of Rain</p>
//                       </div>
//                   </div>
//                   <div class="col inner-details">
//                       <div>
//                           <img class="max-min-weather-icon" src="./images/high_low.png" alt="hi-icon">
//                       </div>
//                        <div>
//                           <p id="forecast-max_f" class="hi-low_f">${day.maxtemp_f}°F</p>
//                           <p id="forecast-max_c" class="hi-low_c">${day.maxtemp_c}°C</p>
//                           <p class="icons-label">High: </p>
//                       </div>
//                   </div>
//                   <div class="col inner-details">
//                       <div>
//                           <img class="max-min-weather-icon" src="./images/high_low.png" alt="low-icon">
//                       </div>
//                       <div>
//                           <p id="forecast-min_f" class="hi-low_f">${day.mintemp_f}°F</p>
//                           <p id="forecast-min_c" class="hi-low_f">${day.mintemp_c}°C</p>
//                           <p class="icons-label">Low:</p>
//                       </div>
//                   </div>
//               </div>
//           </div>
//         `;
//     }

//     function getDayName(dateStr) {
//       const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
//       const date = new Date(dateStr);
//       const dayName = days[date.getDay()];
//       return dayName;
//     }

//     if (searchBtn) {
//       searchBtn.addEventListener('click', () => {
//         checkWeather(searchBox.value);
//       });
//     }
//     })

//4:40am


// Function to fetch weather data from the API and update the HTML
// async function checkWeather(city) {
//     try {
//       const response = await fetch(`https://api.weatherapi.com/v1/forecast.json?key=YOUR_API_KEY&q=${city}&days=7`);
//       const data = await response.json();

//       if (response.status === 200) {
//         updateCurrentWeather(data.current);
//         updateForecast(data.forecast);
//       } else {
//         displayErrorMessage(data.error.message);
//       }
//     } catch (error) {
//       displayErrorMessage('An error occurred while fetching the weather data.');
//     }
//   }

  // Function to update the HTML with the current weather data
//   function updateCurrentWeather(current) {
//     const currentCard = generateCurrentCard(current);
//     document.getElementById('currentWeather').innerHTML = currentCard;
//   }

  // Function to update the HTML with the forecast weather data
//   function updateForecast(forecast) {
//     let forecastCards = '';
//     forecast.forecastday.forEach(day => {
//       forecastCards += generateForecastCard(day);
//     });
//     document.getElementById('forecastWeather').innerHTML = forecastCards;

//     const hottestDay = getHottestDay(forecast.forecastday);
//     const coldestDay = getColdestDay(forecast.forecastday);

//     document.getElementById('hottestDay').innerHTML = hottestDay.date;
//     document.getElementById('coldestDay').innerHTML = coldestDay.date;
//   }

  // Function to generate the HTML card for the current weather
//   function generateCurrentCard(current) {
//     const condition = current.condition;
//     const card = `
//       <div class="card">
//         <h2>${current.temp_c}°C</h2>
//         <img src="${condition.icon}" alt="${condition.text}">
//         <p>${condition.text}</p>
//       </div>
//     `;
//     return card;
//   }

  // Function to generate the HTML card for a forecast day
//   function generateForecastCard(day) {
//     const condition = day.day.condition;
//     const card = `
//       <div class="card">
//         <h2>${day.day.avgtemp_c}°C</h2>
//         <img src="${condition.icon}" alt="${condition.text}">
//         <p>${condition.text}</p>
//         <p>${getDayName(day.date)}</p>
//       </div>
//     `;
//     return card;
//   }

  // Function to get the day name from a date string
//   function getDayName(dateString) {
//     const date = new Date(dateString);
//     const options = { weekday: 'long' };
//     return new Intl.DateTimeFormat('en-US', options).format(date);
//   }

  // Function to get the hottest day from the forecast
//   function getHottestDay(forecastDays) {
//     return forecastDays.reduce((prev, current) =>
//       (current.day.maxtemp_c > prev.day.maxtemp_c) ? current : prev
//     );
//   }

  // Function to get the coldest day from the forecast
//   function getColdestDay(forecastDays) {
//     return forecastDays.reduce((prev, current) =>
//       (current.day.mintemp_c < prev.day.mintemp_c) ? current : prev
//     );
//   }

  // Function to display an error message on the page
//   function displayErrorMessage(message) {
//     document.getElementById('errorMessage').innerHTML = message;
//   }

  // Event listener for the search button click
//   document.getElementById('searchButton').addEventListener('click', function () {
//     const city = document.getElementById('searchBox').value;
//     checkWeather(city);
//   });

  //(`currentWeather`, `forecastWeather`, `hottestDay`, `coldestDay`, `errorMessage`, `searchButton`, and `searchBox`) to display the weather data.
