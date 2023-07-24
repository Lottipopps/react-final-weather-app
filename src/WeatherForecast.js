import React from "react";
import axios from "axios";
import "./WeatherForecast.css";
import Icon from "./Icon";

export default function WeatherForecast(props) {
  console.log(props);

  function handleResponse(response) {
    console.log(response);
  }

  let lat = props.coordinates.latitude;
  let lon = props.coordinates.longitude;
  const apiKey = "58e244e95c3e78eb13e0ffotadf7c1b8";
  let apiUrl = `https://api.shecodes.io/weather/v1/forecast?lon=${lon}&lat=${lat}&key=${apiKey}&units=metric`;

  axios.get(apiUrl).then(handleResponse);
  return (
    <div className="WeatherForecast">
      <div className="row">
        <div className="col">
          <div className="forecast-day">Sun</div>
          <Icon imageCode="snow-night" height="90" />
          <div className="forecast-temperatures">
            <span className="forecast-max-temp">25°</span>{" "}
            <span className="forecast-min-temp">15°</span>
          </div>
        </div>
      </div>
    </div>
  );
}
