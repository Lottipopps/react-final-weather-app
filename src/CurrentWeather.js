import React from "react";
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
            <div className="col-6">
              <div className="float-left">
                <Icon imageCode={props.info.icon} height="150" />
              </div>
            </div>
            <div className="col-6 mt-5">
              <div className="float-left">
                <CurrentTemperature
                  celsiusTemperature={props.info.temperature}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="col-4">
          <ul>
            <li>Humidity: {props.info.humidity}%</li>
            <li>Wind: {Math.round(props.info.wind)}km/h</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
