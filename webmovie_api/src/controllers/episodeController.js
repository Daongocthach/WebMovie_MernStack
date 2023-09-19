const EpisodeModel = require('../models/episodes')
const MovieModel = require('../models/movies')
const ObjectId = require('mongodb').ObjectId

const episodeController = {
    getListEpisode: async (req, res) => {
        try {
            const episodes = await EpisodeModel.find()
            if (!episodes) return res.status(400).json('No data')
            else {
                res.status(200).json(episodes)
            }
        } catch (error) {
            res.status(500).json(error)
        }
    },
    getEpisodesByMovieId: async (req, res) => {
        try {
            const movieId = req.params.id
            const movie = await MovieModel.findById(movieId)
            if (!movie) {
                return res.status(404).json({ message: 'Movie not found' })
            }

            const episodeIds = movie.episode.map(_id => new ObjectId(_id))
            const episodes = await EpisodeModel.find({ "_id": { $in: episodeIds } })
            res.status(200).json(episodes)
        } catch (error) {
            console.error(error)
            res.status(500).json({ message: 'Internal server error' })
        }
    },
    addEpisode: async (req, res) => {
        const { name, description, duration, link } = req.body
        try {
            const newEpisode = await new EpisodeModel({
                name, description, duration, link
            })
            const episode = await newEpisode.save()
            res.status(200).json(episode)

        } catch (err) {
            res.status(500).json(err);
        }
    },

    deleteEpisode: async (req, res) => {
        try {
            const episode = await EpisodeModel.findByIdAndRemove(req.params.id)
            res.status(200).json('Delete success')
        } catch (error) {
            res.status(400).json(error)
        }
    },

    updateEpisode: async (req, res) => {
        var id = req.params.id
        const { name, description, duration, link } = req.body
        try {
            const episode = await EpisodeModel.findByIdAndUpdate(id, { name, description, duration, link }, { new: true })
            if (!episode) { 
                return res.status(404).json({ message: 'episode not found' })
            }
            return res.status(200).json('Update success')
        } catch (error) {
            res.status(400).json(error)
        }
    }
}

module.exports = episodeController;
