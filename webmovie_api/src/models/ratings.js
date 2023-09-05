const mongoose = require('mongoose')
const mongoosePaginate = require('mongoose-paginate-v2')

const ratingSchema = new mongoose.Schema({
    rating: { type: Number, required: true },
    movieId: { type: Schema.Types.ObjectId, ref: 'movies', required: true },
    user: { type: Schema.Types.ObjectId, ref: 'users', required: true },
},
    { timestamps: true },
    { collection: 'ratings' })

const ratingModel = mongoose.model('ratings', ratingSchema)
module.exports = ratingModel