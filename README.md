

# Weather App

A simple weather application built with JavaScript, HTML, and CSS that allows users to check the weather forecast for a specific location and number of days. The app supports different units (Celsius, Fahrenheit, Kelvin).

## Features

- Search for weather information by location.
- Select units: Celsius (°C), Fahrenheit (°F), or Kelvin.
- Specify the number of forecast days.
- Displays temperature, feels like, humidity, and weather description for each day.
- Responsive and styled with CSS.

## How It Works

1. Enter a location in the input field.
2. Select the preferred unit for temperature.
3. Choose the number of forecast days.
4. Submit the form to retrieve and display the weather forecast.

The main logic is in `src/index.js`, which imports API utilities from the `src/scripts/api.js` file. When the form is submitted, it fetches weather data and dynamically updates the page with the results.

## File Structure

```
src/
  ├── index.js        # Main JavaScript file for DOM interactions and rendering
  ├── scripts/
  │    └── api.js     # Handles fetching weather data from an external API
  └── styles/
       └── style.css  # Styles for the application
```
