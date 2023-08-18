const mongoose = require('mongoose')
const mongoosePaginate = require('mongoose-paginate-v2')

const movieSchema = new mongoose.Schema({
    title: { type: String, default: '' },
    director: { type: String, default: '' },
    category: { type: String, default: '' },
    poster: { type: String, default: '' },
    link: { type: String, default: '' },
    description: { type: String, default: '' },
    duration: { type: Number, default: 0 },
},
    { timestamps: true },
    { collection: 'movies' })

movieSchema.plugin(mongoosePaginate)
const movieModel = mongoose.model('movies', movieSchema)
module.exports = movieModel