import React, { Component } from "react";
import { connect } from "react-redux";
import { Container, Row } from "reactstrap";

import CityWeekForecast from "../presentational/weekForecast/CityWeekForecast";
import EmptySavedList from "../presentational/EmptySavedList";
import CityWeatherNow from "../presentational/CityWeatherNow";

import { deleteCity } from "../../actions/forecastActions";

export class SavedForecastsContainer extends Component {
  onDelete = id => {
    this.props.deleteCity(id);
  };

  render() {
    const { citiesArr } = this.props;

    return (
      <>
        <Row className="my-3 p-2" style={{ borderBottom: "1px solid" }}>
          <h2>Išsaugotos Prognozės</h2>
        </Row>

        {citiesArr.length > 0 ? (
          <Row>
            {citiesArr.map(city =>
              city.type === "5day" ? (
                <CityWeekForecast
                  key={city.id}
                  id={city.id}
                  name={city.name}
                  days={city.days}
                  saved={true}
                  onDelete={this.onDelete}
                />
              ) : (
                <CityWeatherNow
                  key={city.id}
                  city={city}
                  saved={false}
                  onSave={this.onSave}
                  saved={true}
                  onDelete={this.onDelete}
                />
              )
            )}
          </Row>
        ) : (
          <EmptySavedList />
        )}
      </>
    );
  }
}

const mapStateToProps = state => ({
  citiesArr: state.citiesArr
});

export default connect(
  mapStateToProps,
  { deleteCity }
)(SavedForecastsContainer);
