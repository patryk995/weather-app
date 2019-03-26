
import { put, takeEvery, all, call, takeLatest } from 'redux-saga/effects'
import { responseDataMock } from './mocks'
const API_KEY = "f5a5bcb43526c5d84c9d95e5b0d3cc69";
function* loadMock() {
  console.log(responseDataMock);
  // sort list of hours into days
  const sortedDays = splitToDays(responseDataMock.list);
  // create city object for storage with needed data only
  const cityObj= {
    name: responseDataMock.city.name,
    id: responseDataMock.city.id,
    days: sortedDays,
  }
  yield put({ type: "FORECAST_FETCH_SUCCESS", payload: cityObj});
}

function* fetchWeather(action) {
  // console.log("Fetch Started!")
  const city = action.payload;
  const responseData = yield fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&APPID=${API_KEY}&units=metric&lang=lt`).then(responseData => responseData.json());
  console.log(responseData);
  // create 
  
  put({ type: "FORECAST_FETCH_SUCCESS", payload: responseData});
  
  // console.log("Fetch Finished!")

}

const splitToDays = (arr) => {
  let i=0, output = [], currArr = [];
  // set of codes of weather will be used to combine day icon
  var weatherSet= new Set();
  
  arr.forEach(element => {
    weatherSet.add(element.weather[0].main)
    // take hour to know when next day begins AND date to find day of a week
    const [date, hour] = element.dt_txt.split(" ");
    currArr.push(element);
    i++;
    if (i === arr.length || hour ==="21:00:00") {
      // Setting string day of week
      var dayOfWeek = new Date(date).getDay();
      const dayOfWeekString = ['Sekmadienis', 'Pirmadienis', 'Antradienis', 'Trečiadienis', 'Ketvirtadienis', 'Penktadienis', 'Šeštadienis'][dayOfWeek];
      // Finding max&min temperature and rounding it
      const maxDayTemp = Math.round(Math.max.apply(Math, currArr.map((hour)=>  hour.main.temp_max )));
      const minDayTemp = Math.round(Math.min.apply(Math, currArr.map((hour)=>  hour.main.temp_max )));
      // remove year from date
      const dateMD= date.slice(5);
      // converting set into array for storing
      const weatherSetFinal = [...weatherSet]
      console.log(weatherSetFinal)
      // create object of day with all data
      const dayObject ={
        date: dateMD,
        day: dayOfWeekString,
        maxTemp: maxDayTemp,
        minTemp: minDayTemp,
        weatherSet: weatherSetFinal,
        hours: currArr,
      }

      output.push(dayObject);
      currArr = [];
      weatherSet.clear();
      }
  });
   return output;
}



function* watchGetWeather() {
     yield takeLatest('GET_FORECAST', fetchWeather)
}

export default function* sagas() {
  yield all([
    loadMock(),
    watchGetWeather()
  ])
}