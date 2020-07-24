//weather data
function cozumelWeather() {

const apiURL = "//api.openweathermap.org/data/2.5/forecast?id=3530103&appid=309f07d18a3b8fce0ee8470284c76306&units=imperial"

fetch(apiURL)
  .then((response) => response.json())
  .then((weatherInfo) => {

    document.getElementById('desc').innerHTML = weatherInfo.list[0].weather[0].description;
    document.getElementById('currentTemp').innerHTML = weatherInfo.list[0].main.temp;
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

  })
}

function playaDelCarmenWeather() {

  const apiURL = "//api.openweathermap.org/data/2.5/forecast?id=3521342&appid=309f07d18a3b8fce0ee8470284c76306&units=imperial"

  fetch(apiURL)
  .then((response) => response.json())
  .then((weatherInfo) => {

    document.getElementById('desc2').innerHTML = weatherInfo.list[0].weather[0].description;
    document.getElementById('currentTemp2').innerHTML = weatherInfo.list[0].main.temp;
    document.getElementById('humidity2').innerHTML = weatherInfo.list[0].main.humidity;
    document.getElementById('windSpeed2').innerHTML = weatherInfo.list[0].wind.speed;

    
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

  })
  
}
let forecastRequest = new XMLHttpRequest();
let URLrequest = "https://api.openweathermap.org/data/2.5/forecast?id=3521342&units=imperial&appid=309f07d18a3b8fce0ee8470284c76306";
forecastRequest.open("GET", URLrequest, true);
forecastRequest.responseType = "text";
forecastRequest.send();
forecastRequest.onload = function () {
  let forecast = JSON.parse(forecastRequest.responseText);

  //remove after testing complete
  console.log(forecast);
  let highTemp = [];
  let day = 1;
  let weekday = [];
  var days = new Array('Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday');

  for (let i = 0; i < forecast.list.length && day < 6; i++) {
    if (forecast.list[i].dt_txt.includes("18:00:00")) {
      highTemp[i] = forecast.list[i].main.temp;
      let icon = "https://openweathermap.org/img/w/" + forecast.list[i].weather[0].icon + ".png";
      let desc = forecast.list[i].weather[0].description;
      let now = new Date(forecast.list[i].dt_txt);
      weekday = days[now.getDay()];
      document.getElementById("day" + day).innerHTML = weekday;
      document.getElementById("forecast" + day).innerHTML = highTemp[i] + "&deg; F";
      //console.log(icon);
      document.getElementById("ccimg" + day).setAttribute("src", icon);
      document.getElementById("ccimg" + day).setAttribute("alt", desc);
      day++;
    }
  }
}
