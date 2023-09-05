const mongoose = require('mongoose')
const mongoosePaginate = require('mongoose-paginate-v2')

const movieSchema = new mongoose.Schema({
    title: { type: String, required: true },
    poster: { type: String, default: '' },
    description: { type: String, default: '' },
    duration: { type: Number, default: 0 },
    director: { type: mongoose.Schema.Types.ObjectId, ref: 'directors', required: true },
    category: { type: mongoose.Schema.Types.ObjectId, ref: 'categories', required: true },
    country: { type: mongoose.Schema.Types.ObjectId, ref: 'countries', required: true },
    episodes: [{ type: mongoose.Schema.Types.ObjectId, ref: 'episodes' }],
    reviews: [{ type: mongoose.Schema.Types.ObjectId, ref: 'reviews' }],
    ratings: [{ type: mongoose.Schema.Types.ObjectId, ref: 'ratings' }],
},
    { timestamps: true },
    { collection: 'movies' })

movieSchema.plugin(mongoosePaginate)
const movieModel = mongoose.model('movies', movieSchema)
module.exports = movieModel