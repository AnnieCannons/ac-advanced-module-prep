    // Code inside this block will be executed when the DOM (Document Object Model) is fully loaded and parsed.
    // The `apiKey` variable is assigned a string value, which appears to be an API key.
    // The `searchButton` variable is assigned the DOM element with the id "searchButton".

document.addEventListener("DOMContentLoaded", () => {
    const apiKey = "9f4f60e29783491598d212314230310";
    const searchButton = document.getElementById("searchButton");
    let hottestDayOfWeek = ""; // Declare the variables outside of the function
    let hottestTemperature = "";
    // let hottestDayIndex = 0;
  

    
//This JavaScript code is an event listener that responds to a button click, presumably triggered by an element with the ID "searchButton". When the button is clicked, the code performs the following actions:
    searchButton.addEventListener("click", () => {
        const cityInput = document.getElementById("cityInput").value;
        if (cityInput) { //checks if cityInput empty
            fetchWeather(cityInput, apiKey); //If the input field is not empty, it makes a request to fetch weather information for the city.
            const weatherInfo = document.getElementById("weatherInfo"); // Get the element by ID
            weatherInfo.classList.add("loaded"); // Add the "hidden" class to hide the element It hides an element with the ID "weatherInfo".
        }
    });

    

    async function fetchWeather(cityInput, apiKey) { // This code defines an asynchronous JavaScript function named fetchWeather which will work asynchronous actions.  This function takes two parameters: cityInput, to grab the city you input, apiKey to pull the information from the api information.
        
        try {
            const forecastResponse = await fetch( //requet the information from the app
                `http://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${cityInput}&days=3&aqi=no&alerts=no`
            );
            const forecastData = await forecastResponse.json(); //Once the API response is received, it is parsed as JSON using the json() method. The parsed data is stored in the forecastData variable.
            displayWeather(forecastData); //calls the displayWeather and releases the data from the api call
            displayForecast(forecastData); //calls the displayForecast and releases the data from the api call
        } catch (error) {
            console.error("An error occurred:", error); //displays an error if the information for some reason doesn't pull from app
        }
    }
    // weatherInfo.classList.remove("hidden");

    function displayWeather(data) { //This function is designed to update the content of various HTML elements on a webpage with weather-related information based on the data provided. 
        document.getElementById("cityName").textContent = data.location.name; //grabs the city name and displays data from api call
        document.getElementById("country").textContent = data.location.country; //grabs the country the city is in 
        document.getElementById("currentTemp").textContent = `Current Temperature: ${data.current.temp_f}°F`;  //grabs the current temp in the city 
        document.getElementById("highTemp").textContent = `High Temperature: ${data.forecast.forecastday[0].day.maxtemp_f}°F`;  //grabs the current high temp in the city 
        document.getElementById("lowTemp").textContent = `Low Temperature: ${data.forecast.forecastday[0].day.mintemp_f}°F`;  //grabs the current low temp in the city
        document.getElementById("precipitation").textContent = `Chance of Precipitation: ${data.forecast.forecastday[0].day.daily_chance_of_rain}%`; //grabs the current precipitation in the city

        const weatherCondition = document.getElementById("weatherCondition"); //this grabs the temperature and displays if its hot, cold, or moderate accordingtothe temp
        if (data.current.temp_f > 75) {
            weatherCondition.textContent = "It's Hot Today!";
        } else if (data.current.temp_f >= 45 && data.current.temp_f <= 74) {
            weatherCondition.textContent = "It's Moderate Today!";
        } else {
            weatherCondition.textContent = "It's Cold Today!";
        }
    }
    
    async function displayForecast(data) { //This function is responsible for displaying the weather forecast for the next few days.
        const forecast = data.forecast.forecastday.slice(0, 3);
        let hottestDayIndex = 0;
        hottestTemperature = forecast[0].day.maxtemp_f;
        hottestDayOfWeek = new Date(forecast[0].date).toLocaleDateString("en-US", { weekday: "long" });


        for (let i = 1; i < forecast.length; i++) {   //The code then loops through the forecast array to find the index of the hottest day by comparing the maximum temperatures of each day.
            if (forecast[i].day.maxtemp_f > forecast[hottestDayIndex].day.maxtemp_f) {
                hottestDayIndex = i;
            }
        }

        for (let i = 0; i < forecast.length; i++) {  
            const date = new Date(forecast[i].date).toLocaleDateString("en-US", { weekday: "long" });
            const highTemp = forecast[i].day.maxtemp_f;
            const lowTemp = forecast[i].day.mintemp_f;
            const precipitation = forecast[i].day.daily_chance_of_rain;

            const forecastElement = document.createElement("div");
            forecastElement.textContent = `${date}: High ${highTemp}°F, Low ${lowTemp}°F, Precipitation ${precipitation}%`;
            document.body.appendChild(forecastElement);

        }
        
        // const displayHottestDay = document.getElementById("hottestDay"); //I got this code from chapgpt and lots of other for this section and nothing worked. 

        // displayHottestDay.textContent = `The hottest day of the week is ${hottestDayOfWeek} with a high of ${hottestTemperature}°F`;
    }  
    
    
    
    
});

//ChatGpt says that this is the correct way to write this code to display the sentence for the hottest day. for some reason i cannot get it to display. I have googled how to write it and also told chatGpt that it isnt showing and it still insist its wrong. I have reached out to some mentors i know and we cant seem to find the issue with the code.