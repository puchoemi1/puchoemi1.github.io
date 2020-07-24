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

  })

//wind chill calc 
const tempNumber = parseFloat(document.getElementById("currentTemp").textContent);
const speedNumber = parseFloat(document.getElementById("windSpeed").textContent);

let windChill = 35.74 + (.06215 * tempNumber) - (35.75 * Math.pow(speedNumber, 0.16)) + (0.4275 * tempNumber * Math.pow(speedNumber, 0.16));
windChill = Math.round(windChill);

if (tempNumber <= 50 && speedNumber > 3) {
  document.getElementById("chill").textContent = windChill + "\xb0 F";
} else {
  document.getElementById("chill").textContent = "N/A";
}



let forecastRequest = new XMLHttpRequest();
let URLrequest = "https://api.openweathermap.org/data/2.5/forecast?id=5604473&units=imperial&appid=be03b0c014037eb9f061306615b7eb28";
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

//Event

const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {

    const towns = jsonObject['towns'];
    const home = towns.filter(town => (town.name == 'Preston'));

    home.forEach(town => {
      let event = document.createElement('article');
      let eventList = document.createElement('ul');

      const townEvents = town.events;
      for (let j = 0; j < townEvents.length; j++) {
        const listItem = document.createElement('li');
        listItem.textContent = townEvents[j];
        eventList.appendChild(listItem);
      }

      document.getElementById('event').appendChild(eventList);
    })
  });