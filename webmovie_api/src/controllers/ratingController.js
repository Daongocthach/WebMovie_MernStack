const MovieModel = require('../models/movies')
const ratingModel = require('../models/ratings')
const ObjectId = require('mongodb').ObjectId
const ratingController = {
    getRatingsByMovieId: async (req, res) => {
        try {
            const movieId = req.params.id
            const movie = await MovieModel.findById(movieId)
            if (!movie) {
                return res.status(404).json({ message: 'movie not found' })
            }
            const ratingIds = movie.rating.map(_id => new ObjectId(_id))
            const ratings = await ratingModel.find({ "_id": { $in: ratingIds } })
            res.status(200).json(ratings)
        } catch (error) {
            console.error(error)
            res.status(500).json(error)
        }
    }
}

module.exports = ratingController