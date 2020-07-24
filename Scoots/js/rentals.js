var data;
loadData();

function loadData() {
   const requestURL = 'https://raw.githubusercontent.com/puchoemi1/puchoemi1.github.io/master/Scoots/data/types.json';

   fetch(requestURL)
   .then(function (response) {
      return response.json();
   })
   .then(function (jsonObject) {
      data = jsonObject;
   });
}

function buildChart() {
   if (data === undefined) {
      setTimeout(buildChart, 200);
   } else {
      let table = '<table id="priceChart">';
      table += '<caption>Max Persons and Price Chart <span class="smaller">(includes Tax)</span></caption>';
      table += '<tr><th colspan="2">&nbsp;</th><th colspan="2">Reservation</th><th colspan="2">Walk-In</th></tr>';
      table += '<tr><th>Rental Type</th><th>Max Persons</th><th>Half Day<br>(3 hrs)</th><th>Full Day</th><th>Half Day<br>(3 hrs)</th><th>Full Day</th></tr>';
      data.types.forEach(type => {
         type.rentals.forEach(rental => {
            table += '<tr><td>' + rental.rental_type + '</td><td>' + rental.max_persons + '</td><td>$' + rental.pricing.reservation.half_day;
            table += '</td><td>$' + rental.pricing.reservation.full_day + '</td><td>$' + rental.pricing.walk_in.half_day;
            table += '</td><td>$' + rental.pricing.walk_in.full_day + '</td></tr>'
         })
      });
      table += '</table>';
      document.getElementById('chart').innerHTML = table;
   }
}

function buildRates() {
      if (data === undefined) {
         setTimeout(buildRates, 200);
      } else {
         let html = "";
         data.types.forEach(type => {
            type.rentals.forEach(rental => {
               html += '<div><h3>' + rental.rental_type + '</h3>';
               html += '<div><img class="rental_image" src="' + rental.image + '"></div>';
               html += '<div class="rental_detail">' + rental.description  + '</div>';
               html += '<div class="rental_price">';
               html += 'Max Persons - ' + rental.max_persons + '<br><br>';
               html += '<span class="rental_price_lable">1/2 Day Reserved</span> $' + rental.pricing.reservation.half_day + '<br>';
               html += '<span class="rental_price_lable">Full Day Reserved</span> $' + rental.pricing.reservation.full_day + '<br>';
               html += '<span class="rental_price_lable">1/2 Day Walk-in</span> $' + rental.pricing.walk_in.half_day + '<br>';
               html += '<span class="rental_price_lable">Full Day Walk-in</span> $' + rental.pricing.walk_in.full_day + '<br>';
               html += '</div>';
               html += '<div><button class="button3" onclick="javascript:window.location.href=\'reservations.html\'">Reserve a ' + rental.rental_type + '</button></div>';             
               html += '</div>';
               html += '<hr class="rental_hr">';
            })
         });
         document.getElementById('rentals').innerHTML = html;
      }
   }

function buildRentals() {
   if (data === undefined) {
      setTimeout(buildRentals, 200);
   } else {
      let main = document.getElementById('home_main');
      data.types.forEach(type => {
         type.rentals.forEach(rental => {
            let parent = document.createElement("div");
            let img_div = document.createElement("div");
            img_div.setAttribute('class', 'rental_image_div');
            let img = document.createElement("img");
            img.setAttribute('src', rental.image);
            img.setAttribute('alt', rental.rental_type);
            img.setAttribute('class', 'rental_image');
            img_div.appendChild(img)
            let txt_div = document.createElement("div");
            txt_div.setAttribute('class', 'txt_div');
            txt_div.textContent = rental.description;
            parent.appendChild(img_div);
            parent.appendChild(txt_div);
            main.appendChild(parent);
         })
      });
   }
}

function loadRentalTypes() {
   if (data === undefined) {
      setTimeout(loadRentalTypes, 200);
   } else {
      let select = document.getElementById('rental_type');
      let option = document.createElement("option");
      option.innerText = "Select Type";
      select.appendChild(option);
      data.types.forEach(type => {
         type.rentals.forEach(rental => {
            option = document.createElement("option");
            option.innerText = rental.rental_type;
            select.appendChild(option);
         })
      });
   }
}
