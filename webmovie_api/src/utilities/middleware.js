const jwt = require('jsonwebtoken')
const constant = require('../config/constant')
module.exports = {
    checkLogin: (req, res, next) => {
        try {
            var token = req.cookies.token
            var ketqua = jwt.verify(token, constant.JWT_ACCESS_KEY)
            if (ketqua) {
                next()
            }
        } catch (error) {
            return res.status(400).json('ban can login')
        }
    },

    checkRole: (role) => async (req, res, next) => {
        if(req.user.role !== role)
            return res.status(403).json('Not have access')
        next()
    }
}