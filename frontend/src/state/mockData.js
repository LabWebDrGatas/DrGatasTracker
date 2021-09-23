const pedidos = {
    num_pedido: 'yes',
    nombres: 'yes',
    apellido: 'yes',
    email: 'yes',
    buzon: 'yes',
    estatus_paso: {
        type: 2,
        default: 0
    },
    estatus: {
        type: 'yes',
        estatus_paso: 'Depositado'
    },
    marca: 'yes',
    modelo: 'yes',
    talla: 'yes',
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
}