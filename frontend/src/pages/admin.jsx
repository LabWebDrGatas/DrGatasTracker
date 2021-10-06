import React, { Component } from "react";
import PedidoCard from "../component/PedidoCard";
import pedidos from './../state/mockData';

const Admin = () => {
  // const pedidos = await 
  return (
    <>
      <div class='container'>
        <h1>Administración de pedidos</h1>

        <div class='container'>
          <h3>Nuevos Pedidos</h3>
          <PedidoCard pedido={pedidos.at(0)}/>
        </div>
        <div class='container'>
          <h3>En Proceso</h3>
        </div>

        <div class='container'>
          <h3>Por Entregar</h3>
        </div>
      </div>
    </>
  );
};

export default Admin;
