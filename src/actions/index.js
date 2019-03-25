import {GET_FORECAST, FORECAST_FETCH_FAIL, FORECAST_FETCH_SUCCESS} from './types';

export const getWeather = (keyword)=>({
      type:GET_FORECAST,
      payload:keyword
});