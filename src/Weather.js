import React, { useState } from "react";
import axios from "axios";
import "./Weather.css";
import CurrentWeather from "./CurrentWeather";
import WeatherForecast from "./WeatherForecast";

export default function Weather(props) {
  const [weatherInfo, setWeatherInfo] = useState({ ready: false });
  const [city, setCity] = useState(props.standardCity);

  function handleResponse(response) {
    setWeatherInfo({
      ready: true,
      name: response.data.city,
      country: response.data.country,
      temperature: response.data.temperature.current,
      date: new Date(response.data.time * 1000),
      description: response.data.condition.description,
      icon: response.data.condition.icon,
      humidity: response.data.temperature.humidity,
      wind: response.data.wind.speed,
      coord: response.data.coordinates,
    });
  }
  function search() {
    const apiKey = "58e244e95c3e78eb13e0ffotadf7c1b8";
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
  }
  function handleSubmit(event) {
    event.preventDefault();
    search(city);
  }

  function updateCity(event) {
    setCity(event.target.value);
  }
  if (weatherInfo.ready) {
    return (
      <div className="Weather">
        <form id="city-form" onSubmit={handleSubmit}>
          <div className="row">
            <div className="col-10">
              <input
                id="search-bar"
                type="search"
                placeholder="Type a city here..."
                className="form-control"
                autoFocus="on"
                onChange={updateCity}
              ></input>
            </div>
            <div className="col-2">
              <input
                id="submit-button"
                type="submit"
                value="Search"
                className="btn btn-success"
              />
            </div>
          </div>
        </form>
        <CurrentWeather info={weatherInfo} />
        <WeatherForecast coordinates={weatherInfo.coord} />
      </div>
    );
  } else {
    search(city);
    return <h1>Loading...</h1>;
  }
}
