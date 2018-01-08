import axios from 'axios'

export function getHome() {
  return axios.get('/api/homepage')
}
export function getSelect() {
  return axios.get('/api/selectpage')
}
