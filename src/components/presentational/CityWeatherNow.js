import React from "react";
import { Container, Row, Button, Col } from "reactstrap";
import WeatherIcon from "./WeatherIcon";

export default function CityWeatherNow({
  city: { name, id, temp, weather, weatherDescription },
  onSave,
  saved,
  onDelete
}) {
  const celsius = "℃";

  return (
    <Container className="px-5 py-4 my-3">
      <Row className="justify-content-between">
        <h2 className="h1 text-primary">{name}</h2>

        <div className="d-flex-column my-auto text-primary text-center">
          <div className="h1">
            <WeatherIcon weather={weather} />
          </div>
          <span>{weatherDescription}</span>
        </div>

        <div className="d-flex-column my-auto text-primary text-center">
          <div className="h1">
            <i className="wi wi-thermometer text-primary" />
          </div>

          <span>
            {temp}
            {celsius}
          </span>
        </div>

        <div className="my-auto">
          {saved ? (
            <div>
              <Button outline size="sm" color="primary" className="mx-1">
                Atnaujinti
              </Button>

              <Button
                outline
                size="sm"
                color="secondary"
                className="mx-1"
                onClick={() => onDelete(id)}
              >
                Pašalinti
              </Button>
            </div>
          ) : (
            <Button
              outline
              size="sm"
              className="mx-1"
              color="primary"
              onClick={onSave}
            >
              Išsaugoti
            </Button>
          )}
        </div>
      </Row>
    </Container>
  );
}
