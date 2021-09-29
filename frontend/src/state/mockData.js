const pedidos = [{
    num_pedido: '12345',
    nombres: 'Alejandro',
    apellido: ' Rdz',
    email: 'prueba@mail.com',
    buzon: 'yes',
    estatus_paso: {
        type: 2,
        default: 0
    },
    estatus: {
        type: 'yes',
        estatus_paso: 'Depositado'
    },
    marca: 'Scarpa Instrict',
    modelo: 'modelo',
    talla: '43',
    comentario_cliente: 'String',
    comentario_resolador: 'String',
    material_suela: 'String',
    fecha_registro: {
        type: '2019-06-23',
        default: 'yes'
    },
    Servicio: {
        resoldado: {
            type: false,
            default: true
        },
        cambio_de_liga: {
            type: false,
            default: false
        },
        parche: {
            type: true,
            default: false
        }
    }
}]

export default pedidos;