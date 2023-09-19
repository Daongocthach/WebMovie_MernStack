const EpisodeModel = require('../models/episodes')
const MovieModel = require('../models/movies')
const ReviewModel = require('../models/reviews')
const ObjectId = require('mongodb').ObjectId

const reviewController = {
    getReviewsByEpisodeId: async (req, res) => {
        try {
            const episodeId = req.params.id
            const episode = await EpisodeModel.findById(episodeId)
            if (!episode) {
                return res.status(404).json({ message: 'Episode not found' })
            }

            const reviewIds = episode.review.map(_id => new ObjectId(_id))
            const reviews = await ReviewModel.find({ "_id": { $in: reviewIds } })
            res.status(200).json(reviews)
        } catch (error) {
            console.error(error)
            res.status(500).json(error)
        }
    },
    getReviewsByMovieId: async (req, res) => {
        try {
            const movieId = req.params.id
            const movie = await MovieModel.findById(movieId)
            if (!movie) {
                return res.status(404).json({ message: 'Episode not found' })
            }

            const reviewIds = movie.review.map(_id => new ObjectId(_id))
            const reviews = await ReviewModel.find({ "_id": { $in: reviewIds } })
            res.status(200).json(reviews)
        } catch (error) {
            console.error(error)
            res.status(500).json(error)
        }
    },
    addReview: async (req, res) => {
        try {
            const newReview = await new ReviewModel({
                comment: req.body.comment,
                avatar: req.body.avatar,
                name: req.body.name
            })

            const review = await newReview.save()
            res.status(200).json(review)

        } catch (err) {
            res.status(500).json(err);
        }
    },
}

module.exports = reviewController
