import React, { Component } from 'react'
import {connect} from 'react-redux';
import CityForecast from '../presentational/CityForecast';

export class ForecastsContainer extends Component {
  render() {
    const { loading, citiesArr } = this.props;
    
    if( loading ){
      return(
        <h3>Kraunasi...</h3>
      )
    }
    if( citiesArr.length!==0 ){
      return(
        <div>
        {citiesArr.map(city=>(
        <CityForecast 
        key={city.id} 
        name={city.name}
        days = {city.days}
        />
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
  citiesArr: state.citiesArr
})

export default connect(mapStateToProps, null)(ForecastsContainer);
