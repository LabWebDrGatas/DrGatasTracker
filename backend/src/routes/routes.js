const express = require('express');
const router = express.Router();
const { check } = require('express-validator'); 

const pedidos = require('../controllers/pedido');
const admin = require('../controllers/admin');
const checkAuth = require('../middleware/check-auth');
const comment = require('../controllers/comment');
const fileUpload = require('../middleware/file-upload');

/*************** NO AUTH REQUIRED  *****************/
//pedidos
router.get('/getPedidoRastreo/:pedido', pedidos.getPedidoRastreo);
router.post('/createPedido',
    fileUpload.single('image'),
    [ //completar aquí todas las verificaciones
        check('email', 'Un correo en formato es requerido.').normalizeEmail().isEmail()
    ],
    pedidos.createPedido);

//admin
router.post('/loginAdmin', admin.loginAdmin);

//comment
router.post('/createComment', 
    fileUpload.single('image'),
    comment.createComment);

/*************** AUTH REQUIRED  *****************/

router.use(checkAuth); //MIDDLEWARE FOR VALIDATION

//admin
router.post('/createAdmin', admin.createAdmin);
router.get('/getAdmin', admin.getAdmin); //delete LOGIN will fullfil
router.delete('/deleteAdmin', admin.deleteAdmin);

//pedido
router.put('/updatePedido/:pedido', pedidos.updatePedido);
router.delete('/deletePedido/:pedido', pedidos.deletePedido);
router.get('/allpedidos', pedidos.getPedidos);

//general
router.get('*', (req, res) => {
    res.send({
        error: 'The page you are looking for does not exist.'
    });
});

module.exports = router;