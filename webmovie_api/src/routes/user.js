const router = require('express').Router()
const verifyToken = require('../utilities/middleware')
const userController = require('../controllers/userController')

router.post('/profile', userController.getProfile)
router.get('/search', userController.getAllUser)
router.get('/search/:id', userController.getUserById)

router.post('/', userController.addUser)
router.put('/:id', userController.updateUser)
router.delete('/:id', userController.deleteUser)

module.exports = router
