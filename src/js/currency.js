export default class Currency {
  static currencyConvert() {
    return fetch(`https://v6.exchangerate-api.com/v6/{process.env.API_KE}/latest/USD`)
      .then(function(response) {
        if (!response.ok) {
          throw Error(response.statusText);
        }
        return response.json();
      })
      .catch(function(error) {
        console.log(error);
        return error;
      });
  }
}