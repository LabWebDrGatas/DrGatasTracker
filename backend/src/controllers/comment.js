const Comment = require('../models/comment');
const httpError = require('../models/errorModel');
const EmailService = require('../service/emailService');

const createComment = async(req, res, next) => {
    const createdComment = new Comment({
        email: req.body.email,
        comment: req.body.comment,
        image: req.file.path,
        pedidoId: req.body.pedidoId,
        numRastreo: req.body.numRastreo
    });
    try {
        await createdComment.save();
    } catch (err) {
        const error = new httpError('Comment could not be created !', 422);
        return next(error);
    }
    const message = {
        comment: req.body.comment,
        numRastreo: req.body.numRastreo 
    }
    EmailService.sendEmailReady(message, "Tu pedido está listo!", req.file.path, req.body.email);
    res.json(createdComment);
}

module.exports = {
    createComment: createComment
}