import { request } from './http'


export function login(user) {
  return request({
    url: 'login',
    method: 'post',
    data: user
  })
}
