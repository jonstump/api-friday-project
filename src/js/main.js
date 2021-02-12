import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/styles.css';
import Currency from "../js/currency.js";



$(document).ready(function() {
  $('#convert').click(function() {
    let currency = $('#selectedCurrency').val();
    
    let promise = Currency.currencyConvert(currency);
    console.log(promise);

    promise.then(function(response) {
      const body = JSON.parse(response);
      console.log(body)
      console.log(body.result)
      console.log(body.conversion_rates)
      console.log(body.conversion_rates['AED'])
      if (body.result === "error") {
        $('#error').text(`There was an error processing your request: ${body['error-type']}`);
      } else {
        $('#conversion').text(`The current rate for ${currency} is ${body}%`)
      }
    }, function(error) {
      
    });

  });
});