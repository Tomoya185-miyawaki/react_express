import express from 'express'
import { registerAdminJwtToken } from '../middleware/jwt'

const index = async (req: express.Request, res: express.Response) => {
  const token = await registerAdminJwtToken()
  res.json({
    success: true,
    token: token,
  })
}

export default { index }
