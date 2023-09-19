const mongoose = require('mongoose')
const mongoosePaginate = require('mongoose-paginate-v2')

const reviewSchema = new mongoose.Schema({
    comment: { type: String },
    avatar: { type: String, default:'https://th.bing.com/th/id/OIP.j4m4tUr2MRF7BsZKXchy8AHaJj?pid=ImgDet&rs=1' },
    name: { type: String }
},
    { timestamps: true },
    { collection: 'reviews' })

reviewSchema.plugin(mongoosePaginate)
const reviewModel = mongoose.model('reviews', reviewSchema)
module.exports = reviewModel