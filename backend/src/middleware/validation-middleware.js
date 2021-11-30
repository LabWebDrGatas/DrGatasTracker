const validator = require('../helpers/validate');

const login = (req, res, next) => {
    const validationRule = {
        "email":"required|email",
        "password":"required|string"
    }
    validator(req.body, validationRule, {}, (err, status) => {
        if (!status) {
            res.status(412)
                .send({
                    success: false,
                    message: 'Validation failed',
                    data: err
                });
        } else {
            next();
        }
    });
}

module.exports = {
    login: login
}