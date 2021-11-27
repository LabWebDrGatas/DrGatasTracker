import React, { Component, useState, useEffect } from "react";
import { useHistory } from "react-router";
import axios from 'axios';
import { apiAddress } from "../connections";

import mockData from './../state/mockData';

import List from '../component/tableComponent'

import "../css/table.css";

const Table = () => {
  // const pedidos = await 

  const history = useHistory();
  const [items, setItems] = useState(mockData);

  let url = `${apiAddress}/allpedidos`;

  const getItems = async () => {
    let items = await axios.get(url)
    console.log(items.data, 'getItemsdata')
    return items
  };

  useEffect(async () => {
    let { data } = await getItems();
    setItems(data)
  }, [])

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
