const router = require('express').Router()
const ratingController = require('../controllers/ratingController')

router.get('/search/:id', ratingController.getRatingsByMovieId)

module.exports = router
