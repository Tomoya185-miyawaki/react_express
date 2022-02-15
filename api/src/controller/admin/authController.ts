import express from 'express'
import statusCode from '@/config/statusCode'
import loginValidationMiddleware from '@/middleware/validation/login'
import { generateJwtToken } from '@/model/jwt'

const login = async (req: express.Request, res: express.Response) => {
  const loginValidator = new loginValidationMiddleware()
  if (!loginValidator.isValid(req)) {
    return loginValidator.response(req, res)
  }
  await generateJwtToken(req)
    .then((token) => {
      res.cookie('token', token, { httpOnly: true })
      res.json({
        success: true,
        message: '認証に成功しました',
      })
    })
    .catch(() => {
      res.status(statusCode.Unauthorized).json({
        success: false,
        message: '認証に失敗しました',
      })
    })
}

export default { login }
