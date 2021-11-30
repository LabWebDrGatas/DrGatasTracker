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
  {
    numRastreo: '456FG',
    cliente: "Ricardo Trevino",
    email: "ricardo.trevino@outlook.com",
    buzon: "Juana de Arco",
    estado: 0,
    marca: "Nike",
    modelo: "Airforce",
    comentarioCliente: "",
    comentarioResolador: "",
    materialSuela: "Hule",
    fechaPedido: new Date(),
    historialEstados: [
      {
        fecha: "06-10-2021",
        estado: 0,
      },
    ],
    servicioExtra: "liga",
  },
  {
    numRastreo: '789XM',
    cliente: "Pedro Ignacio",
    email: "pedro@outlook.com",
    buzon: "Maria Curie",
    estado: 0,
    marca: "Adidas",
    modelo: "NMDs",
    comentarioCliente: "",
    comentarioResolador: "",
    materialSuela: "UltraBoost",
    fechaPedido: new Date(),
    historialEstados: [
      {
        fecha: "06-10-2021",
        estado: 0,
      },
    ],
    servicioExtra: "liga",
  }
];

export default pedidos;
