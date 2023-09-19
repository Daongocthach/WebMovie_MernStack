const router = require('express').Router()
const movieController = require('../controllers/movieController')

router.get('/search', movieController.getAllMovie)
router.get('/search/categoryId/:id', movieController.getListMovieByCategoryId)
router.get('/search/countryId/:id', movieController.getListMovieByCountryId)
router.get('/search/directorId/:id', movieController.getListMovieByDirectorId)
router.get('/search/noseries', movieController.getAllMovieIsNoSeries)
router.get('/search/series', movieController.getAllMovieIsSeries)
router.get('/search/:id', movieController.getMovieById)


router.post('/', movieController.addMovie)
router.delete('/:id', movieController.deleteMovie)
router.put('/:id', movieController.updateMovie)
router.put('/updateReview/:id', movieController.updateMovieReview)
module.exports = router
