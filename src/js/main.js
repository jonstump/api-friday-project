import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/styles.css';
import Currency from "../js/currency.js";


$(document).ready(function() {
  $('form').submit(function() {
    let selectedCurrency = $('#selectedCurrency').val();
    let lookUp = Currency.currencyLookUp(selectedCurrency);
    console.log(lookUp);
  });
  Currency.currencyConvert()
    .then(function(response) {
      getElements(response);
    });

  function getElements(response) {
    if (response && response!="Error") {
      console.log(response);
      $('#currencyConverted').text(`Conversion: ${lookUp} `);
    } else {
      $('#error').text('there was an error');
    }
    
  }
  

});