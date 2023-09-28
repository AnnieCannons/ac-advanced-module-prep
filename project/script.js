
const searchElement =
    `<div class="search">
    <h1>Local Weather report</h1>
    <input type="text" value="oakland" class="search-input" placeholder="enter city name" id="search-input" spellcheck="false">
    <button type="submit"><img class="search-button" src="./images/search.png" id="search-button" alt="search-bar"></button>
</div>`

function getCondition(temp) {

    if (temp < 45) {
        return "It's Cold Today!"
    } else if (temp < 75) {
        return "Its Moderate Today!"
    } else {
        return "It's Hot Today!"
    }
}


// function getTempClass(temp) {
//     let tempTarget = document.getElementById("card-container");
//     // Adding class to div element
//     if(temp < 45) {
//     tempTarget.classList.add("cold-background");
//     } else if(temp < 75) {
//         tempTarget.classList.add("moderate-background");
//     }else tempTarget.classList.add("hot-baackground");
// }


function generateCard({ data, location, day, label }) {

    console.log(location)


    const { temp_f, avgtemp_f, condition, daily_chance_of_rain, maxtemp_f, mintemp_f } = day
    const { name, region, country } = location




    return `<div id="card-container" class="card weather">
    <p class="temp-heading">${label}</p>
    <img class="weather-icon" src="${condition.icon}" alt="weather-icon">
    <h1 class="temp">
    ${temp_f || avgtemp_f}°F
    </h1>
    <h2 class="city">${name}, <span class="state">${region}</span></h2>
    <h3 class="country"> ${country}</h3>
    <div class="details-container">
        <div class="col">
            <img src="./images/percipitation.png" alt="rain-icon">
            <div>
                <p class="rain">${daily_chance_of_rain}%</p>
                <p>Chance of Rain</p>
            </div>
        </div>
        <div class="col">
            <img src="./images/high_low.png" alt="up-down-arrows-icon">
            <div>
                <p class="min_max">${mintemp_f}°F</p>
                <p>Low Temp</p>
            </div>
        </div>
        <div class="col">
            <img src="./images/high_low.png" alt="up-down-arrows-icon">
            <div>
                <p class="min_max">${maxtemp_f}°F</p>
                <p>Hi Temp</p>
            </div>
        </div>
    </div>
</div>`
}


document.querySelector('.search-container').innerHTML = searchElement

const apiKey = 'aabb6cd27ba044f882b210207232509';

const searchBox = document.querySelector('.search-input');
const searchBtn = document.querySelector('.search-button');
const insideContainer = document.getElementById('days');
const currentDay = document.getElementById('current')

async function checkWeather(city) {
    const apiUrl = `https://api.weatherapi.com/v1/forecast.json?key=aabb6cd27ba044f882b210207232509&q=${city}&days=4&aqi=no&alerts=no`;
    const response = await fetch(apiUrl + city + `appid=${apiKey}`);

    let data = await response.json();
    console.log(data)

    const currentDayCard = generateCard({
        label: 'Today',
        location: data.location,
        day: data.current,
        humidity: data.current,
        wind: data.day,
        rain: data.day,
        maxtemp_f: data.day,
        mintemp_f: data.day,
    })

    currentDay.innerHTML = currentDayCard

    // function getTempClass(temp) {
    //     let tempTarget = querySelector("#card-container");
    //     // Adding class to div element
    //     if(temp < 45) {
    //     classList.add("cold-background");
    //     } else if(temp < 75) {
    //     classList.add("moderate-background");
    //     }else classList.add("hot-baackground");
    // }

    const conditionCard = document.createElement('div')
    conditionCard.innerText = getCondition(data.current.temp_f)
    conditionCard.classList.add('conditional-card')
    document.querySelector('conditional-card')

    currentDay.appendChild(conditionCard)

    const temps = []
    temps.push(data.forecast.forecastday[0].day.avgtemp_f)

    for (let i = 1; i < data.forecast.forecastday.length; i++) {
        const day = data.forecast.forecastday[i]
        temps.push(day.day.avgtemp_f)


        const card = generateCard({
            label: day.date,
            location: data.location,
            day: day.day,
            humidity: day.day,
            wind: data.current,
            rain: data.day,
            maxtemp_f: data.day,
            mintemp_f: data.day,
           // function: getTempClass(temp),

        })


        const div = document.createElement('div')
        div.innerHTML = card
        insideContainer.appendChild(div)
    }

    let lowestIndex = 0;
    let highestIndex = 0;
    let sum = 0

    for (let i = 0; i < temps.length; i++) {
        sum += temps[i]

        if (temps[i] < temps[lowestIndex]) {
            lowestIndex = i;
        }
        if (temps[i] > temps[highestIndex]) {
            highestIndex = i;
        }
    }

    const avgTemps = sum / temps.length

    let type = 'hot'

    if (avgTemps < 75) {
        type = 'cold'
    }


    const dayIndex = type === 'hot' ? highestIndex : lowestIndex;
    const day = data.forecast.forecastday[dayIndex];
    const info = document.getElementById('hottest');

    if (type == 'hot') {
        info.innerText = 'The hottest day this week is ' + day.date;
    } else  {
        info.innerText = 'The coldest day this week is ' + day.date;
    }
}


if (searchBtn) {
    searchBtn.addEventListener("click", () => {
        checkWeather(searchBox.value);
    })
}