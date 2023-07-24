import React from "react";
import Icon from "./Icon";

export default function WeatherForecastDay(props) {
  console.log(props);
  let date = new Date(props.info.time * 1000);
  let days = ["Sun", "Mon", "Tue", "Thu", "Fri", "Sat"];
  let day = days[date.getDay()];
  return (
    <div className="WeatherForecastDay">
      <div className="forecast-day">{day}</div>
      <Icon imageCode={props.info.condition.icon} height={90} />
      <div className="forecast-temperatures">
        <span className="forecast-max-temp">
          {Math.round(props.info.temperature.maximum)}°
        </span>{" "}
        <span className="forecast-min-temp">
          {Math.round(props.info.temperature.minimum)}°
        </span>
      </div>
    </div>
  );
}
