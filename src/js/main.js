import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/styles.css';
import Currency from "../js/currency.js";

$(document).ready(function() {
  $('#convert').click(function() {
    let amount = $('#dollarAmount').val();
    let currency = $('#selectedCurrency').val();
    
    let promise = Currency.currencyConvert();

    promise.then(function(response) {
      const body = JSON.parse(response);
      const rate = body.conversion_rates[currency] * amount
      console.log(rate)
      console.log(amount * body.conversion_rates[currency])
      if (body.result === "error") {
        $('#error').text(`There was an error processing your request: ${body['error-type']}`);
      } else if (isNaN(rate)) {
        $('#conversion').text(`Sorry we can't cover a rate for ${currency}`)
      } else {
        $('#conversion').text(`The current rate for ${currency} is $${rate}`)
      }
    }, function(error) {
      
    });

  });
});