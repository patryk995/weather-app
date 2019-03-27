import React from 'react'
import {Col} from 'reactstrap';
export default function ForecastDay(props) {

  const day = props.day.day;
  const maxTemp = props.day.maxTemp;
  const minTemp = props.day.minTemp;
  const date = props.day.date;
  const weather = props.day.weather;

  const celsius = '℃';
  
  // icon by weather string
  const weatherIcon = 
  weather==="Clear"?"wi-day-sunny":
  weather==="Snow"?"wi-day-snow-wind":
  weather==="Rain"?"wi-day-rain":
  weather==="Clouds"?"wi-day-cloudy":
  "wi-day-sunny";
  return (
    <Col className="text-center">
      <div className="h1">
        <i className={`text-primary wi ${weatherIcon}`}></i>
      </div>
      <h6 className="my-2" title={date}>{day}</h6>
      <div className="d-flex justify-content-around my-2 text-primary">
        <span>{minTemp}{celsius}</span>
        <span>{maxTemp}{celsius}</span>
      </div>
    </Col>
  )
}
