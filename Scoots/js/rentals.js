var data;
loadData();

function loadData() {
   const requestURL = 'data/types.json';

   fetch(requestURL)
   .then(function (response) {
      return response.json();
   })
   .then(function (jsonObject) {
      data = jsonObject;
   });
}

function buildRates() {
      if (data === undefined) {
         setTimeout(buildRates, 200);
      } else {
         let html = "";
         data.types.forEach(type => {
            type.rentals.forEach(rental => {
               html += '<div class="rentalcard">';
               html += '<h3>' + rental.rental_type + '</h3>';
               html += '<img class="rentalpic" src="' + rental.image + '"><br>';
               html += 'Max Persons - ' + rental.max_persons + '<br>';
               html += '<span class="pricetext">1/2 Day Reserved</span> $' + rental.pricing.reservation.half_day + '<br>';
               html += '<span class="pricetext">Full Day Reserved</span> $' + rental.pricing.reservation.full_day + '<br>';
               html += '<span class="pricetext">1/2 Day Walk-in</span> $' + rental.pricing.walk_in.half_day + '<br>';
               html += '<span class="pricetext">Full Day Walk-in</span> $' + rental.pricing.walk_in.full_day + '<br>';
               html += '<a class="info" href="reservations.html">Reserve Now</a>';             
               html += '<hr class="rental_hr"> </div>';
            })
         });
         document.getElementById('rentals').innerHTML = html;
      }
   }




