import express from 'express'
import cookieSession from 'cookie-session'
import bodyParser from 'body-parser'
import routes from './routes/routes'

const app = express()

app.use(bodyParser.json()) // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded

app.set('trust proxy', 1) // trust first proxy

app.use(cookieSession({
  name: 'session',
  secret: 'cookie-secret',
  maxAge: 24 * 60 * 60 * 1000 // 24 hours
}))

app.use('/', routes)

app.listen(3030, () => console.log('Example app listening on port 3030!'))
