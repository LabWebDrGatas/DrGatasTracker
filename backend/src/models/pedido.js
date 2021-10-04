const mongoose = require('mongoose');


const pedidoSchema = new.mongoose.Schema({
    cliente: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
    },
    estado: {
        type: String,
        required: true
    },
    marca: {
        type: String,
        required: true
    },
    modelo: {
        type: String,
        required: true
    },
    comentarioCliente: {
        type: String,
        maxlenght: 500
    },
    comentarioResolador: {
        type: String,
        maxlenght: 500
    },
    materialSuela: {
        type: String,
        required: true
    },
    fechaPedido: {
        type: Date,
        required: true
    },
    historialEstados: [
        {
            fecha: {
                type: String,
                required: true
            },
            estado: {
                type: String,
                required: true
            }
        }
    ],
    servicioExtra: {
        type: String,
        required: true
    }
});

const Pedido = mongoose.model('Pedido', pedidoSchema);

module.exports = Pedido;