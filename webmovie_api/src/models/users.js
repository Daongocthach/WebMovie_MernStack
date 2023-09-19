const mongoose = require('mongoose')
const mongoosePaginate = require('mongoose-paginate-v2')

const userSchema = new mongoose.Schema({
    email: { type: String, default: '', unique: true, require: true},
    username: {type: String, default:''},
    password: {type: String, default: ''},
    phone: {type: String, default:''},
    role: {type: String, default:''},
    status: {type: String, default:'active'},
    image: {type: String, default:'https://cdn1.iconfinder.com/data/icons/mix-color-3/502/Untitled-7-512.png'}
},
{ timestamps: true}, 
{ collection: 'users'})

userSchema.index({ email: 1 })
userSchema.plugin(mongoosePaginate)
const UserModel = mongoose.model('user', userSchema)
module.exports = UserModel