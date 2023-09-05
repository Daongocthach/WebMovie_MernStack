const MovieModel = require('../models/movies')
const CategoryModel = require('../models/categories')

const movieController = {
    getAllMovie: async (req, res) => {
        const page = req.body.page || 1
        const limit = req.body.limit || 10

        const options = {
            page: page,
            limit: limit,
        }
        try {
            const movies = await MovieModel.paginate({}, options)
            if (!movies) return res.status(400).json('No data')
            else {
                res.status(200).json(movies)
            }
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
        const { title, director, category, poster, link, description, duraion } = req.body

        try {
            const movie = await MovieModel.findByIdAndUpdate(id, { title, director, category, poster, link, description, duraion }, { new: true })
            if (!movie) { 
                res.status(404).json({ message: 'Movie not found' })
            }
            return res.status(200).json('Update success')
        } catch (error) {
            res.status(400).json(error)
        }
    }

}
module.exports = movieController