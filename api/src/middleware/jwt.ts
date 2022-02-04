import jwt from 'jsonwebtoken'
import { findAdminById } from '../repository/admin'
import 'dotenv/config'

const registerAdminJwtToken = async () => {
  const admin = await findAdminById(1)
  if (admin === null) {
    throw new Error('not found admin')
  }
  const payload = {
    name: admin.name,
    email: admin.email,
  }
  const secretKey = process.env.SECRET_KEY
  if (secretKey === undefined) {
    throw new Error('not found secret key')
  }
  return jwt.sign(payload, secretKey)
}

export { registerAdminJwtToken }
