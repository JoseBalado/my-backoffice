import express from 'express'
import jwt from 'jsonwebtoken'

import permissions from './permissions.json'
import user from './user.json'

const router = express.Router()

const secret = 'secret'

const createToken = function (user) {
  console.log(user)
  const token = jwt.sign(permissions, secret)
  console.log('token Created')
  return token
}

router.get('/', function (req, res) {
  if (req.session) {
    req.session.views = (req.session.views || 0) + 1
    res.end('you are logged:' + req.session.views + 'views')
  } else {
    res.end('You are not logged')
  }
})

router.post('/', function (req, res) {
  console.log('post request values: ', req.body)
  if (req.body.username === user.name && req.body.password === user.password) {
    const token = createToken(user)
    // add token to the cookie
    req.session.token = token
    res.send('You are logged')
  } else {
    // Destroy the session
    req.session = null
    res.send('Login not authorized')
  }
})

export default router
