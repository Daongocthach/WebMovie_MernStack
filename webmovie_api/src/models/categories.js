const mongoose = require('mongoose')

const categorySchema = new mongoose.Schema({
    name: { type: String, default: '' },
    description: { type: String, default: '' }
},
    { timestamps: true },
    { collection: 'categories' })
const categoryModel = mongoose.model('categories', categorySchema)
module.exports = categoryModel