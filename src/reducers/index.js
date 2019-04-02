import {
  GET_FORECAST,
  GET_CURRENT_WEATHER,
  FORECAST_FETCH_SUCCESS,
  FORECAST_FETCH_FAIL,
  SAVE_CITY_FORECAST,
  DELETE_CITY_FORECAST
} from "../actions/types";

const initialState = {
  loading: false,
  loaded: false,
  city: null,
  citiesArr: []
};
export default function(state = initialState, action) {
  switch (action.type) {
    case GET_FORECAST:
    case GET_CURRENT_WEATHER:
      return {
        ...state,
        loading: true,
        loaded: false
      };
    case FORECAST_FETCH_FAIL:
      return {
        ...state,
        loading: false,
        error: true
      };
    case FORECAST_FETCH_SUCCESS:
      return {
        ...state,
        loading: false,
        loaded: true,
        city: action.payload
      };
    case SAVE_CITY_FORECAST:
      return {
        ...state,
        citiesArr: [state.city, ...state.citiesArr],
        loaded: false,
        city: null
      };
    case DELETE_CITY_FORECAST:
      console.log(action.payload);
      return {
        ...state,
        citiesArr: state.citiesArr.filter(city => {
          return city.id !== action.payload;
        })
      };
    default:
      return state;
  }
}
