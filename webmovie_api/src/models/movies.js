const mongoose = require('mongoose')
const mongoosePaginate = require('mongoose-paginate-v2')

const movieSchema = new mongoose.Schema({
    title: { type: String, required: true },
    poster: { type: String, default: '' },
    description: { type: String, default: '' },
    series: { type: Number, default: 0 },
    director: { type: mongoose.Schema.Types.ObjectId, ref: 'directors', required: true },
    country: { type: mongoose.Schema.Types.ObjectId, ref: 'countries', required: true },
    category: [{ type: mongoose.Schema.Types.ObjectId, ref: 'categories', required: true }],
    episode: [{ type: mongoose.Schema.Types.ObjectId, ref: 'episodes', required: true }],
    rating: [{ type: mongoose.Schema.Types.ObjectId, ref: 'ratings', required: true }],
    review: [{ type: mongoose.Schema.Types.ObjectId, ref: 'reviews', required: true }]
},
    { timestamps: true },
    { collection: 'movies' })

movieSchema.plugin(mongoosePaginate)
const movieModel = mongoose.model('movies', movieSchema)
module.exports = movieModel