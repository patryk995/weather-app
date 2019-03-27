import React from 'react';
import { Container, Row, Button} from 'reactstrap';
import ForecastDay from './ForecastDay';
import uuid from 'uuid';
export default function CityForecast({name, id, days, saved, onSave, onDelete}) {
    console.log(`In CityForecast ID: ${id}`)
    return (
      <Container className="px-5 py-4 my-3">
      <Row className="justify-content-between pb-4">
        <h2 className="h1 text-primary">{name}</h2>
        <div className="my-auto">
          {
            saved ?            
              <div>
                <Button 
                  outline 
                  size="sm" 
                  color="primary" 
                  className="mx-1"
                  >
                  Atnaujinti
                </Button>
                
                <Button 
                  outline 
                  size="sm" 
                  color="secondary" 
                  className="mx-1"
                  onClick={()=>onDelete(id)}
                  >
                  Pašalinti
                </Button>
              </div>
            :
              <Button outline size="sm" className="mx-1" color="primary" onClick={onSave}>Išsaugoti</Button>
          }


        </div>
      </Row>
      <Row className="pt-2">
        {days.map(day=>(
          <ForecastDay key={uuid()} day={day}/>
          ))}
      </Row>
    </Container>
  )
}
