const mongoose = require('mongoose')

const directorSchema = new mongoose.Schema({
    name: { type: String, default: '' },
    description: { type: String, default: '' }
},
    { timestamps: true },
    { collection: 'directors' })

const directorModel = mongoose.model('directors', directorSchema)
module.exports = directorModel