import express from 'express'
import { validationResult, ValidationError } from 'express-validator'

export default class abstractValidator {
  result(req: express.Request) {
    const errorFormatter = ({ location, msg, param, value, nestedErrors }: ValidationError) => {
      return msg
    }
    return validationResult(req).formatWith(errorFormatter)
  }
}
