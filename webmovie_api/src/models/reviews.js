const mongoose = require('mongoose')
const mongoosePaginate = require('mongoose-paginate-v2')

const reviewSchema = new mongoose.Schema({
    comment: { type: String, required: true },
    movieId: { type: Schema.Types.ObjectId, ref: 'movies', required: true },
    user: { type: Schema.Types.ObjectId, ref: 'users', required: true },
},
    { timestamps: true },
    { collection: 'reviews' })

reviewSchema.plugin(mongoosePaginate)
const reviewModel = mongoose.model('reviews', reviewSchema)
module.exports = reviewModel