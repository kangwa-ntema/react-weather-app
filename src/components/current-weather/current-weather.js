import "./current-weather.css";


const CurrentWeather = ({ data, forecast }) => {

  const currentDateTime = forecast.list.dt_txt;

  console.log(forecast.list)
 
  return (
    <div className="weather-container">
      <div className="date-time" >{forecast.list.temp}</div>
      <div className="weather-brief">
        <div>
          <p className="city">{data.city}</p>
          <p className="weather-description">{data.weather[0].description}</p>
        </div>
        <img
          alt="weather"
          className="weather-icon"
          src={`icons/${data.weather[0].icon}.png`}
        />
      </div>
      <div className="weather-details">
        <h1 className="parameter-row">
          <span className="parameter-label title">Details</span>
        </h1>
        <div className="temperature-and-more-weather-details">
          <h1 className="current-temperature">
              {Math.round(data.main.temp)}&deg;
              <span className="weather-metric">c</span>
          </h1>
          <div className="more-weather-details">
            <div className="parameter-row">
              <span className="parameter-label">Feels like</span>
              <span className="parameter-value">
                {Math.round(data.main.feels_like)}&deg;
                <span className="weather-metric">c</span>
              </span>
            </div>
            <div className="parameter-row">
              <span className="parameter-label">Wind</span>
              <span className="parameter-value">{data.wind.speed} m/s</span>
            </div>
            <div className="parameter-row">
              <span className="parameter-label">Humidity</span>
              <span className="parameter-value">{data.main.humidity}%</span>
            </div>
            <div className="parameter-row">
              <span className="parameter-label">Pressure</span>
              <span className="parameter-value">
                {data.main.pressure}&deg;
                <span className="weather-metric">c</span> hPa
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CurrentWeather;
