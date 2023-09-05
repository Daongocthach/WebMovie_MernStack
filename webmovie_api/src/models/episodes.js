const mongoose = require('mongoose')

const episodeSchema = new mongoose.Schema({
    title: { type: String, default: '' },
    description: { type: String, default: '' },
    duration: { type: Number, default: 0 },
    videoLink: { type: String, default: '' },
    
},
    { timestamps: true },
    { collection: 'episodes' })

const episodeModel = mongoose.model('episodes', episodeSchema)
module.exports = episodeModel