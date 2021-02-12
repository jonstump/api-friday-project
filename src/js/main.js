import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/styles.css';
import Currency from "../js/currency.js";

async function currencyLookUp(selectedCurrency) {
  if (selectedCurrency != Currency.conversion_rates) {
    let lookUp = "Currency not available for conversion";
    return lookUp;
  }
  let lookUp = (selectedCurrency === Currency.conversion_rates);
  return lookUp;
}

function getElements(response) {
  if (response && response!="Error") {
    console.log(response);
    $('#currencyConverted').text(`${Currency.lookUp}`);
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