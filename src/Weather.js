import axios from "axios";
import React, { useState } from "react";
import "./Weather.css";

export default function Weather(props) {
  const [weatherInfo, setWeatherInfo] = useState({ ready: false });
  let city = props.standardCity;
  function handleResponse(response) {
    console.log(response.data);
    setWeatherInfo({
      ready: true,
      temperature: response.data.temperature.current,
      timestamp: response.data.time,
      description: response.data.condition.description,
      icon: response.data.condition.icon,
      humidity: response.data.temperature.humidity,
      wind: response.data.wind.speed,
    });
    setReady(true);
  }
  if (weatherInfo.ready) {
    return (
      <div className="Weather">
        <form>
          <div className="row">
            <div className="col-10">
              <input
                type="search"
                placeholder="Type a city here..."
                className="form-control"
                autoFocus
              ></input>
            </div>
            <div className="col-2">
              <input type="submit" value="Search" className="btn btn-success" />
            </div>
          </div>
        </form>
        <h1>{city}</h1>
        <ul>
          <li>Weekday hours:minutes</li>
          <li className="text-capitalize">{weatherInfo.description}</li>
        </ul>
        <div className="row">
          <div className="col-6">
            <img
              src="https://cdn.dribbble.com/users/77598/screenshots/5602856/media/1e44f47cd47f97cd20e4d9fe42255a75.png"
              alt="temporary icon"
            />
            <span className="temperature">
              {Math.round(weatherInfo.temperature)}
            </span>
            <span className="unit">°C</span>
          </div>
          <div className="col-6">
            <ul>
              <li>Humidity: {weatherInfo.humidity}%</li>
              <li>Wind: {Math.round(weatherInfo.wind)}km/h</li>
            </ul>
          </div>
        </div>
      </div>
    );
  } else {
    const apiKey = "58e244e95c3e78eb13e0ffotadf7c1b8";
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&unit=metric`;
    axios.get(apiUrl).then(handleResponse);
    return <h1>Loading...</h1>;
  }
}
