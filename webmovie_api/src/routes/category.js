const router = require('express').Router()
const categoryController = require('../controllers/categoryController')

router.get('/search', categoryController.getAllCategory)
router.get('/search/:id', categoryController.getCategoryById)

router.post('/', categoryController.addCategory)
router.delete('/:id', categoryController.deleteCategory)
router.put('/:id', categoryController.updateCategory)
module.exports = router
