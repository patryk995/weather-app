import React from 'react'

export default function ForecastHour(props) {
  const {dt_txt} = props.hours;
  const max_temp = props.hours.main.temp_max;


  // , clouds, main:{temp, pressure}, weather:{main}
  return (
         <li>{`${dt_txt} max temperature: ${max_temp}!`}</li>
  )
}
