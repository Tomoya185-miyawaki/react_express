import express from 'express'
import jwtController from '@/controller/jwtController'

const router = express.Router()

router.get('/', jwtController.index)

export default router
