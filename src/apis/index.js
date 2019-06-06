import axios from './interceptor.js'
/* 实时天气 */
export function getWeatherDetail (location, weatherType = 'now') {
  return axios.get(`https://free-api.heweather.net/s6/weather/${weatherType}`, {
    params: {
      location
    }
  })
}
/* 降雨量 */
export function getRainInfo (location) {
  return axios.get(`https://api.heweather.net/s6/weather/grid-minute`, {
    params: {
      location
    }
  })
}
