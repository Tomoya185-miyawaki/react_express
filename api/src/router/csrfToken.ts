import express from 'express'
import csrfTokenController from '@/controller/csrfTokenController'

const router = express.Router()

router.get('/', csrfTokenController.getToken)

export default router
