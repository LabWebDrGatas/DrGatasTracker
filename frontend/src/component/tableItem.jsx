import React, { Component } from "react";
import { useHistory } from "react-router-dom";

import "../css/table.css";

const TableItem = ({ numero_de_rastreo, cliente, correo, buzon, estado, marca, modelo, material_de_suela, servicio_extra }) => {
  let history = useHistory();
  let actualizarPedido = () => {
    console.log('this is the edit button')
    console.log('/Update/' + numero_de_rastreo)
    history.push('/Update/' + numero_de_rastreo);
  };

  let borrarPedido = () => {
    console.log('this is the delete button')
  };

  return (
    <tr>
      <td>{numero_de_rastreo}</td>
      <td>{cliente}</td>
      <td>{correo}</td>
      <td>{buzon}</td>
      <td>{estado}</td>
      <td>{marca}</td>
      <td>{modelo}</td>
      <td>{material_de_suela}</td>
      <td>{servicio_extra}</td>        
      <td>
        <button className='table_button_yellow' onClick={() => actualizarPedido()}>
          Editar
        </button>
      </td>
      <td>
        <button className='table_button_red' onClick={() => borrarPedido()}> Borrar </button>
      </td>
    </tr>
  );
};

export default TableItem;
