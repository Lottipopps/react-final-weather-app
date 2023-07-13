import React, { useState } from "react";
import FormattedDate from "./FormattedDate";

export default function CurrentWeather(props) {
  return (
    <div className="CurrentWeather">
      <h1>{props.name}</h1>
      <ul>
        <li>
          <FormattedDate dateInfo={props.date} />
        </li>
        <li className="text-capitalize">{props.description}</li>
      </ul>
      <div className="row">
        <div className="col-6">
          <img
            src="https://cdn.dribbble.com/users/77598/screenshots/5602856/media/1e44f47cd47f97cd20e4d9fe42255a75.png"
            alt="temporary icon"
          />
          <span className="temperature">{Math.round(props.temperature)}</span>
          <span className="unit">°C</span>
        </div>
        <div className="col-6">
          <ul>
            <li>Humidity: {props.humidity}%</li>
            <li>Wind: {Math.round(props.wind)}km/h</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
