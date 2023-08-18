const router = require('express').Router()
const verifyToken = require('../utilities/middleware')
const userController = require('../controllers/userController')

router.post('/createUser', verifyToken.checkLogin, userController.createUser)
router.put('/updateUser/:id', verifyToken.checkLogin, userController.updateUser)
router.delete('/deleteUser/:id', verifyToken.checkLogin, userController.deleteUser)

module.exports = router
