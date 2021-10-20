import React, { Component, useState } from "react";

import TableItem from './tableItem';
import SearchBar from './searchbar';

import '../css/table.css';

const List = ({items}) => {

  let [term, setTerm] = useState('')

  let searchHandler = (e) => {
    setTerm(e.target.value)
  }

  let searchingFor = (term) => {
    return (x) => {
      return x.numRastreo.toLowerCase().includes(term.toLowerCase()) || !term || x.numRastreo.toLowerCase().includes(term.toLowerCase()) ;
    };
  }

  return (
    <React.Fragment>

      <SearchBar
            updateSearch = {searchHandler}
            term = {term}
      />

      <div className="container margin_spaces">
        <table className="table">
          <tr>
            <th>Numero de Rastreo</th>
            <th>Cliente</th>
            <th>Correo</th>
            <th>Buzon</th>
            <th>Estado</th>
            <th>Marca</th>
            <th>Modelo</th>
            <th>Material de Suela</th>
            <th>Servicio Extra</th>
            <th>Editar</th>
            <th>Borrar</th>
          </tr>
          {items.filter(searchingFor(term)).map((item) => (
            <TableItem
              numero_de_rastreo={item.numRastreo}
              cliente={item.cliente}
              correo={item.email}
              buzon={item.buzon}
              estado={item.estado}
              marca={item.marca}
              modelo={item.modelo}
              material_de_suela={item.materialSuela}
              servicio_extra={item.servicioExtra}
            />
          ))}
        </table>
      </div>
    </React.Fragment>
  );
};

export default List;
