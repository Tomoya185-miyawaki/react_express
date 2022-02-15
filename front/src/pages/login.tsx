import { useState } from 'react'
import { fetchJwt } from '../api/jwt'

function Login() {
  const storedJwt = localStorage.getItem('token')
  const [jwtToken, setJwtToken] = useState<string | null>(storedJwt || null)

  const login = fetchJwt()
    .then((jwt) => {
      setJwtToken(jwt.data.token)
    })
    .catch((error) => {
      console.error(error)
    })
  return (
    <div>
      <form>
        <div>
          <input type="email" name="email" />
        </div>
        <div>
          <input type="password" name="password" />
        </div>
        <div>
          <input type="submit" value="ログイン" onClick={() => login} />
        </div>
      </form>
    </div>
  )
}

export default Login
