import express from 'express'
import cookieSession from 'cookie-session'
import routes from './routes/routes'

const app = express()

app.set('trust proxy', 1) // trust first proxy

app.use(cookieSession({
  name: 'session',
  secret: 'cookie-secret',
  maxAge: 24 * 60 * 60 * 1000 // 24 hours
}))

app.use('/', routes)

app.listen(3000, () => console.log('Example app listening on port 3000!'))
