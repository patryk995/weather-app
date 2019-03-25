import regeneratorRuntime from "regenerator-runtime";
import React, { Component } from 'react'
import {Provider} from 'react-redux';
import configureStore from "./store";
import { Container } from 'reactstrap';

import MainInputContainer from './components/container/MainInputContainer';
import ForecastsContainer from './components/container/ForecastsContainer';
const store = configureStore();

export class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Container>
          <MainInputContainer/>
          <ForecastsContainer/>
        </Container>
      </Provider>
    )
  }
}

export default App
