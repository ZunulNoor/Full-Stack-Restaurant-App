const app = require('express')
const router = app.Router()
const { getMenu, postMenu, MenubyCategory, MenubyId } = require('./Controller')

router.get('/get-all-menu', getMenu)
router.get('/get-item-by-id/:_id', MenubyId)
router.get('/get-item-by-category/:category', MenubyCategory)
router.post('/add-item', postMenu)

module.exports = router