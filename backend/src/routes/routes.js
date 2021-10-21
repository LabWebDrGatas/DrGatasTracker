const express = require('express');
const router = express.Router();

const pedidos = require('../controllers/pedido');
const admin = require('../controllers/admin');


//pedidos
router.get('/allpedidos', pedidos.getPedidos);
router.get('/getPedidoRastreo/:pedido', pedidos.getPedidoRastreo);
router.post('/createPedido', pedidos.createPedido);
router.put('/updatePedido/:pedido', pedidos.updatePedido);
router.delete('/deletePedido/:pedido', pedidos.deletePedido);

//admin
router.get('/getAdmin', admin.getAdmin);
router.post('/createAdmin', admin.createAdmin);
router.delete('/deleteAdmin', admin.deleteAdmin);
router.post('/loginAdmin', admin.loginAdmin);

//general
router.get('*', (req, res) => {
    res.send({
        error: 'The page you are looking for does not exist.'
    });
});

module.exports = router;