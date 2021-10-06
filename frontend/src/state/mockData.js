const pedidos = [
  {
    numRastreo: '123AB',
    cliente: "Luis Cossio",
    email: "luis.cossio@outlook.com",
    buzon: "Sierra Elevation",
    estado: 0,
    marca: "Scarpa",
    modelo: "Drago",
    comentarioCliente: "",
    comentarioResolador: "",
    materialSuela: "Vibram",
    fechaPedido: new Date(),
    historialEstados: [
      {
        fecha: "06-10-2021",
        estado: 0,
      },
    ],
    servicioExtra: "liga",
  },
];

export default pedidos;
