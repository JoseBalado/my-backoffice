import express from 'express'
import cookieSession from 'cookie-session'
import jwt from 'jsonwebtoken'

const app = express()

app.set('trust proxy', 1) // trust first proxy

app.use(cookieSession({
  name: 'session',
  secret: 'cookie-secret',
  sameSite: 'lax',
  maxAge: 24 * 60 * 60 * 1000 // 24 hours
}))

const createToken = function (user) {
  console.log(user)
  const token = jwt.sign(permissions, secret)
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

app.get('/api', function (req, res, next) {
  // Update views
  req.session.views = (req.session.views || 0) + 1

  // Write response
  res.json(req.session.views + ' views')
})

app.get('/login', function (req, res, next) {
  req.session.views = (req.session.views || 0) + 1
  res.end('you are logged:' + req.session.views + 'views')
})

app.get('/token', (req, res) => {
  const token = createToken(users[0])
  req.session.token = token
  res.json('Token generated and added to the cookie')
})

app.listen(3000, () => console.log('Example app listening on port 3000!'))

const permissions = `{
  "name": 'Mr Admin',
  'client': 'Rossya',
  "canAccessServerStatus": true,
  "canAccessUtility": true,
  "canAccessDesigner": true,
  "canAccessSynchronise": true,
  "canAccessBackup": true,
  "canAccessPackage": true,
  "canConfigureMenus": true,
  "canAccessReports": true,
  "canManageRoles": true,
  "canViewAllClients": true,
  "canConfigureClients": true,
  "canCheckContentPackageStatus": true,
  "canManageCycles": true,
  "canAccessCycles": true,
  "canManageFleet": true,
  "canAccessFleet": true,
  "canConfigureAdvertisement": true,
  "canAccessAdvertisement": true,
  "canManageECommerce": true,
  "canAccessECommerce": true,
  "canManageDestination": true,
  "canAccessDestination": true,
  "canManageDestinationCity": true,
  "canAccessDestinationCity": true,
  "canWriteMetadata": true,
  "canReadMetadata": true,
  "canAccessImageRepo": true,
  "canReadApplication": true,
  "canWriteApplication": true,
  "canReadDeliverType": true,
  "canWriteDeliverType": true,
  "canAccessCityMapGenerator": true,
  "canAccessGlobalMapGenerator": true,
  "canAccessMenuDesigner": true,
  "canAccessSurveyDesigner": true,
  "canManageUsers": true,
  "canAccessOnboardServer": true,
  "canAccessUsers": true,
  "canManageOnboardServer": true,
  "canAccessFleetManagement": true,
  "canAccessFleetStatus": true,
  "canManageFleetManagement": true,
  "canManageLookupData": true,
  "canReadPromotions": true,
  "canWritePromotions": true,
  "canAccessPromotions": true,
  "canAccessDashboard": true,
  "canGeneratePromotionsPackage": true
}`
