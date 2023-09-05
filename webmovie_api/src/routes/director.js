const router = require('express').Router()
const directorController = require('../controllers/directorController')

router.get('/search', directorController.getAllDirector)

router.post('/', directorController.addDirector)
router.delete('/:id', directorController.deleteDirector)
router.put('/:id', directorController.updateDirector)
module.exports = router
