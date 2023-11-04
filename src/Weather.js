import React from "react";
import "./Weather.css";

export default function Weather() {
  let weatherData = {
    city: "London",
    date: "Sun 22",
    time: "16:00",
    temperature: "3",
    description: "Cloudy",
    imgUrl: "https://ssl.gstatic.com/onebox/weather/64/sunny.png",
    humidity: "80",
    wind: "5"
  };
  return (
    <div className="Weather">
      <div className="container">
        <div>
          <form>
            <input type="text" placeholder="Search city" />
            <button type="submit" className="btn btn-light">
              Go
            </button>
            <button className="current-location-btn">
              <i class="fa-solid fa-location-dot"></i>
            </button>
          </form>
        </div>

        <h1>{weatherData.city}</h1>
        <div className="weatherIcon">
          <img src={weatherData.imgUrl} alt={weatherData.description} />
        </div>
        <h2>
          {weatherData.temperature}
          <span className="units">
            <a href="/" className="active">
              °C
            </a>{" "}
            |<a href="/">°F</a>
          </span>
        </h2>

        <div className="weather-info">
          <p>
            <strong>
              {weatherData.date} <br />
              {weatherData.time}
            </strong>
          </p>
          <p>
            Feels like: <span>2°C</span>
            <br />
            {weatherData.description}
            <br />
            <span>Humidity: {weatherData.humidity}%</span> <br />
            <span>Wind: {weatherData.wind}mph</span>
          </p>
        </div>
        <div className="weather-forecast"></div>
      </div>
      <small>
        <p>
          <a href="https://github.com/ellieforbes/Weather-App" target="_blank" rel="noreferrer">
            Open-source Code{" "}
          </a>
          by Ellie Forbes
        </p>
      </small>
    </div>
  );
}
