import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';

function getElements(response) {
  if (response) {
    console.log(response);
    $('#currencyConverted').text(`Conversion: ${} `);
  } else {
    $('#error').text('error message here');
  }
  
}

$(document).ready(function() {

})