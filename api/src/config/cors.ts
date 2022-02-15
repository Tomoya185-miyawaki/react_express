import cors from 'cors'
import 'dotenv/config'

const frontDomain = process.env.REACT_DOMAIN || 'http://localhost/'
const allowedOrigins = [frontDomain]

const corsOptions: cors.CorsOptions = {
  credentials: true,
  origin: allowedOrigins,
}

export default corsOptions
