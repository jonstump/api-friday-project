import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/styles.css';
import Currency from "../js/currency.js";
import Logic from "../js/logic.js";

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
    console.log(currencies);

    if (amount && currencyOne) {
      currencies.push(currencyOne, currencyTwo, currencyThree, currencyFour, currencyFive);
      let promise = Currency.currencyConvert();
      Logic.checker(promise, currencies, amount);
    } else {
      alert('Please enter an amount and one Currency');
    }
  });
});
