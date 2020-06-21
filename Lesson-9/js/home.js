let requestURL = "https://byui-cit230.github.io/weather/data/towndata.json";
let request = new XMLHttpRequest();
request.open("GET", requestURL);
request.responseType = 'json';
request.send();
request.onload = function () {
  let towndata = request.response;
  showData(towndata);
}
  function showData(jsonObj) {
    let town = jsonObj["towns"];
    
    for (var i = 0; i < town.length; i++) {
      if (town[i].name == "Preston" || town[i].name == "Soda Springs" || town[i].name == "Fish Haven"){
      let article = document.getElementById(town[i].name);
      let myH2 = document.createElement("h3");
      let para1 = document.createElement("p");
      let para2 = document.createElement("p");
      let para3 = document.createElement("p");
      let para4 = document.createElement("p");

      myH2.textContent = town[i].name;
      para1.textContent = "Motto: " + town[i].motto;
      para2.textContent = "Year Founded: " + town[i].yearFounded;
      para3.textContent = "Population: " + town[i].currentPopulation;
      para4.textContent = "Annual Rain Fall: " + town[i].averageRainfall + " inches";

      article.appendChild(myH2);
      article.appendChild(para1);
      article.appendChild(para2);
      article.appendChild(para3);
      article.appendChild(para4);

      
      }
    }
  }

