import { useState } from "react";
import Search from "./components/search/search";
import "./App.css";
import CurrentWeather from "./components/current-weather/current-weather";
import { WEATHER_API_KEY, WEATHER_API_URL } from "./api";
import Forecast from "./components/forecast/forecast";
import Footer from "./components/footer/footer";

function App() {
  const [currentWeather, setCurrentWeather] = useState(null);
  const [forecast, setForecast] = useState(null);

  const handleSearchChange = (searchData) => {

    const [lat, lon] = searchData.value.split(" ");
    const currentWeatherFetch = fetch(
      `${WEATHER_API_URL}/weather?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`
    );
    const forecastFetch = fetch(
      `${WEATHER_API_URL}/forecast?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`
    );

    Promise.all([currentWeatherFetch, forecastFetch])
      .then(async (response) => {
        const weatherResponse = await response[0].json();
        const forecastResponse = await response[1].json();

        setCurrentWeather({ city: searchData.label, ...weatherResponse });
        setForecast({ city: searchData.label, ...forecastResponse });
      })
      .catch((err) => console.log(err));
  };


  return (
    <>
      <div className="app-container">
        <Search onSearchChange={handleSearchChange} />
        <div className="weather-forecast-container">
          {currentWeather && forecast && (
            <CurrentWeather data={currentWeather} forecast={forecast} />
          )}
          {forecast && <Forecast data={forecast} />}
        </div>
      </div>
      <Footer />
    </>
  );
}

export default App;
