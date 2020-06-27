const apiURL = 'https://api.openweathermap.org/data/2.5/weather?id=5604473&units=imperial&APPID=2ac161a331fb86c446be0b8d9b79557d';

fetch (apiURL)
    .then((response) => response .json())
    .then((jsObject) => {
        console.log(jsObject);



        const currentTemp = document.querySelector
        ('#current-temp');
        const icon = document.querySelector('img');


        currentTemp.textContent = jsObject.main.temp;

        const imagesrc = 'https://openweathermap.org/img/w/01d.png';
        const desc = jsObject.weather[0].description;

        icon.setAttribute('src', imagesrc);
        icon.setAttribute('alt', desc);





})