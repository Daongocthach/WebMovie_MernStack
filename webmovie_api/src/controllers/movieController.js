const MovieModel = require('../models/movies')
const CategoryModel = require('../models/categories')
const { response } = require('express')
const ObjectId = require('mongodb').ObjectId

const movieController = {
    getAllMovie: async (req, res) => {
        try {
            const movies = await MovieModel.find({})
            if (!movies) return res.status(400).json('No data')
            else {
                res.status(200).json(movies)
            }
        } catch (error) {
            res.status(500).json(error)
        }
    },
    getListMovieByCategoryId: async (req, res) => {
        try {
            var cateId = req.params.id
            const movies = await MovieModel.find({ "category": new ObjectId(cateId) })
    
            if (!movies) {
                return res.status(404).json({ message: 'No movies found' })
            }
    
            res.status(200).json(movies)
        } catch (error) {
            res.status(500).json(error)
        }
    },
    getListMovieByCountryId: async (req, res) => {
        try {
            const countryId = req.params.id
            const movies = await MovieModel.find({ "country": new ObjectId(countryId) })
    
            if (!movies) {
                return res.status(404).json({ message: 'No movies found' })
            }
    
            res.status(200).json(movies)
        } catch (error) {
            res.status(500).json(error)
        }
    },
    getListMovieByDirectorId: async (req, res) => {
        try {
            const directorId = req.params.id
            const movies = await MovieModel.find({ "director": new ObjectId(directorId) })
    
            if (!movies) {
                return res.status(404).json({ message: 'No movies found' })
            }
    
            res.status(200).json(movies)
        } catch (error) {
            res.status(500).json(error)
        }
    },
    getMovieById: async (req, res) => {
        try {
            const movie = await MovieModel.findById(req.params.id)
            res.status(200).json(movie)
        } catch (error) {
            res.status(500).json(error)
        }
    },

    getAllMovieIsNoSeries: async (req, res) => {
        try {
            const movies = await MovieModel.paginate({ series: 0 })
            if (!movies) return res.status(400).json('No data')
            else {
                res.status(200).json(movies)
            }
        } catch (error) {
            res.status(500).json(error)
        }
    },
    getAllMovieIsSeries: async (req, res) => {
        try {
            const movies = await MovieModel.find({ series: 1 })
            if (!movies) return res.status(400).json('No data')
            else {
                res.status(200).json(movies)
            }
        } catch (error) {
            res.status(500).json(error)
        }
    },

    addMovie: async (req, res) => {
        try {
            const newMovie = await new MovieModel({
                title: req.body.title,
                director: req.body.director,
                category: req.body.category,
                poster: req.body.poster,
                link: req.body.link,
                description: req.body.description,
                duration: req.body.duration
            })

            const movie = await newMovie.save()
            res.status(200).json(movie)

        } catch (err) {
            res.status(500).json(err);
        }
    },

    deleteMovie: async (req, res) => {
        try {
            const movie = await MovieModel.findByIdAndRemove(req.params.id)
            res.status(200).json('Delete success')
        } catch (error) {
            res.status(400).json(error)
        }
    },

    updateMovie: async (req, res) => {
        var id = req.params.id
        const { title, poster, desciption, series, director, country, category, episode, rating, review } = req.body

        try {
            const movie = await MovieModel.findByIdAndUpdate(id, { title, poster, desciption, series, director, country, category, episode, rating, review }, { new: true })
            if (!movie) { 
                res.status(404).json({ message: 'Movie not found' })
            }
            return res.status(200).json('Update success')
        } catch (error) {
            res.status(400).json(error)
        }
    },
    updateMovieReview: async (req, res) => {
        var id = req.params.id
        const reviewId = req.body.reviewId

        try {
            const movie = await MovieModel.findByIdAndUpdate(
                id,
                { $push: { review: new ObjectId(reviewId) } },
                { new: true }
              )
            if (!movie) { 
                res.status(404).json({ message: 'Movie not found' })
            }
            return res.status(200).json('Update success')
        } catch (error) {
            res.status(400).json(error)
        }
    },

}
module.exports = movieController