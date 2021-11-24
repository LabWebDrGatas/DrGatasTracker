import React, { Component, useState, useEffect} from "react";
import { useHistory } from "react-router";
import PedidoScroller from "../component/PedidoScroller";
import List from "../component/tableComponent";
// import mockData from "./../state/mockData";
import { estados } from './../state/estados';
import axios from 'axios';
import { apiAddress } from './../connections';

const Admin = () => {
  // const pedidos = await 


  const switchView = (e) => {
    setTableView(!tableView);
  }
  
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [tableView, setTableView] = useState(false);

  useEffect(async () => {
    try {
      const res = await axios.get(apiAddress + "/allpedidos", {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      });
      console.log(res);
      setOrders(res.data);
    } catch (err) {
      console.log(err);
    }

    setLoading(false);
  }, []);

  const updateOneOrder = async (order) => {
    try {
      // Update the order on the server
      const res = await axios.put(
        apiAddress + "/updatepedido/" + order.numRastreo,
        {
          estado: order.estado,
          historialEstados: order.historialEstados,
        },
        {
          headers: {
            Authorization: "Bearer " + localStorage.getItem("token"),
          },
        }
      );
      console.log(res);

      // Update the orders locally
      const idx = orders.findIndex((p) => p.numRastreo === order.numRastreo);
      var modOrders = [...orders];
      modOrders[idx] = order;
      setOrders(modOrders);
      alert(
        `Pedido ${res.data.pedido.numRastreo} actualizado al estado ${
          estados[res.data.pedido.estado]
        }`
      );
    } catch (err) {
      console.log(err);
      alert("Error al actualizar el pedido, favor de intentar otra vez");
    }
  };

  const renderVista = () => {
    if (tableView) {
      return (
        <List items={orders} className='margin_spaces' />
      );
    } else {
      return (
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
      );
    }
  }
  return (
    <>
      <div class='container'>
        <h1>Administración de pedidos</h1>
          <button
              className='table_button_blue'
              onClick={() => switchView()}
              >
              {" "}
              Cambiar vista{" "}
              </button>
        {loading
          ? <h1>Cargando...</h1>
          : renderVista()
        }

      </div>
    </>
  );
};

export default Admin;
