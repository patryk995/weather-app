import {
  GET_FORECAST,
  SAVE_CITY_FORECAST,
  DELETE_CITY_FORECAST,
  GET_CURRENT_WEATHER
} from "./types";

export const getWeather = keyword => ({
  type: GET_FORECAST,
  payload: keyword
});

export const getCurrentWeather = keyword => ({
  type: GET_CURRENT_WEATHER,
  payload: keyword
});

export const saveCity = () => ({
  type: SAVE_CITY_FORECAST
});

export const deleteCity = id => ({
  type: DELETE_CITY_FORECAST,
  payload: id
});
