# React Weather App

![](http://i.giphy.com/media/yyFaRX69CYoeaj152e/giphy.gif)

## Full preview is available [here](https://sofiaborovskaia.github.io/react-weather-app/).

This weather app was built using OpenWeather API and requires geolocation to be enabled inside the browser in order to load the weather of user's location on load.

If you decide to clone it to your local machine, don't forget to install dependencies by running `npm install` and then `npm start` to execute the code.

This app makes two API calls:

### 🌩 Coordinates
Gets the user's geographical coordinates (latitude and longitude) on page load. The API call is made in order to retrieve the name of the user's location. The value of the weatherLocation key inside the state object gets updated to match the name of the location.

### 🌩 Location string
After location is received, whether through the coordinates or via search, another API call is made. This time, to get the information about the weather. The user's location, weather description, illustration, temperature and details are determined in the component called WeatherData. Response includes the code of the weather, which is being used in order to render a correspondent gif animation, selected with care by me. If the user searches for a city that isn't in the OpenWeather database, the app returns an error message.

I you have any suggestions on how to improve the code, feel free to contact me!
