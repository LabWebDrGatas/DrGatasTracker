const express = require('express');
const router = express.Router();

const pedidos = require('../controllers/pedido');
const admin = require('../controllers/admin');
const checkAuth = require('../middleware/check-auth');




/*************** NO AUTH REQUIRED  *****************/
//pedidos
router.get('/allpedidos', pedidos.getPedidos);
router.get('/getPedidoRastreo/:pedido', pedidos.getPedidoRastreo);
router.post('/createPedido', pedidos.createPedido);

//admin
router.post('/loginAdmin', admin.loginAdmin);





/*************** AUTH REQUIRED  *****************/

router.use(checkAuth); //MIDDLEWARE FOR VALIDATION

//admin
router.post('/createAdmin', admin.createAdmin);
router.get('/getAdmin', admin.getAdmin); //delete LOGIN will fullfil
router.delete('/deleteAdmin', admin.deleteAdmin);

//pedido
router.put('/updatePedido/:pedido', pedidos.updatePedido);
router.delete('/deletePedido/:pedido', pedidos.deletePedido);

//general
router.get('*', (req, res) => {
    res.send({
        error: 'The page you are looking for does not exist.'
    });
});

module.exports = router;