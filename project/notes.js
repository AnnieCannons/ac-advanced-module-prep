// document.addEventListener('DOMContentLoaded', () => {})
// const apiKey = '5e0eea3c80634f73ab322334230210';
// const apiUrl = 'https://api.weatherapi.com/v1/forecast.json?key=5e0eea3c80634f73ab322334230210&q=';

// const searchBox = document.querySelector('.search-input');
// const searchBtn = document.querySelector('.search-button');
// const weatherIcon = document.querySelector('.weather-icon');
// const insideContainer = document.getElementById('days');
// const currentDay = document.getElementById('current');
// const mainContainer = document.getElementById('current-card');
// const forecastDay = document.getElementById('forecast-card');

// async function checkWeather(city) {
//   const response = await fetch(`${apiUrl}${city}&days=4&aqi=no&alerts=no`);

//   if (response.status === 400) {
//     document.querySelector(".error").style.display = "block";
//     document.querySelector(".weather").style.display = "none";
//   } else {
//     const data = await response.json();
//     console.log(data);

//     const currentDayCard = generateCurrentCard(data.forecast.forecastday[0], 'Today', data.location);
//     document.querySelector('.current-weather-container').innerHTML = `${currentDayCard} `;


//     generateForecastCards(data.forecast.forecastday, data.location)
//     const temps = data.forecast.forecastday.map(day => day.day.avgtemp_f);
//     console.log(temps)
//     const lowestIndex = temps.indexOf(Math.min(...temps));
//     const highestIndex = temps.indexOf(Math.max(...temps));
//     const hotDay = data.forecast.forecastday[highestIndex].date;
//     const coldDay = data.forecast.forecastday[lowestIndex].date;

//     //const hottestDay = getHottestDay(data.forecast.forecastday);
//   //  const coldestDay = getColdestDay(forecast.forecastday);
//     document.getElementById('hottestDay').innerHTML = getDayName(data.forecast.forecastday);
//     //document.getElementById('coldestDay').innerHTML = coldestDay.date;
//     getInfo(data.current.condition.temp_f);
//   }
// }

// function getInfo(current)  {

//     const currentTemp = current.condition.temp_f;
//     const mainBody = document.getElementById('main-body');
//      if (currentTemp > 75) {
//         mainBody.classList.add('hotTemperature');
//         const todaysCondition = document.createElement('p');
//         p.classList.add('daysCondition');
//         p.textContent = "Its hot today!"
//         document.querySelector('.info').appendChild(p);
//         return "It's hot today!";
//       } else if(currentTemp < 74 && currentTemp >46) {
//         mainBody.classList.add('moderateTemperature');
//         const todaysCondition = document.createElement('p');
//         p.classList.add('daysCondition');
//         p.textContent="it's moderate today";
//         document.querySelector('.info').appendChild(p);
//         return "It's moderate today"
//       } else if(currentTemp < 45) {
//         mainBody.classList.add('coldTemperature');
//         const todaysCondition = document.createElement('p');
//         p.classList.add('daysCondition');
//         p.textContent="It's cold today!"
//         document.querySelector('.info').appendChild(p);
//         return"It's cold today!";
//       }else{
//        null;
//       }
// }

// function generateCurrentCard(current, label, location) {

//     const condition = current.condition;

//     const card = `
//     <div class="col" id="current">
//     <div id="main-body" class="card weather">
//         <div class="label-container">
//             <h2 class="label">${label}</h2>
//         </div>
//         <div class="weather-location-details">
//             <img class="weather-icon" src="${current.day.condition.icon}" alt="${current.day.condition.text}">
//             <h1 class="temp_f">${current.day.avgtemp_f}°F</h1>
//             <h1 class="temp_c">${current.day.avgtemp_c}°C</h1>
//             <h2 class="city">${location.name}, <span class="state">${location.region}</span></h2>
//             <h3 class="country">${location.country}</h3>
//         </div>
//         <div class="row details">
//             <div class="col inner-details">
//                 <div>
//                     <img id="rain" class="umbrella forecast-weather-icon" src="./images/umbrella_rain.png" alt="rain-icon">
//                 </div>
//                 <div>
//                     <p class="rain-percentage">${current.day.daily_chance_of_rain}%</p>
//                     <p class="rain-text">Chance Of Rain</p>
//                 </div>
//             </div>
//             <div class="col inner-details">
//                 <div>
//                     <img id="max" class="max-min-weather-icon" src="./images/high_low.png" alt="hi-icon">
//                 </div>
//                  <div>
//                     <p id="max_f" class="hi-low_f">${current.day.maxtemp_f}°F</p>
//                     <p id="max_c" class="hi-low_c">${current.day.maxtemp_c}°C</p>
//                     <p class="icons-label">High: </p>
//                 </div>
//             </div>
//             <div class="col inner-details">
//                 <div>
//                     <img id="low" class="max-min-weather-icon" src="./images/high_low.png" alt="low-icon">
//                 </div>
//                 <div>
//                     <p id="min_f" class="hi-low_f">${current.day.mintemp_f}°F</p>
//                     <p id="min_c" class="hi-low_f">${current.day.mintemp_c}°C</p>
//                     <p class="icons-label">Low:</p>
//                 </div>
//             </div>
//         </div>
//     </div>
//     </div>
//     <div class="col info"></div>
//     <div class="col"><p class="info"></p></div>
//     <div id="temp_info" class="col"></div>

