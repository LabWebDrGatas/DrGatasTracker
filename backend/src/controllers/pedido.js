

const Pedido = require('../models/pedido');
const httpError = require('../models/errorModel');

//obtener todos los pedidos, posterior auth para solo el admin logueado
const getPedidos = async (req, res, next) => {
    let pedidos;
    try{
        pedidos = await Pedido.find({});
    } catch (err){
        const error = new httpError('Fetching orders failed', 500);
        return next(error);
    }
    if(!pedidos) {
        const error = new httpError('No orders found !', 404);
        return next(error);
    }

    res.json(pedidos);
};

//crear un pedido en la base de datos
const createPedido = async (req, res, next) => {
    const pedido = new Pedido(req.body);
    try {
        await pedido.save();
    }catch (err){
        console.log(err);
        const error = new httpError('Order could not be created !', 400);
        return next(error);
    }
    res.json(pedido);
}

const getPedidoRastreo = async (req, res, next) => {
    const numRastreo = req.params.pedido;
    console.log(numRastreo);
    let pedido;
    try {
        pedido = await Pedido.findOne({numRastreo: numRastreo});
    } catch (err) {
        const error = new httpError('Bad request!',500);
        return next(error);
    }
    if(!pedido){
        const error = new httpError(`Pedido con número de rastreo ${numRastreo} no existe`, 404);
        return next(error);
    }
    res.json(pedido);
}

const updatePedido = function(req,res) {
    const numRastreo = req.params.pedido;
    const updates = Object.keys(req.body);
    const allowedUpdates = ['estado', 'historialEstados'];

    const isValidUpdate = updates.every((update) => allowedUpdates.includes(update));

    if(!isValidUpdate){
        return res.status(404).send({ error: 'Solo se permite actualizar ' + allowedUpdates});
    }

    Pedido.findOneAndUpdate({numRastreo: numRastreo}, req.body).then(function(pedido){
        if(!pedido){
            return res.status(404).send({ error: `Pedido con numero de rastreo ${numRastreo} no existe`});
        }
        return res.send({actualizado: "Correcto"});
    }).catch(function(error){
        res.status(500).send({Error: error});
    });
}

const deletePedido = async (req, res, next) => {
    const numRastreo = req.params.pedido;
    let pedido;

    try {
        pedido = await Pedido.findOneAndDelete({numRastreo: numRastreo});
    } catch (err) {
        const error = new httpError('Bad request!',500);
        return next(error);
    }
    if(!pedido){
        const error = new httpError(`Pedido con número de rastreo ${numRastreo} no existe`, 404);
        return next(error);
    }
    res.send({eliminado: "Correctamente",
    pedido
    });
}


module.exports = {
    getPedidos: getPedidos,
    createPedido: createPedido,
    getPedidoRastreo: getPedidoRastreo,
    updatePedido: updatePedido,
    deletePedido: deletePedido
}