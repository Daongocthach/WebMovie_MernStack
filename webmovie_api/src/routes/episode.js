const router = require('express').Router()
const episodeController = require('../controllers/episodeController')

router.get('/search', episodeController.getListEpisode)
router.get('/search/:id', episodeController.getEpisodesByMovieId)

router.post('/', episodeController.addEpisode)
router.delete('/:id', episodeController.deleteEpisode)
router.put('/:id', episodeController.updateEpisode)

module.exports = router
