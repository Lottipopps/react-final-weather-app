import React, { useState } from "react";
import axios from "axios";
import "./Weather.css";
import CurrentWeather from "./CurrentWeather";
import WeatherForecast from "./WeatherForecast";

export default function Weather(props) {
  const [weatherInfo, setWeatherInfo] = useState({ ready: false });
  const [city, setCity] = useState(props.standardCity);

  function handleResponse(response) {
    console.log(response.data);
    setWeatherInfo({
      ready: true,
      name: response.data.name,
      temperature: response.data.main.temp,
      date: new Date(response.data.dt * 1000),
      description: response.data.weather[0].description,
      icon: response.data.weather[0].icon,
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
    });
  }
  function search() {
    const apiKey = "1afc58971b81cc6c28c8a2b54f06eeb8";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
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
        <form onSubmit={handleSubmit}>
          <div className="row">
            <div className="col-10">
              <input
                type="search"
                placeholder="Type a city here..."
                className="form-control"
                autoFocus="on"
                onChange={updateCity}
              ></input>
            </div>
            <div className="col-2">
              <input type="submit" value="Search" className="btn btn-success" />
            </div>
          </div>
        </form>
        <CurrentWeather info={weatherInfo} />
        <WeatherForecast />
      </div>
    );
  } else {
    search(city);
    return <h1>Loading...</h1>;
  }
}
