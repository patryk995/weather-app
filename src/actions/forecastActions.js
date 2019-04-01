import {GET_FORECAST, 
      FORECAST_FETCH_FAIL, 
      FORECAST_FETCH_SUCCESS, 
      SAVE_CITY_FORECAST, 
      DELETE_CITY_FORECAST
} from './types';

export const getWeather = (keyword)=>({
      type:GET_FORECAST,
      payload:keyword
});

export const saveCity = () =>({
      type: SAVE_CITY_FORECAST
})
export const deleteCity = (id) =>({
      type: DELETE_CITY_FORECAST,
      payload: id
})