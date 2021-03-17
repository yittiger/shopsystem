import axios from 'axios'

export function request(config) {
  const instance = axios.create({
    baseURL: 'http://127.0.0.1:8888/api/private/v1/',
    timeout: 5000
  })

  instance.interceptors.request.use(config => {
    const token = window.sessionStorage.getItem('token')
    if (token) {
      config.headers['Authorization'] = token
    }
    // console.log(config)
    return config
  }, error => {
    console.log(error)
  })

  instance.interceptors.response.use(res => {
    return res.data
  }, err => {
    console.log(err)
  })

  return instance(config)
}
