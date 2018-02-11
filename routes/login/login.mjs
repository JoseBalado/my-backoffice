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

router.get('/', function (req, res, next) {
  req.session.views = (req.session.views || 0) + 1
  const token = createToken(user)
  req.session.token = token
  res.end('you are logged:' + req.session.views + 'views')
})

router.post('/', function (req, res, next) {
  res.end('post request received')
})

export default router
