import React, { useState } from "react";
import FormattedDate from "./FormattedDate";
import Icon from "./Icon";

export default function CurrentWeather(props) {
  return (
    <div className="CurrentWeather">
      <h1>{props.info.name}</h1>
      <ul>
        <li>
          <FormattedDate dateInfo={props.info.date} />
        </li>
        <li className="text-capitalize">{props.info.description}</li>
      </ul>
      <div className="row">
        <div className="col-6">
          <Icon imageCode={props.info.icon} />
          <span className="temperature">
            {Math.round(props.info.temperature)}
          </span>
          <span className="unit">°C</span>
        </div>
        <div className="col-6">
          <ul>
            <li>Humidity: {props.info.humidity}%</li>
            <li>Wind: {Math.round(props.info.wind)}km/h</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
