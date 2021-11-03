import React, { Component, useState } from "react";
import { useHistory } from "react-router";

import PedidoCard from "../component/PedidoCard";
import PedidoScroller from "../component/PedidoScroller";
import mockData from "./../state/mockData";
import { estados } from './../state/estados';

const Admin = () => {
  // const pedidos = await 

  const history = useHistory();

  const changeToTablePage = (e) => {
    history.push('/Table');
  }
  const [orders, setOrders] = useState(mockData)

  const updateOneOrder = (order) => {
    const idx = orders.findIndex((p) => p.numRastreo === order.numRastreo)
    console.log(idx);
    var modOrders = [...orders];
    modOrders[idx] = order;
    setOrders(modOrders);
  }

  return (
    <>
      <div class='container'>
        <h1>Administración de pedidos</h1>
        <button
          className='table_button_blue'
          onClick={() => changeToTablePage()}
        >
          {" "}
          Go to orders Table{" "}
        </button>
        { 
          Object.keys(estados).map((estado) => 
            (0 <= estado && estado <= 7) &&
            <div class='container'>
              <h3>{estados[estado]}</h3>
              <PedidoScroller
                orders={orders}
                estado={estado}
                updateOneOrder={updateOneOrder}
                defaultText={"No hay pedidos " + estados[estado]}
              />
            </div>
          )
        }

      </div>
    </>
  );
};

export default Admin;
