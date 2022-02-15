import express from 'express'
import { generateJwtToken } from '@/model/jwt'

const index = async (req: express.Request, res: express.Response) => {
  await generateJwtToken(req).then((token) => {
    res.cookie('token', token, { httpOnly: true })
    res.json({
      success: true,
      token: token,
    })
  })
}

export default { index }
