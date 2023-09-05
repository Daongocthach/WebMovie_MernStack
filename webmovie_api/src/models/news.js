const mongoose = require('mongoose')
const mongoosePaginate = require('mongoose-paginate-v2')

const newsSchema = new mongoose.Schema({
    name: { type: String, default: '' },
    description: { type: String, default: '' },
    image: { type: String, default:'' }
},
    { timestamps: true },
    { collection: 'news' })

const newsModel = mongoose.model('news', newsSchema)
module.exports = newsModel