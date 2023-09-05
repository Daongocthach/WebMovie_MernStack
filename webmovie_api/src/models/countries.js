const mongoose = require('mongoose')

const countrySchema = new mongoose.Schema({
    name: { type: String, default: '' },
    description: { type: String, default: '' }
},
    { timestamps: true },
    { collection: 'countries' })
const countryModel = mongoose.model('countries', countrySchema)
module.exports = countryModel