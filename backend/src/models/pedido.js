const mongoose = require('mongoose');



const pedidoSchema = new mongoose.Schema({
    numRastreo: {
        type: String,
        required: true,
        length: 5,
        unique: true
    },
    cliente: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
    },
    buzon: {
        type: String,
        required: true,
    },
    estado: {
        type: Number,
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
    talla: {
        type: Number,
        required: true
    },
    comentarioCliente: {
        type: String,
        maxLength: 500
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
                type: Date,
                required: true
            },
            estado: {
                type: Number,
                required: true
            }
        }
    ],
    servicioExtra: {
        type: String,
        required: true
    },
    image: {
        type: String
    }
});

const Pedido = mongoose.model('Pedido', pedidoSchema);

module.exports = Pedido;