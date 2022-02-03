import express from 'express'
import logger from 'morgan'
import cors from 'cors'
import sampleRouter from './router/sample'
import jwtRouter from './router/jwt'
import 'dotenv/config'

const app = express()
const port = process.env.PORT || 3000

const frontDomain = process.env.REACT_DOMAIN || 'http://localhost/'
const allowedOrigins = [frontDomain]

const options: cors.CorsOptions = {
  origin: allowedOrigins,
}

app.use(cors(options))
app.use(express.json())
app.use(logger('dev'))
app.use('/api', sampleRouter)
app.use('/api/jwt', jwtRouter)

app.listen(port, () => {
  console.log(`listening on port ${port}!`)
})
