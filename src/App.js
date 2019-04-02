import regeneratorRuntime from "regenerator-runtime";
import React, { Component } from "react";
import { Provider } from "react-redux";
import configureStore from "./store";
import { Container } from "reactstrap";

import MainInputContainer from "./components/container/MainInputContainer";
import ForecastContainer from "./components/container/ForecastContainer";
import SavedForecastsContainer from "./components/container/SavedForecastsContainer";

const store = configureStore();

export class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Container>
          <MainInputContainer />
          <Container>
            <ForecastContainer />
            <SavedForecastsContainer />
          </Container>
        </Container>
      </Provider>
    );
  }
}

export default App;
