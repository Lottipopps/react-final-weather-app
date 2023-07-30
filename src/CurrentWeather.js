import React from "react";
import "./CurrentWeather.css";
import FormattedDate from "./FormattedDate";
import Icon from "./Icon";
import CurrentTemperature from "./CurrentTemperature";

export default function CurrentWeather(props) {
  return (
    <div className="CurrentWeather">
      <h1>{props.info.name}</h1>
      <p>{props.info.country}</p>
      <ul>
        <li>
          <FormattedDate dateInfo={props.info.date} />
        </li>
        <li className="text-capitalize">{props.info.description}</li>
      </ul>
      <div className="row">
        <div className="col-8">
          <div className="row">
            <div className="col-3">
              <Icon imageCode={props.info.icon} height="150" />
            </div>
            <div className="col-9 mt-5">
              <CurrentTemperature celsiusTemperature={props.info.temperature} />
            </div>
          </div>
        </div>
        <div className="col-4 humidity">
          <ul>
            <li>Humidity: {props.info.humidity}%</li>
            <li>Wind: {Math.round(props.info.wind)}km/h</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
