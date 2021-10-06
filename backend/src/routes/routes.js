const express = require('express');
const router = express.Router();

const pedidos = require('../controllers/pedido');
const admin = require('../controllers/admin');


//pedidos
router.get('/allpedidos', pedidos.getPedidos);
router.post('/createPedido', pedidos.createPedido);

//admin
router.post('/createAdmin', admin.createAdmin);

//general
router.get('*', (req, res) => {
    res.send({
        error: 'The page you are looking for does not exist.'
    });
});

module.exports = router;