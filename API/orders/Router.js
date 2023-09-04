const app = require('express')
const router = app.Router()
const { demoemail, addorder, allorders, OrderbyId } = require('./Controller')

router.post('/demo-order', demoemail)
router.post('/place-order', addorder)
router.get('/get-all-orders', allorders)
router.get('/get-order-by-id/:_id', OrderbyId)


module.exports = router