const mongoose = require('mongoose');
const validation = require('validator');

const commentSchema = new mongoose.Schema({
    comment: {
        type: String,
        required: true
    },
    pedidoId: { type: mongoose.Types.ObjectId, required: true, ref: 'Pedido' },
    image: {
        type: String
    },
    numRastreo: {
        type: String,
    }
});

const Comment = mongoose.model('Comment', commentSchema);

module.exports = Comment;