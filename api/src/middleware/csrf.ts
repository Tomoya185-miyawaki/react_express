import csrf from 'csurf'
import csrfConfig from '@/config/csrf'

const csrfMiddleware = csrf(csrfConfig)

export default csrfMiddleware
