const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const constant = require('../config/constant')
const UserModel = require('../models/user')

const userController = {
    createUser: async (req, res) => {
        try {
            const email = await UserModel.findOne({ email: req.body.email })
            const salt = await bcrypt.genSalt(10)
            const hashed = await bcrypt.hash(req.body.password, salt)
            
            if (!email) {
                const newUser = await new UserModel({
                    email: req.body.email,
                    phone: req.body.phone,
                    username: req.body.username,
                    password: hashed,
                    role: req.body.role,
                    status: req.body.status
                })
                await newUser.save()
                res.status(200).json(newUser)
            } else {
                res.status(400).json('User already exists')
            }

        } catch (error) {
            res.status(400).json(error)
        }
    },
    updateUser: async (req, res) => {
        
        const { _id, username, phone, image } = req.body
        try {
            const user = await UserModel.findByIdAndUpdate(_id, { username, phone, image }, { new: true })
            if (!user) {
                res.status(404).json({ message: 'User not found' })
            }
            return res.status(200).json('Update success')
        } catch (error) {
            res.status(400).json(error)
        }
    },
    deleteUser: async (req, res) => {
        try {
            const user = await UserModel.findByIdAndRemove(req.params.id)
            res.status(200).json('Delete success')
        } catch (error) {
            res.status(400).json(error)
        }
    },
    getProfile: async (req, res) => {
        try {
            const verified = jwt.verify(req.body.token, constant.JWT_ACCESS_KEY)
            if (verified) {
                const user = await UserModel.findById(verified._id)
                if (!user) {
                    return res.status(404).json({ message: 'User not found' })
                }
                return res.status(200).json({ user })
            }
            else return 
        } catch (error) {
            res.status(400).json(error)
        }
    }
}
module.exports = userController