const Pedido = require('../models/pedido');

//obtener todos los pedidos, posterior auth para solo el admin logueado
const getPedidos = function(req, res) {
    Pedido.find({}).then(function(pedidos){
        res.send(pedidos);
    }).catch(function(error){
        res.status(500).send(error);
    });
};

//crear un pedido en la base de datos
const createPedido = function(req, res) {
    const pedido = new Pedido(req.body);
    pedido.save().then(function (){
        return res.send(pedido);
    }).catch(function(error){
        console.log(error);
        return res.status(400).send({Error: error});
    });
}

const getPedidoRatreo = function(req, res) {
    const numRastreo = req.params.numRastreo;
    Pedido.findOne({numRastreo: numRastreo}).then(function(pedido){
        if(!pedido){
            return res.status(404).send({error: `Pedido con número de rastreo ${numRastreo} no existe`});
        }
        return res.send(pedido);
    }).catch(function(error){
        res.status(505).send({Error: error});
    });
}

module.exports = {
    getPedidos: getPedidos,
    createPedido: createPedido,
    getPedidoRatreo: getPedidoRatreo
}