# Currency Exchange API

### By Jon Stump
<img align="center" src="https://avatars2.githubusercontent.com/u/59323850?s=460&u=372c7d529b7379408ae54491ab3449b6e2f4d94d&v=4">

#### *This project is a currency exchange application*
* * *

## Description  
Currency Conversion Epicodus Friday Project

* * *
## Specs
Initial Specs:
| Behavior | Input | Output |
| ------------- |:-------------:| -----:|
| Input Currency and amount | AED | The current rate for AED is $18.3625 |
| Receive error if API returns one | Error | You have received an error: Invalid API Key |
| Receive message if currency doesn't exist | KPW | Sorry we can't cover a rate for KPW |


* * *

## Technologies used
* Javascript
* jQuery
* Bootstrap
* Git
* GitHub
* NPM
* Jest
* webpack
* C8H10N4O2

* * *


## Installation : 

* Copy the following link to your clipboard: https://github.com/jonstump/api-friday-project
* Open a Bash Terminal
* In your terminal window, navigate to a directory that you would like to clone the repository to
* Within your git bash terminal type in 'git clone' and then paste in the link from your clipboard by right clicking and selecting 'paste' example below:
```bash
$ git clone https://github.com/jonstump/api-friday-project
```
* Once the project is cloned navigate to the cloned directory and run ```npm install``` to install all relevant modules.
* Navigate to [ExchangeRate-API](https://www.exchangerate-api.com/docs/overview), sign up, and generate a key.
* Once you have a key create a .env file in the project folder.
* Inside the .env file add "API_KEY=" with your generated API key after the equals sign. No spaces.
* Before running the server you will need a chrome extension to get around CORS errors. A recommended extension can be found [here](https://chrome.google.com/webstore/detail/moesif-origin-cors-change/digfbfaphojjndkpccljibejjbppifbc/related?hl=en-US).
* After running ```npm install``` you will want to run ```npm run start``` to build and start a server for the project.
* You should now be able to try out the currency convertor.
* Now you should be able to open the project in your text editor and look at its functionality as well by navigating to the project folder and opening it with your text editor of choice.


## Bugs
* appends list items and never clears list when convert is clicked
* does not check if user doesn't input an amount
* does not check if user doesn't input a currency

* * *

## Further Exploration 
* Convert back from USD
* Add drop downs for all available Currencies

* * *

## Sources
* [Epicodus](https://www.epicodus.com/)
* [Bootstrap Docs](https://getbootstrap.com/)
* [stack overflow](https://stackoverflow.com/)
* [w3schools](https://www.w3schools.com/)
* [MDN Web Docs](https://developer.mozilla.org/en-US/)
* [Exchange Rate API](https://www.exchangerate-api.com/docs/overview)
* * *

## License:

[GPLv3](https://choosealicense.com/licenses/gpl-3.0/)\
Jon Stump &copy; 2021

* * *

## Contact Information
_Jon Stump: [Email](jmstump@gmail.com)_