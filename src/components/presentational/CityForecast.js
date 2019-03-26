import React from 'react'
import { Container, Row, Col } from 'reactstrap';
import ForecastDay from './ForecastDay';
import uuid from 'uuid';

export default function CityForecast({name, days}) {
  return (
    <Container>
      <Row>
        <h3>{name}</h3>
      </Row>
      <Row>
        {days.map(day=>(
          <ForecastDay key={uuid()} day={day}/>
        ))}
      </Row>
    </Container>
  )
}
