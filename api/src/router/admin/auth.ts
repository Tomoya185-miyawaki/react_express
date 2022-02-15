import express from 'express'
import { loginValidator } from '@/model/validation/auth'
import authController from '@/controller/admin/authController'

const router = express.Router()

router.post('/login', loginValidator, authController.login)

export default router