//   `;
//     // const currentTemp = current.condition.temp_f;
//     //     let info_cont = document.querySelector('#info')
//     //     if (currentTemp > 75) {
//     //         const p = document.createElement('p');
//     //         p.classList.add('hotTemperature');
//     //         info_cont.append('p');
//     //     } else if(currentTemp < 45) {
//     //         const p = document.createElement('p');
//     //         p.classList.add('coldTemperature');
//     //         info_cont.append('p')
//     //     }else{
//     //         const p = document.createElement('p');
//     //         p.classList.add('moderateTemperature');
//     //         info_cont.append('p')
//     //     }
//   return card;
// }


// function generateForecastCards(days, location) {
//     let daysUI = document.getElementById("days")
//     days.slice(1).forEach(day =>{
//         const div = document.createElement("div");
//         div.classList.add("card")
//         div.classList.add("weather")
//         const card = `
//           <div class="label-container">
//               <h2 class="label">${getDayName(day.date)}</h2>
//           </div>
//           <div class="weather-location-details">
//               <img class="weather-icon" src="${day.day.condition.icon}" alt="${day.day.condition.text}">
//               <h2 class="temp_f">${day.day.avgtemp_f}°F</h2>
//               <h3 class="temp_c">${day.day.avgtemp_c}°C</h3>
//               <h4 class="city">${location.name}, <span class="state">${location.region}</span></h4>
//               <h5 class="country">${location.country}</h5>
//           </div>
//           <div class="row details">
//               <div class="col inner-details">
//                   <div>
//                       <img class="umbrella forecast-weather-icon" src="./images/umbrella_rain.png" alt="rain-icon">
//                   </div>
//                   <div>
//                       <p class="rain-percentage">${day.day.daily_chance_of_rain}%</p>
//                       <p class="rain-text">Chance Of Rain</p>
//                   </div>
//               </div>
//               <div class="col inner-details">
//                   <div>
//                       <img class="max-min-weather-icon" src="./images/high_low.png" alt="hi-icon">
//                   </div>
//                    <div>
//                       <p id="forecast-max_f" class="hi-low_f">${day.day.maxtemp_f}°F</p>
//                       <p id="forecast-max_c" class="hi-low_c">${day.day.maxtemp_c}°C</p>
//                       <p class="icons-label">High: </p>
//                   </div>
//               </div>
//               <div class="col inner-details">
//                   <div>
//                       <img class="max-min-weather-icon" src="./images/high_low.png" alt="low-icon">
//                   </div>
//                   <div>
//                       <p id="forecast-min_f" class="hi-low_f">${day.day.mintemp_f}°F</p>
//                       <p id="forecast-min_c" class="hi-low_f">${day.day.mintemp_c}°C</p>
//                       <p class="icons-label">Low:</p>
//                   </div>
//               </div>
//         </div>
//         <div class="col info"></div>
//         <div class="col"><p class="info">${getInfo()}</p></div>
//         <div id="forecast_temp_info" class="col"></div>
//     `;
//     div.innerHTML=card
//     daysUI.append(div)
//     })

// }


// let temps=[];
// let lowestIndex = 0;
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


//     // const dayIndex = type === 'hot' ? highestIndex : lowestIndex;
//     // const day = data.forecast.forecastday[dayIndex];
//     // const info = document.getElementById('hottest');

//     // if (type == 'hot') {
//     //     info.innerText = 'The hottest day this week is ' + day.date;
//     // } else {
//     //     info.innerText = 'The coldest day this week is ' + day.date;
//     // }

// function getDayName(dateStr) {
//   const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
//   const date = new Date(dateStr);
//   const dayName = days[date.getDay()];
//   return dayName;
// }

// if (searchBtn) {
//   searchBtn.addEventListener('click', () => {
//     checkWeather(searchBox.value);
//   });
// }
