import express from 'express'
import adminUsersJson from '../data/adminUser.json'
import { adminJwtPayload } from '../interface/admin'
import jwt from 'jsonwebtoken'
import 'dotenv/config'

const index = (req: express.Request, res: express.Response) => {
  const admin: adminJwtPayload = adminUsersJson[0]
  const payload = {
    name: admin.name,
    email: admin.email,
  }
  const secretKey = process.env.SECRET_KEY
  if (secretKey === undefined) {
    throw new Error('not found secret key')
  }
  const token = jwt.sign(payload, secretKey)
  res.json({
    success: true,
    token: token,
  })
}

export default { index }
