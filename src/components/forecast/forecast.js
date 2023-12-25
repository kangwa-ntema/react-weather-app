import {
  Accordion,
  AccordionItem,
  AccordionItemButton,
  AccordionItemHeading,
  AccordionItemPanel,
} from "react-accessible-accordion";
import "./forecast.css";

const WEEK_DAYS = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];

const Forecast = ({ data }) => {
  const dayInAWeek = new Date().getDay();
  const forecastDays = WEEK_DAYS.slice(dayInAWeek, WEEK_DAYS.length).concat(
    WEEK_DAYS.slice(0, dayInAWeek)
  );
  console.log(forecastDays);
  console.log(data);

  return (
    <>
      <div className="week-days-container">
        <label className="daily-forecast-title">Next 7 days</label>
        <Accordion allowZeroExpanded>
          {data.list.slice(0, 7).map((item, idx) => (
            <AccordionItem key={idx}>
              <AccordionItemHeading>
                <AccordionItemButton>
                  <div className="daily-forecast">
                    <img
                      alt="weather"
                      className="daily-forecast-icon-small"
                      src={`icons/${item.weather[0].icon}.png`}
                    />
                    <div className="daily-forecast-description">
                      <label className="day">{forecastDays[idx]}</label>
                      <label className="description">
                        {item.weather[0].description}
                      </label>
                    </div>
                    <div className="daily-forecast-min-max">
                      <label className="daily-forecast-min">
                        <i>Min {Math.round(item.main.temp_min)}&deg;c</i>
                      </label>
                      <label className="daily-forecast-max">
                        <i>Max {Math.round(item.main.temp_max)}&deg;c</i>
                      </label>
                    </div>
                  </div>
                </AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel>
                <div className="daily-details-grid">
                  <div className="daily-details-grid-item">
                    <label>Pressure</label>
                    <label>{item.main.pressure}hPa</label>
                  </div>
                  <div className="daily-details-grid-item">
                    <label>Humidity</label>
                    <label>{item.main.humidity}%</label>
                  </div>
                  <div className="daily-details-grid-item">
                    <label>Clouds</label>
                    <label>{item.clouds.all}%</label>
                  </div>
                  <div className="daily-details-grid-item">
                    <label>Wind speed</label>
                    <label>{item.wind.speed} m/s</label>
                  </div>
                  <div className="daily-details-grid-item">
                    <label>Sea level</label>
                    <label>{item.main.sea_level}m</label>
                  </div>
                  <div className="daily-details-grid-item">
                    <label>Feels like</label>
                    <label>{Math.round(item.main.feels_like)}&deg;c</label>
                  </div>
                </div>
              </AccordionItemPanel>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </>
  );
};

export default Forecast;
