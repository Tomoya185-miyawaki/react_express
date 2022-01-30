import axios from 'axios'

axios.create({
  baseURL: process.env.REACT_APP_API_ENDPOINT,
  headers: {
    'Content-Type': 'application/json',
  },
})

const token = localStorage.getItem('token')
if (token) {
  axios.defaults.headers.common.authorization = `Bearer ${token}`
}

export default axios
