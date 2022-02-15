import axios from 'axios'

interface Csrf {
  csrfToken: string
}

const client = axios.create({
  baseURL: process.env.REACT_APP_API_ENDPOINT,
  headers: {
    'Content-Type': 'application/json',
  },
  withCredentials: true,
})

// client.interceptors.request.use((config) => {
//   client.get<Csrf>('/api/csrf-token').then((res) => {
//     if (config.headers && res.data.csrfToken) {
//       config.headers['X-CSRF-Token'] = res.data.csrfToken
//     }
//   })
// })

export default client
