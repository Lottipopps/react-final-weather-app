import React, { useState } from "react";
import axios from "axios";
import "./Weather.css";
import Date from "./Date";

export default function Weather(props) {
  const [weatherInfo, setWeatherInfo] = useState({ ready: false });
  let city = props.standardCity;

  function handleResponse(response) {
    console.log(response.data);
    setWeatherInfo({
      ready: true,
      temperature: response.data.main.temp,
      date: new Date(response.data.dt * 1000),
      description: response.data.weather.description,
      icon: response.data.weather.icon,
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
    });
    console.log(weatherInfo.date);
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
          <li>
            <Date dateInfo={weatherInfo.date} />
          </li>
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
    const apiKey = "1afc58971b81cc6c28c8a2b54f06eeb8";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
    return <h1>Loading...</h1>;
  }
}
