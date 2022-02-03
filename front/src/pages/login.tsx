import { useState, useEffect } from 'react'
import { fetchJwt } from '../api/jwt'

function Login() {
  const storedJwt = localStorage.getItem('token')
  const [jwtToken, setJwtToken] = useState<string | null>(storedJwt || null)

  useEffect(() => {
    fetchJwt()
      .then((jwt) => {
        localStorage.setItem('token', jwt.data.token)
        setJwtToken(jwt.data.token)
      })
      .catch((error) => {
        console.error(error)
      })
  }, [])

  return (
    <>
      <h1>Login</h1>
      {jwtToken && (
        <pre>
          <code>{jwtToken}</code>
        </pre>
      )}
    </>
  )
}

export default Login
