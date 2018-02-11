import express from 'express'
import login from './login/login'

const router = express.Router()

router.get('/api', function (req, res, next) {
  // Update views
  req.session.views = (req.session.views || 0) + 1

  // Write response
  res.json(req.session.views + ' views')
})

router.use('/login', login)

export default router
