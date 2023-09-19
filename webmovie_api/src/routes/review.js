const router = require('express').Router()
const reviewController = require('../controllers/reviewController')

router.get('/search/movieId/:id', reviewController.getReviewsByMovieId)
router.get('/search/episodeId/:id', reviewController.getReviewsByEpisodeId)

router.post('/', reviewController.addReview)

module.exports = router
