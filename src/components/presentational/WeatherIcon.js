import React from "react";

export default function WeatherIcon({ weather }) {
  console.log(weather);
  const weatherIcon =
    weather === "Clear"
      ? "wi-day-sunny"
      : weather === "Snow"
      ? "wi-day-snow-wind"
      : weather === "Rain"
      ? "wi-day-rain"
      : weather === "Clouds"
      ? "wi-day-cloudy"
      : "error";

  return (
    <div>
      <i className={`text-primary wi ${weatherIcon}`} />
    </div>
  );
}
