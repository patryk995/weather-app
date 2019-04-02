import React, { Component } from "react";
import { connect } from "react-redux";
import { Container, Row } from "reactstrap";

import CityWeekForecast from "../presentational/weekForecast/CityWeekForecast";
import CityWeatherNow from "../presentational/CityWeatherNow";
import LoadingSpinner from "../presentational/LoadingSpinner";
import EmptySearch from "../presentational/EmptySearch";
import ErrorMessage from "../presentational/ErrorMessage";

import { saveCity } from "../../actions/forecastActions";

export class ForecastContainer extends Component {
  onSave = () => {
    this.props.saveCity();
  };

  render() {
    const { loading, loaded, city, error } = this.props;
    if (loading) {
      return <LoadingSpinner />;
    }
    if (error) {
      return <ErrorMessage />;
    }
    if (loaded) {
      if (city.type === "5day") {
        return (
          <CityWeekForecast
            key={city.id}
            id={city.id}
            name={city.name}
            days={city.days}
            saved={false}
            onSave={this.onSave}
          />
        );
      } else if (city.type === "today") {
        return (
          <CityWeatherNow city={city} saved={false} onSave={this.onSave} />
        );
      }
    }
    return <EmptySearch />;
  }
}

const mapStateToProps = state => ({
  city: state.city,
  loading: state.loading,
  loaded: state.loaded,
  error: state.error
});

export default connect(
  mapStateToProps,
  { saveCity }
)(ForecastContainer);
