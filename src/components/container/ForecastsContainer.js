import React, { Component } from 'react'
import {connect} from 'react-redux';
import CityForecast from '../presentational/CityForecast';

export class ForecastsContainer extends Component {
  render() {
    const { loading, forecastsArr } = this.props;
    
    if( loading ){
      return(
        <h3>Loading...</h3>
      )
    }
    if( forecastsArr.length!==0 ){
      return(
        <div>
        {forecastsArr.map(forecast=>(
        <CityForecast key={forecast.city.id} forecast={forecast} />
          ))
        }
        </div>
      )
    }
    return (
      <div>
        Empty
      </div>
    )
  }
}
const mapStateToProps = state =>({
  loading: state.loading,
  forecastsArr: state.forecastsArr
})

export default connect(mapStateToProps, null)(ForecastsContainer);
