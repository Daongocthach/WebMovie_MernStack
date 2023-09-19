const router = require('express').Router()
const directorController = require('../controllers/directorController')

router.get('/search', directorController.getListDirector)
router.get('/search/:id', directorController.getDirectorById)
router.get('/search/movieId/:id', directorController.getDirectorByMovieId)

router.post('/', directorController.addDirector)
router.delete('/:id', directorController.deleteDirector)
router.put('/:id', directorController.updateDirector)

module.exports = router
