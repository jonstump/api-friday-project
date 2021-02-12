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
    console.log(promise);

    promise.then(function(response) {
      const body = JSON.parse(response);
      const rate = body.conversion_rates[currency]
      console.log(amount * body.conversion_rates[currency])
      if (body.result === "error") {
        $('#error').text(`There was an error processing your request: ${body['error-type']}`);
      // } else if (currency != body.conversion_rates[currency]) {
      //   $('#conversion').text(`Sorry we can't cover a rate for ${currency}`)
      } else {
        let convertedRate = rate * amount
        $('#conversion').text(`The current rate for ${currency} is $${convertedRate}`)
      }
    }, function(error) {
      
    });

  });
});