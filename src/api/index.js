import http from './http'

const API_BASE = '/api'

export default {
  login () {
    return http.post(`${API_BASE}/login`)
  },
  create(option) {
    return http.post(`${API_BASE}/camp`, option)
  },
  getCampList(params) {
    return http.get(`${API_BASE}/camps`, {params})
  },
  getCampDetail(id) {
    return http.get(`${API_BASE}/camps/${id}`, {})
  }
}
