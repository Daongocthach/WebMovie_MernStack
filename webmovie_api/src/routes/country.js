const router = require('express').Router()
const countryController = require('../controllers/CountryController')

router.get('/search', countryController.getAllCountry)

router.post('/', countryController.addCountry)
router.delete('/:id', countryController.deleteCountry)
router.put('/:id', countryController.updateCountry)
module.exports = router
