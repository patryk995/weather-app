import {GET_FORECAST, FORECAST_FETCH_SUCCESS, FORECAST_FETCH_FAIL} from '../actions/types'

const initialState={
  loading: false,
  citiesArr:[]
}
export default function(state = initialState, action) {
  switch (action.type) {
    case GET_FORECAST:
      return {
        ...state,
        loading: true
      }
    case FORECAST_FETCH_FAIL:
      return {
        ...state,
        loading: false,
        error:true
      }
    case FORECAST_FETCH_SUCCESS:
      return {
        ...state,
        loading:false,
        citiesArr: [...state.citiesArr, action.payload]
    }
    default:
      return state
  }
}
