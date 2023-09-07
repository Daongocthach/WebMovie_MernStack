const mongoose = require('mongoose')
const mongoosePaginate = require('mongoose-paginate-v2')

const ratingSchema = new mongoose.Schema({
    star: { type: Number, default:0 },
    user: { type: Schema.Types.ObjectId, ref: 'users' },
},
    { timestamps: true },
    { collection: 'ratings' })

const ratingModel = mongoose.model('ratings', ratingSchema)
module.exports = ratingModel