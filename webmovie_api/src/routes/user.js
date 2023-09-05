const router = require('express').Router()
const verifyToken = require('../utilities/middleware')
const userController = require('../controllers/userController')

router.post('/profile', userController.getProfile)

router.post('/', verifyToken.checkLogin, userController.createUser)
router.put('/', userController.updateUser)
router.delete('/:id', verifyToken.checkLogin, userController.deleteUser)

module.exports = router
