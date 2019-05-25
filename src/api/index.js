import $http from './http.js'

const API_BASE = 'http://localhost:3000/api'
export default {
  login () {
    return $http.post(`${API_BASE}/login`)
  },
  create(option) {
    return $http.post(`${API_BASE}/camp`,option)
  }
}
