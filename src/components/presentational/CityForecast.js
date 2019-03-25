import React from 'react'
import { Container, Row, Col } from 'reactstrap';
import ForecastDay from './ForecastDay';
function groupHoursToDays(arr){
  let i,j, tempArr;
  let result=[];
  const chunk = 8;
  for (i=0,j=arr.length; i<j; i+=chunk) {
    tempArr = arr.slice(i,i+chunk);
    result.push(tempArr);
  }
  return result;
}


export default function CityForecast(props) {
  const {city: {name}, list} = props.forecast;
  const days = groupHoursToDays(list);
  // console.log(days);

  return (
    <Container>
      <Row>
        <h3>{name}</h3>
      </Row>
      {days.map(day=>(
        <ForecastDay day={day}/>
      ))}
     Component 
    </Container>
  )
}
