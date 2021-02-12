import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/styles.css';
import Currency from "../js/currency.js";




function getElements(response) {
  if (response && response.result!="error") {
    console.log(response);
  } else {
    $('#error').text('there was an error');
  }
}

$(document).ready(function() {
  $('form').submit(function() {
    // let selectedCurrency = $('#selectedCurrency').val();
    
  });
  Currency.currencyConvert()
      .then(function(response) {
        getElements(response);
      });
});