const router = require('express').Router()
const countryController = require('../controllers/countryController')

router.get('/search', countryController.getAllCountry)
router.get('/search/:id', countryController.getCountryById)
router.get('/search/movieId/:id', countryController.getCountrieByMovieId)

router.post('/', countryController.addCountry)
router.delete('/:id', countryController.deleteCountry)
router.put('/:id', countryController.updateCountry)
module.exports = router
