import express from 'express'
import jwt from 'jsonwebtoken'
import { validUser } from '@/model/auth'
import 'dotenv/config'

const generateJwtToken = async (req: express.Request) => {
  const admin = await validUser(req)
  const payload = {
    id: admin.id,
    email: admin.email,
    iat: new Date().getTime(),
  }
  const secretKey = process.env.JWT_SECRET_KEY
  const expiresIn = process.env.JWT_EXPIRES_IN
  if (secretKey === undefined || expiresIn === undefined) {
    throw new Error('not found key')
  }
  return jwt.sign(payload, secretKey, { expiresIn: expiresIn })
}

export { generateJwtToken }
