import { body } from 'express-validator'
import { EMAIL_ERROR_MESSAGE, PASSWORD_ERROR_MESSAGE } from '@/config/errorMessage'

const loginValidator = [
  body('email')
    .not()
    .isEmpty()
    .withMessage(EMAIL_ERROR_MESSAGE.IsEmpty)
    .isLength({ max: 255 })
    .withMessage(EMAIL_ERROR_MESSAGE.Max)
    .isEmail()
    .withMessage(EMAIL_ERROR_MESSAGE.IsEmail),
  body('password')
    .not()
    .isEmpty()
    .withMessage(PASSWORD_ERROR_MESSAGE.IsEmpty)
    .isLength({ max: 255 })
    .withMessage(PASSWORD_ERROR_MESSAGE.Max),
]

export { loginValidator }
