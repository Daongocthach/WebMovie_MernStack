const mongoose = require('mongoose')

const ratingSchema = new mongoose.Schema({
    point: { type: Number, default:0 },
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'users' },
},
    { timestamps: true },
    { collection: 'ratings' })

const ratingModel = mongoose.model('ratings', ratingSchema)
module.exports = ratingModel