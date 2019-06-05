import axios from 'axios'
/* 作拦截处理 */
axios.interceptors.request.use(function (config) {
  if (!config.params.key) {
    config.params.key = '67354c81c4f34e31b2384069dac3d3d9'
  }
  return config
}, function (error) {
  return Promise.reject(error)
})
axios.interceptors.response.use(function (res) {
  if (res.status === 200 && res.statusText === 'OK') {
    return res.data
  }
}, function (error) {
  return Promise.reject(error)
})
export default axios
