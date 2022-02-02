import axios from 'axios'

const client = axios.create({
  baseURL: process.env.REACT_APP_API_ENDPOINT,
  headers: {
    'Content-Type': 'application/json',
  },
})

const token = localStorage.getItem('token')
if (token) {
  client.defaults.headers.common.authorization = `Bearer ${token}`
}

export default client
