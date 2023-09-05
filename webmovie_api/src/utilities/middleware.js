const jwt = require('jsonwebtoken')
const constant = require('../config/constant')
module.exports = {
    checkLogin: (req, res, next) => {
        const token = req.cookies.token
        if (!token) return res.status(401).json('Access Denied')
        
        try {
            const verified = jwt.verify(token, constant.JWT_ACCESS_KEY)
            next()
        } catch (err) {
            return res.status(400).json(err)
        }
    },

    checkRole: (role) => async (req, res, next) => {
        if(req.user.role !== role)
            return res.status(403).json('Not have access')
        next()
    }
}