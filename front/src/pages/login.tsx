import { useState, useEffect } from 'react'
import { fetchJwt } from '../api/jwt'
import { Sample } from '../interface/sample'

function Login() {
  const storedJwt = localStorage.getItem('token')
  const [jwt, setJwt] = useState<string | null>(storedJwt || null)

  useEffect(() => {
    fetchJwt()
      .then((token) => {
        localStorage.setItem('token', token.data)
        setJwt(token.data)
      })
      .catch((error) => {
        console.error(error)
      })
  }, [])

  return (
    <>
      <h1>Login</h1>
      {jwt && (
        <pre>
          <code>{jwt}</code>
        </pre>
      )}
    </>
  )
}

export default Login
