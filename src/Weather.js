import React, { useState } from "react";
import axios from "axios";

export default function Weather(props) {
  const [City, setCity] = useState("");
  const [loaded, setLoaded] = useState(false);
  const [forecast, setForecast] = useState({});

  function manageForecast(response) {
    setLoaded(true);
    setForecast({
      temperature: response.data.main.temp,
      description: response.data.weather[0].description,
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
      icon: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
    });
    console.log(response);
  }

  function handleSubmit(event) {
    event.preventDefault();

    let ApiKey = "38ebc1a0ff800caad49ff57942709fed ";
    let ApiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${City}&appid=${ApiKey}`;
    axios.get(ApiUrl).then(manageForecast);
    console.log(ApiUrl);
  }

  function searchEngine(event) {
    setCity(event.target.value);
  }

  let form = (
    <form className="Weather" onSubmit={handleSubmit}>
      <input
        type="search"
        placeholder="Enter a city.."
        onChange={searchEngine}
        required
      />
      <input type="submit" value="search" />
    </form>
  );

  if (loaded) {
    return (
      <div className="Weather">
        {form}
        <li>Temperature: {Math.round(forecast.temperature - 273.15)}°C </li>
        <li>Description: {forecast.description} </li>
        <li>Humidity: {forecast.humidity}% </li>
        <li>Wind: {forecast.wind}m/s </li>
        <li>
          <img src={forecast.icon} alt={forecast.description} />
        </li>
      </div>
    );
  } else {
    return form;
  }
}
