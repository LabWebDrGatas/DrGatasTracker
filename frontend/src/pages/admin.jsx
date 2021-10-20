import React, { Component } from "react";
import { useHistory } from "react-router";

import PedidoCard from "../component/PedidoCard";
import pedidos from "./../state/mockData";

const Admin = () => {
  // const pedidos = await 

  const history = useHistory();

  const changeToTablePage = (e) => {
    history.push('/Table');
  }

  return (
    <>
      <div class='container'>
        <h1>Administración de pedidos</h1>
        <button className='table_button_blue' onClick={() => changeToTablePage()}> Go to orders Table </button>

        <div class='container'>
          <h3>Nuevos Pedidos</h3>
          <div class='overflow-x-scroll'>
            <div class='flex'>
              <PedidoCard pedido={pedidos.at(0)} />
              <PedidoCard pedido={pedidos.at(0)} />
              <PedidoCard pedido={pedidos.at(0)} />
            </div>
          </div>
        </div>
        <div class='container'>
          <h3>En Proceso</h3>
          <div class='flex'>
            <PedidoCard
              pedido={pedidos.at(0)}
              backButtonText='Retroceder'
              nextButtonText='Avanzar'
            />
          </div>
        </div>

        <div class='container'>
          <h3>Por Entregar</h3>
        </div>
      </div>
    </>
  );
};

export default Admin;
