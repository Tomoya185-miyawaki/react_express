import express from 'express'
import statusCode from '@/config/statusCode'
import abstractValidator from '@/middleware/validation/abstract'

export default class loginValidationMiddleware extends abstractValidator {
  response(req: express.Request, res: express.Response) {
    res.status(statusCode.BadRequest).json({
      success: false,
      message: this.result(req).mapped(),
    })
  }
  isValid(req: express.Request) {
    return this.result(req).isEmpty()
  }
}
