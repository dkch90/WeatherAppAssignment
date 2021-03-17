import axios from 'axios'

export const fetchWeather = (zipValue) => {
  const url = `http://samples.openweathermap.org/data/2.5/forecast?zip=${zipValue}&appid=a36613676e64d664351d8abf4ac78985`;
  return axios.get(url);
};
