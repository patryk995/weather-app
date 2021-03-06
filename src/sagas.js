import { put, takeEvery, all, call, takeLatest } from "redux-saga/effects";
import { responseDataMock } from "./mocks";
const API_KEY = "f5a5bcb43526c5d84c9d95e5b0d3cc69";
function* loadMock() {
  // console.log(responseDataMock);
  // sort list of hours into days
  const sortedDays = splitToDays(responseDataMock.list);
  // create city object for storage with needed data only
  const cityObj = {
    name: responseDataMock.city.name,
    id: responseDataMock.city.id,
    days: sortedDays
  };
  yield put({ type: "FORECAST_FETCH_SUCCESS", payload: cityObj });
}

function* fetchWeather(action) {
  const city = action.payload;
  const responseData = yield fetch(
    `https://api.openweathermap.org/data/2.5/forecast?q=${city}&APPID=${API_KEY}&units=metric&lang=lt`
  ).then(responseData => responseData.json());
  // sort list of hours into days
  const sortedDays = splitToDays(responseData.list);
  // create city object for storage with needed data only
  const cityObj = {
    type: "5day",
    name: responseData.city.name,
    id: responseData.city.id,
    days: sortedDays
  };
  yield put({ type: "FORECAST_FETCH_SUCCESS", payload: cityObj });
}

const splitToDays = arr => {
  let i = 0,
    output = [],
    currArr = [];
  // weathers that appear during day
  let weatherList = [];

  arr.forEach(element => {
    // take hour to know when next day begins AND date to find day of a week
    const [date, hour] = element.dt_txt.split(" ");
    weatherList.push(element.weather[0].main);
    currArr.push(element);
    i++;
    if (i === arr.length || hour === "21:00:00") {
      // Setting string day of week
      var dayOfWeek = new Date(date).getDay();
      const dayOfWeekString = [
        "Sekmadienis",
        "Pirmadienis",
        "Antradienis",
        "Trečiadienis",
        "Ketvirtadienis",
        "Penktadienis",
        "Šeštadienis"
      ][dayOfWeek];
      // Finding max&min temperature and rounding it
      const maxDayTemp = Math.round(
        Math.max.apply(Math, currArr.map(hour => hour.main.temp_max))
      );
      const minDayTemp = Math.round(
        Math.min.apply(Math, currArr.map(hour => hour.main.temp_max))
      );
      // remove year from date
      const dateMD = date.slice(5);
      // converting set into array for storing
      const weatherFinal = findMostFrequentWeather(weatherList);
      // create object of day with all data
      const dayObject = {
        date: dateMD,
        day: dayOfWeekString,
        maxTemp: maxDayTemp,
        minTemp: minDayTemp,
        weather: weatherFinal,
        hours: currArr
      };

      output.push(dayObject);
      currArr = [];
      weatherList = [];
    }
  });
  return output;
};
function findMostFrequentWeather(arr) {
  return arr
    .sort(
      (a, b) =>
        arr.filter(v => v === a).length - arr.filter(v => v === b).length
    )
    .pop();
}

function* fetchCurrentWeather(action) {
  const city = action.payload;
  const responseData = yield fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=${API_KEY}&units=metric&lang=lt`
  ).then(responseData => responseData.json());
  // create city object for storage with needed data only
  const cityObj = {
    type: "today",
    name: responseData.name,
    id: responseData.id,
    weather: responseData.weather[0].main,
    weatherDescription: responseData.weather[0].description,
    temp: responseData.main.temp
  };
  yield put({ type: "FORECAST_FETCH_SUCCESS", payload: cityObj });
}

function* watchGetWeather() {
  yield takeLatest("GET_FORECAST", fetchWeather);
}

function* watchGetCurrentWeather() {
  yield takeLatest("GET_CURRENT_WEATHER", fetchCurrentWeather);
}

export default function* sagas() {
  yield all([watchGetWeather(), watchGetCurrentWeather()]);
}
