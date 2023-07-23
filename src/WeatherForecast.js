import React from "react";
import "./WeatherForecast.css";
import Icon from "./Icon";

export default function WeatherForecast() {
  return (
    <div className="WeatherForecast">
      <div className="row">
        <div className="col">
          <div className="forecast-day">Sun</div>
          <Icon imageCode="02d" height="90" />
          <div className="forecast-temperatures">
            <span className="forecast-max-temp">25°</span>{" "}
            <span className="forecast-min-temp">15°</span>
          </div>
        </div>
      </div>
    </div>
  );
}
