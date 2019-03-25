import React from 'react'
import ForecastHour from './ForecastHour';
export default function ForecastDay(props) {
  console.log(props);
  return (
    <div>
      {
        props.day.map(hour=>(
          <ForecastHour hour={hour}/>
        ))

      }
    </div>
  )
}
