import React from "react";
import { Col } from "reactstrap";
import WeatherIcon from "../WeatherIcon";
export default function CityWeekDayForecast(props) {
  const day = props.day.day;
  const maxTemp = props.day.maxTemp;
  const minTemp = props.day.minTemp;
  const date = props.day.date;
  const weather = props.day.weather;

  const celsius = "℃";

  return (
    <Col className="text-center">
      <div className="h1">
        <WeatherIcon weather={weather} />
      </div>
      <h6 className="my-2" title={date}>
        {day}
      </h6>
      <div className="d-flex justify-content-around my-2 text-primary">
        <span>
          {minTemp}
          {celsius}
        </span>
        <span>
          {maxTemp}
          {celsius}
        </span>
      </div>
    </Col>
  );
}
