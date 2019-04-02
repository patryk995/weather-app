import React, { Component } from "react";
import { InputGroup } from "reactstrap";
import { connect } from "react-redux";

import MainInput from "../presentational/header/MainInput";
import SubmitBtn from "../presentational/header/SubmitBtn";

import { getWeather, getCurrentWeather } from "../../actions/forecastActions";

export class MainInputContainer extends Component {
  state = {
    value: ""
  };

  handleChange = ev => {
    this.setState({ value: ev.target.value });
  };

  handleKeyPress = e => {
    if (e.key === "Enter") {
      this.onSubmit();
    }
  };

  onSubmit = () => {
    if (this.state.value !== "") {
      this.props.getWeather(this.state.value);
    }
  };
  onCurrentWeatherSubmit = () => {
    if (this.state.value !== "") {
      this.props.getCurrentWeather(this.state.value);
    }
  };
  render() {
    return (
      <InputGroup className="py-5">
        <MainInput
          value={this.state.value}
          handleChange={this.handleChange}
          onKeyPress={this.handleKeyPress}
        />
        <SubmitBtn
          text="Orai Dabar"
          color="secondary"
          onSubmit={this.onCurrentWeatherSubmit}
        />
        <SubmitBtn
          text={"5 Dienų Progrnozė"}
          color="primary"
          onSubmit={this.onSubmit}
        />
      </InputGroup>
    );
  }
}

export default connect(
  null,
  { getWeather, getCurrentWeather }
)(MainInputContainer);
