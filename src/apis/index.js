import axios from './interceptor.js'
/* 实时天气 */
export function getWeatherNow (location, weatherType = 'now') {
  return axios.get(`https://free-api.heweather.net/s6/weather/${weatherType}`, {
    params: {
      location
    }
  })
}
/* 生活指数 */
export function getLifeInfo () {

}
