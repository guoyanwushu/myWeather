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
/* 城市搜索 */
export function citySearch (location) {
  return axios.get(`https://search.heweather.net/find`, {
    params: {
      location,
      group: 'cn'
    }
  })
}
/* 热门城市搜索 */
export function hotCitySearch () {
  return axios.get('https://search.heweather.net/top', {
    params: {
      group: 'cn'
    }
  })
}
