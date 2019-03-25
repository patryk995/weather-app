import React, { Component } from 'react'
import {InputGroup} from 'reactstrap';
import {connect} from 'react-redux';

import MainInput from "../presentational/MainInput";
import MainSubmitBtn from '../presentational/MainSubmitBtn';

import {getWeather} from '../../actions';

export class MainInputContainer extends Component {
  state = {
    value: ""
  }

  handleChange= (ev) => {
    this.setState({value: ev.target.value});
  }
  
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

  render() {
    return (
      <InputGroup className="py-5">
        <MainInput
          value={this.state.value}
          handleChange={this.handleChange}
          onKeyPress = {this.handleKeyPress}
        />
        <MainSubmitBtn onSubmit={this.onSubmit} />
      </InputGroup>
    )
  }
}

export default connect(null, {getWeather})(MainInputContainer);
