const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const constant = require('../config/constant')
const UserModel = require('../models/user')

const authController = {
    registerUser: async (req, res) => {
        try {
            const salt = await bcrypt.genSalt(10)
            const hashed = await bcrypt.hash(req.body.password, salt)

            const checkMailExist = await UserModel.findOne({ email: req.body.email })
            if (checkMailExist) return res.status(400).json('Email is exist')

            const newUser = await new UserModel({
                username: req.body.username,
                email: req.body.email,
                password: hashed,
                phone: req.body.phone,
                role: req.body.role
            })

            const user = await newUser.save()
            res.status(200).json(user)
        } catch (error) {
            res.status(500).json('Register fail')
        }
    },

    login: async (req, res) => {
        try {
            const user = await UserModel.findOne({ email: req.body.email })
            if (!user) {
                return res.status(400).json({ message: 'Unregisted account!', status: false })

            }
            const validatePassword = await bcrypt.compareSync(req.body.password, user.password)
            if (!validatePassword) {
                return res.status(400).json({ message: 'Wrong password!', status: false })
            }
            if (user && validatePassword) {
                var token = jwt.sign({ _id: user._id }, constant.JWT_ACCESS_KEY, { expiresIn: 10000000 })
                return res.status(200).json({ message: 'dang nhap thanh cong', token: token})
            }
        } catch (error) {
            res.status(500).json('Login fail')
        }
    }
}
module.exports = authController