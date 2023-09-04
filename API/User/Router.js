const app = require('express')
const router = app.Router()

const { signup, login, getAllUsers, getUserByEmail, UserByEmail } = require('./Controller')

router.post('/signup', signup)
router.post('/login', login)
router.get('/get-all-users', getAllUsers)
router.get('/get-user-by-email', getUserByEmail)
router.get('/user-by-email', UserByEmail)

module.exports = router