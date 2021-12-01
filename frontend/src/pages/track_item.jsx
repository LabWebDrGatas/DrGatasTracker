import React, { useEffect, useState } from 'react';
import TrackSearch from '../component/trackSearch';
import Stepper from '../component/stepper';
import mockData from '../state/mockData';
import { useParams } from 'react-router-dom';
import '../css/track.css';
import { apiAddress } from '../connections';
import { estados } from '../state/estados';

const Track_Item = props => {
    const [ pedido, setPedido ] = useState({});
    const { _id } = useParams();
    //Request order by num_pedido
    //let pedido = mockData[0];

    const searchOrder = async () => {
        const requestOptions = {
            method: 'GET',
            headers: { 'Content-Type': 'application/json' }
          };

        const responseData = await fetch(apiAddress + '/getPedidoRastreo/' + _id, requestOptions);
            let res = await responseData.json();
            if (responseData.status === 200){
                setPedido(res)
            }
    }

    useEffect(() => {
        searchOrder();
    }, [])
    return (
        <div className="container track" style={{width: "100%", alignItems: "center", padding: 20 }}>
            <div className="left">
                <TrackSearch />
            </div>
            <div className="right">
                <Stepper status={pedido.estado}/>
                <h3 class="mx-auto text-green-900">{estados[pedido.estado]}</h3>
                <div className="row-table">
                    <span># de seguimiento</span>
                    <span style={{float: 'right'}}>{pedido.numRastreo}</span>
                </div>
                <hr/>
                <div className="row-table">
                    <span>Cliente</span>
                    <span style={{float: 'right'}}>{pedido.cliente}</span>
                </div>
                <hr/>
                <div className="row-table">
                    <span>Zapatos</span>
                    <span style={{float: 'right'}}>{pedido.marca}</span>
                </div>
                <hr/>
                <div className="row-table">
                    <span>Modelo</span>
                    <span style={{float: 'right'}}>{pedido.modelo}</span>
                </div>
                <hr/>
                <div className="row-table">
                    <span>Material de la suela</span>
                    <span style={{float: 'right'}}>{pedido.materialSuela}</span>
                </div>
                <hr/>
            </div>
        </div>
    );
};

export default Track_Item;