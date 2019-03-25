
import { put, takeEvery, all, call, takeLatest } from 'redux-saga/effects'
const API_KEY = "f5a5bcb43526c5d84c9d95e5b0d3cc69";
export function* helloSaga() {
  yield console.log('Hello Sagas!')
}

function* fetchWeather(action) {
  console.log("Fetch Started!")
  const city = action.payload;
  const result = yield fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&APPID=${API_KEY}`).then(result => result.json());
  
  console.log(result);    
  yield put({ type: "FORECAST_FETCH_SUCCESS", payload: result});
  console.log("Fetch Finished!")

}

function* watchGetWeather() {
     yield takeLatest('GET_FORECAST', fetchWeather)
}

export default function* sagas() {
  yield all([
    helloSaga(),
    watchGetWeather()
  ])
}