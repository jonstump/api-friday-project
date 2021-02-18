import $ from 'jquery';

export default class Logic {
  static checker(promise, currencies, amount) {
    promise.then(function(response) {
      const body = JSON.parse(response);
      if (body.result === "error") {
        $('#error').text(`There was an error processing your request: ${body['error-type']}`);
      } else {
        for (let i = 0; i < currencies.length; i++) {
          const rate = body.conversion_rates[currencies[i]] * amount;
          if (currencies[i] != "") {
            if (isNaN(rate)) {
              $('#conversion').append(`<li>Sorry we can't cover a rate for ${currencies[i]}</li>`);
            } else {
              $('#conversion').append(`<li>The current rate for ${currencies[i]} is $${rate}</li>`);
            }
          }
        }
      }
    });
  }
}
