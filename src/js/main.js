import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/styles.css';
import Currency from "../js/currency.js";



function getElements(response) {
  if (response && response!="Error") {
    console.log(response);
    // $('#currencyConverted').text(`Conversion: ${} `);
  } else {
    $('#error').text('there was an error');
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