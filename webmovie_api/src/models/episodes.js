const mongoose = require('mongoose')

const episodeSchema = new mongoose.Schema({
    name: { type: String, default: '' },
    description: { type: String, default: '' },
    duration: { type: Number, default: 0 },
    link: { type: String, default: '' },
    review: { type: mongoose.Schema.Types.ObjectId, ref: 'reviews'},
    rating: { type: mongoose.Schema.Types.ObjectId, ref: 'ratings'}
},
    { timestamps: true },
    { collection: 'episodes' })

const episodeModel = mongoose.model('episodes', episodeSchema)
module.exports = episodeModel