import express from 'express'
import sampleController from '@/controller/sampleController'

const router = express.Router()

router.get('/', sampleController.index)

export default router
