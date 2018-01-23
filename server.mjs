import express from 'express'
import jwt from 'jsonwebtoken'

const app = express()

const createToken = function (user) {
  const token = jwt.sign(user, secret)
  console.log('token Created')
  return token
}

const secret = 'secret'

const users = [
  {
    name: 'jose',
    password: 1234
  }
]

app.get('/token', (req, res) => {
  const token = createToken(users[0])
  res.json({ token: token })
})

app.listen(3000, () => console.log('Example app listening on port 3000!'))
