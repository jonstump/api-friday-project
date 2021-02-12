export default class Currency {
  static currencyConvert() {
    return fetch(`https://v6.exchangerate-api.com/v6/${process.env.API_KEY}/latest/USD`)
      .then(function(response) {
        if (!response.ok) {
          throw Error(response.statusText);
        }
        return response.json();
      })
      .catch(function(error) {
        return error;
      });
  }
  currencyLookUp(selectedCurrency) {
    if (selectedCurrency != Currency.conversion_rates) {
      let lookUp = "Currency not available for conversion";
      return lookUp;
    }
    let lookUp = (selectedCurrency === Currency.conversion_rates);
    return lookUp;
  }
}