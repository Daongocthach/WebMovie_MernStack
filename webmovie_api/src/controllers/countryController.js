const CountryModel = require('../models/countries')

const countryController = {
    getAllCountry: async (req, res) => {
        try {
            const countries = await CountryModel.find()
            if (!countries) return res.status(400).json('No data')
            else {
                res.status(200).json(countries)
            }
        } catch (error) {
            res.status(500).json(error)
        }
    },
    addCountry: async (req, res) => {
        try {
            const newCountry = await new CountryModel({
                name: req.body.name,
                description: req.body.description
            })
            const country = await newCountry.save()
            res.status(200).json(country)

        } catch (err) {
            res.status(500).json(err);
        }
    },

    deleteCountry: async (req, res) => {
        try {
            const country = await CountryModel.findByIdAndRemove(req.params.id)
            res.status(200).json('Delete success')
        } catch (error) {
            res.status(400).json(error)
        }
    },

    updateCountry: async (req, res) => {
        var id = req.params.id
        const { name, description } = req.body

        try {
            const country = await CountryModel.findByIdAndUpdate(id, { name, description }, { new: true })
            if (!country) { 
                res.status(404).json({ message: 'Country not found' })
            }
            return res.status(200).json('Update success')
        } catch (error) {
            res.status(400).json(error)
        }
    }
    
}
module.exports = countryController