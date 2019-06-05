import axios from './interceptor.js'
export function getWeatherNow (location) {
  return axios.get('https://free-api.heweather.net/s6/weather/now', {
    params: {
      location
    }
  })
}
