//weather data
const apiURL = "//api.openweathermap.org/data/2.5/forecast?id=5604473&appid=06b398ce5a9a3ebc9b95042ec888e67b&units=imperial"

fetch(apiURL)
    .then((response) => response.json())
    .then((weatherInfo) => {

        document.getElementById('desc').innerHTML = weatherInfo.list[0].weather[0].description;
        document.getElementById('currentTemp').innerHTML = weatherInfo.list[0].main.temp;
        document.getElementById('high').innerHTML = weatherInfo.list[0].main.temp_max;
        document.getElementById('humidity').innerHTML = weatherInfo.list[0].main.humidity;
        document.getElementById('windSpeed').innerHTML = weatherInfo.list[0].wind.speed;

        // today
const today = new Date();
const todayDayNumber = today.getDay();
let fdn = tdn;


        // week days

const weekday = new Array(7);
  weekday[0] = "Sun";
  weekday[1] = "Mon";
  weekday[2] = "Tues";
  weekday[3] = "Wed";
  weekday[4] = "Thurs";
  weekday[5] = "Fri";
  weekday[6] = "Sat";

    }    
    )

