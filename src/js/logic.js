import $ from 'jquery';

export default class Logic {
  static checker(promise, currencies, amount) {
    promise.then(function(response) {
      const body = JSON.parse(response);
      console.log(body);
      for (let i = 0; i < currencies.length; i++) {
        const rate = body.conversion_rates[currencies[i]] * amount;
        if (body.result === "error") {
          $('#error').text(`<li>There was an error processing your request: ${body['error-type']}</li>`);
        } else if (isNaN(rate)) {
          $('#conversion').append(`<li>Sorry we can't cover a rate for ${currencies[i]}</li>`);
        } else {
          $('#conversion').append(`<li>The current rate for ${currencies[i]} is $${rate}</li>`);
        }
      }
    });
  }
}
