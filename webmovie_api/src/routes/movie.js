const router = require('express').Router()
const movieController = require('../controllers/movieController')

router.get('/search', movieController.getAllMovie)
router.get('/search/:id', movieController.getMovieById)

router.post('/', movieController.addMovie)
router.delete('/:id', movieController.deleteMovie)
router.put('/:id', movieController.updateMovie)
module.exports = router
