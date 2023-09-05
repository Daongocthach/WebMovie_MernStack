const DirectorModel = require('../models/direstors')

const directorController = {
    getAllDirector: async (req, res) => {
        try {
            const directors = await DirectorModel.find()
            if (!directors) return res.status(400).json('No data')
            else {
                res.status(200).json(directors)
            }
        } catch (error) {
            res.status(500).json(error)
        }
    },
    addDirector: async (req, res) => {
        try {
            const newDirector = await new DirectorModel({
                name: req.body.name,
                description: req.body.description
            })
            const director = await newDirector.save()
            res.status(200).json(director)

        } catch (err) {
            res.status(500).json(err);
        }
    },

    deleteDirector: async (req, res) => {
        try {
            const director = await DirectorModel.findByIdAndRemove(req.params.id)
            res.status(200).json('Delete success')
        } catch (error) {
            res.status(400).json(error)
        }
    },

    updateDirector: async (req, res) => {
        var id = req.params.id
        const { name, description } = req.body

        try {
            const director = await DirectorModel.findByIdAndUpdate(id, { name, description }, { new: true })
            if (!director) { 
                res.status(404).json({ message: 'Director not found' })
            }
            return res.status(200).json('Update success')
        } catch (error) {
            res.status(400).json(error)
        }
    }
    
}
module.exports = directorController