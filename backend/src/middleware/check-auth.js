const jwt = require('jsonwebtoken');

const HttpError = require('../models/errorModel');

module.exports = (req, res, next) => {
    if(req.method === 'OPTIONS') {
        return next();
    }
    try {
        const token = req.headers.authorization.split(' ')[1]; // Auth: 'Bearer TOKEN'
        if(!token) {
            return next(
                new HttpError('Authentication failed! No token provided', 403)
            )
        }
        const decodedToken = jwt.verify(token, 'secret');
        req.userData = { userId: decodedToken.adminId };
        next();
    } catch (error) {
        return next(
            new HttpError('Authentication failed! Invalid token', 403)
        )
    }
}