import express from 'express'
import logger from 'morgan'
import cookieParser from 'cookie-parser'
import 'dotenv/config'

import corsMiddleware from '@/middleware/cors'
import csrfMiddleware from '@/middleware/csrf'
import sampleRouter from '@/router/sample'
import jwtRouter from '@/router/jwt'
import csrfTokenRouter from '@/router/csrfToken'
import authRouter from '@/router/admin/auth'

const app = express()
const port = process.env.PORT || 3000

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(logger('dev'))
app.use(cookieParser())

app.use(corsMiddleware)
// app.use(csrfMiddleware)

app.use('/api', sampleRouter)
app.use('/api/jwt', jwtRouter)
app.use('/api/csrf-token', csrfTokenRouter)
app.use('/api/admin', authRouter)

app.listen(port, () => {
  console.log(`listening on port ${port}!`)
})
