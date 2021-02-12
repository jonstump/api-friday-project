import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/styles.css';
import Currency from "../js/currency.js";


// async function currencyLookUp(selectedCurrency) {
//   const response = function getElements(response) {
//       if (response && response!="Error") {
//         console.log(response);
//         let rates = response.conversion_rates;
//         return rates;
//       } else {
//         $('#error').text('there was an error');
//       }
//     }
//   let userCurrency = selectedCurrency
//   console.log(response);
//   if (userCurrency != "GPB") {
//     $('#conversion').text("Currency unavailable for conversion");
//   } $('conversion').text(`The rate for ${selectedCurrency} is ${response.conversion_rates[0]}`);
// }

function getElements(response) {
  if (response && response!="Error") {
    console.log(response);
    let rates = response.conversion_rates;
    return rates;
  } else {
    $('#error').text('there was an error');
  }
}

$(document).ready(function() {
  $('form').submit(function() {
    let selectedCurrency = $('#selectedCurrency').val();
    currencyLookUp(selectedCurrency);
  });

  Currency.currencyConvert()
    .then(function(response) {
      getElements(response);
    });

});