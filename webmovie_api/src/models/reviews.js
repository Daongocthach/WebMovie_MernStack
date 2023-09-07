const mongoose = require('mongoose')
const mongoosePaginate = require('mongoose-paginate-v2')

const reviewSchema = new mongoose.Schema({
    comment: { type: String },
    user: { type: Schema.Types.ObjectId, ref: 'users' },
},
    { timestamps: true },
    { collection: 'reviews' })

reviewSchema.plugin(mongoosePaginate)
const reviewModel = mongoose.model('reviews', reviewSchema)
module.exports = reviewModel