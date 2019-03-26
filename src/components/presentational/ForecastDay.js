import React from 'react'
import {Col} from 'reactstrap';
export default function ForecastDay(props) {
  const day = props.day.day;
  const maxTemp = props.day.maxTemp;
  const minTemp = props.day.minTemp;
  const date = props.day.date;

  const celsius = '℃';

  // Styles
  const weatherColStyle ={
    textAlign:'center'
  }
  const weatherIconStyle ={
    fontSize: '2em',
    marginBottom: '14px'
  }

  return (
    <Col style={weatherColStyle}>
      <div>
        <i className="wi wi-night-sleet" style={weatherIconStyle}></i>
      </div>
      <h5>{day}</h5>
      <div className="d-flex justify-content-around my-2">
        <span>{minTemp}{celsius}</span>
        <span>{maxTemp}{celsius}</span>
      </div>
      <h6>{date}</h6>
    </Col>
  )
}
