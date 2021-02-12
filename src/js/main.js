import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/styles.css';
import Currency from "../js/currency.js";



function getElements(response) {
  if (response) {
    console.log(response);
    // $('#currencyConverted').text(`Conversion: ${} `);
  } else {
    $('#error').text('error message here');
  }
  
}

$(document).ready(function() {
  $('form').submit(function() {
    // let selectedCurrency = $('#selectedCurrency').val();
  });
  Currency.currencyConvert()
    .then(function(response, error) {
      getElements(response, error);
    });

});