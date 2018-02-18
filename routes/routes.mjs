import express from 'express'
import login from './login/login'

const router = express.Router()

router.get('/stats', function (req, res) {
  // Update views
  console.log('Token', req.session.token)
  req.session.views = (req.session.views || 0) + 1

  // Write response
  res.json(req.session.views + ' views')
})

router.use('/login', login)

export default router
