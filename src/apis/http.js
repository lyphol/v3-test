import axios from 'axios'

axios.defaults = {
  withCredentials: true,
  timeout: 20 * 1000,
}
axios.interceptors.request.use(
  (config) => {
    return config
  },
  (err) => {
    return Promise.reject(err)
  }
)
export default axios
