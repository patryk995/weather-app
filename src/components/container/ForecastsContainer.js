import React, { Component } from 'react'
import {connect} from 'react-redux';
import {Container, Row} from 'reactstrap';
import CityForecast from '../presentational/CityForecast';
import LoadingSpinner from '../presentational/LoadingSpinner';
import {saveCity, deleteCity} from '../../actions/forecastActions'
export class ForecastsContainer extends Component {
  onSave = () =>{
    this.props.saveCity()
  }
  onDelete =(id)=>{
    console.log(`In Component City ID: ${id}`)
    this.props.deleteCity(id)
  }
  render() {
    const { loading,citiesArr, loaded, city } = this.props;
      return(
        <Container>
          {
            loading?
            <LoadingSpinner/>
            :
            loaded?
            <CityForecast 
              key={city.id} 
              id={city.id}
              name={city.name}
              days = {city.days}
              saved={false}
              onSave={this.onSave}
              />
            :
            <p className="text-center py-5">Įveskite miesto pavadinimą į paieškos laukelį.</p>
          }

        <Row className="my-3 p-2" style={{borderBottom:'1px solid'}}>
          <h2>Išsaugotos Prognozės</h2>
        </Row>
        
        {
          citiesArr.length>0?
          <Row>
            {
              citiesArr.map(city=>(
                <CityForecast 
                key={city.id}
                id={city.id}
                name={city.name}
                days = {city.days}
                saved={true}
                onDelete={this.onDelete}
                />
                ))
            }
          </Row>
          :
          <div>
            <p className="text-center py-5">Nėra išsaugotų orų prognozių.</p>
          </div>
        }
        
        </Container>
      )
    }
}
const mapStateToProps = state =>({
  city: state.city,
  loading: state.loading,
  loaded: state.loaded,
  citiesArr: state.citiesArr
})

export default connect(mapStateToProps, {saveCity, deleteCity})(ForecastsContainer);
