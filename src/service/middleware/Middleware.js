import { takeLatest, put, call, take } from 'redux-saga/effects';
import { fetchDataSuccess } from '../Actions';
import { fetchWeather } from '../api/AsyncAPI';
import { WEATHER_FORECAST_FETCH } from "../Types";


function* getAPIData(zipCode) {
    const data = yield call(fetchWeather, zipCode);
    yield put(fetchDataSuccess(data));
    saveResponseToStorage(data, zipCode)
}


export default function* rootSaga() {
    yield takeLatest(WEATHER_FORECAST_FETCH, getAPIData);
}
