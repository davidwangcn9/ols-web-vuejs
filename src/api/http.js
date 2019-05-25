import axios from 'axios'
import storeBase from './../store/'

const http = axios.create({
  headers: {'X-Requested-Token': storeBase.state.user.token}
})

export default http
