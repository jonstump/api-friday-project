import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/styles.css';
import Currency from "../js/currency.js";

$(document).ready(function() {
  $('#convert').click(function() {
    let amount = $('#dollarAmount').val();
    let currencyOne = $('#currencyOne').val();
    let currencyTwo = $('#currencyTwo').val();
    let currencyThree = $('#currencyThree').val();
    let currencyFour = $('#currencyFour').val();
    let currencyFive = $('#currencyFive').val();
    console.log(currencyOne);
    let currencies = [];
    currencies.push(currencyOne, currencyTwo, currencyThree, currencyFour, currencyFive);
    console.log(currencies);

    let promise = Currency.currencyConvert();

    promise.then(function(response) {
      const body = JSON.parse(response);
      // let outputArray = [];
      console.log(body);
      for (let i = 0; i < currencies.length; i++) {
        const rate = body.conversion_rates[currencies[i]] * amount;
        if (body.result === "error") {
          $('#error').text(`There was an error processing your request: ${body['error-type']}`);
        } else if (isNaN(rate)) {
          $('#conversion').append(`Sorry we can't cover a rate for ${currencies[i]}`);
        } else {
          $('#conversion').append(`The current rate for ${currencies[i]} is $${rate}`);
          $('#error').text("");
        }
      } 
    });
  });
});