import React, { Component, useState, useEffect } from "react";
import { useHistory } from "react-router";

import mockData from './../state/mockData';

import List from '../component/tableComponent'

import "../css/table.css";

const Table = () => {
  // const pedidos = await 

  const history = useHistory();
  const [items, setItems] = useState(mockData);

  const changeToAdminPage = (e) => {
    history.push('/Admin/');
  }

  return (
    <>
      <div class='container'>
        <h1>Administración de pedidos</h1>
        <button className='table_button_blue' onClick={() => changeToAdminPage()}> Go to Admin Page </button>
        <List items={items} className='margin_spaces'/>
        </div>
    </>
  );
};

export default Table;
