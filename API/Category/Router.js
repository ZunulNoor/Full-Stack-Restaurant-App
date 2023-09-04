const app = require('express')
const router = app.Router()
const { getallcategories, getCategoryByID, createCategory, updateCategory, deleteCategory } = require('./Controller')

router.get('/get-all-categories', getallcategories)
router.get('/get-category-by-id/:_id', getCategoryByID)
router.post('/create-category', createCategory)
router.put('/update-catergory', updateCategory)
router.delete('/delete-catergory', deleteCategory)

module.exports = router