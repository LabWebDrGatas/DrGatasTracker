import React, { Component } from "react";
import { useHistory } from "react-router-dom";

import "../css/table.css";

const TableItem = ({ numero_de_rastreo, cliente, correo, buzon, estado, marca, modelo, material_de_suela, servicio_extra }) => {
  let history = useHistory();
  let handlePushHistory = () => {
    console.log('this is the edit button')
  };

  let logOut = () => {
    console.log('this is the edit button')
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
        <button className='table_button_yellow' onClick={() => handlePushHistory()}>
          Editar
        </button>
      </td>
      <td>
        <button className='table_button_red' onClick={() => logOut()}> Borrar </button>
      </td>
    </tr>
  );
};

export default TableItem;
