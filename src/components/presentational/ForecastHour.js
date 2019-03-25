import React from 'react'

export default function ForecastHour(props) {
  console.log(props);
  const {dt_txt} = props.hour;
  // , clouds, main:{temp, pressure}, weather:{main}
  return (
       <ul>
         <li>{dt_txt}</li>
        {/* <li><b>{dx_txt}</b></li>
        <li>Clouds:<b>{clouds}</b></li>
        <li>Temperature:<b>{temp}</b></li>
        <li>Pressure:<b>{pressure}</b></li> */}
      </ul>
  )
}
