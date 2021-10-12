import React, { useEffect } from 'react';
import TrackSearch from '../component/trackSearch';
import Stepper from '../component/stepper';
import mockData from '../state/mockData';
import '../css/track.css';

const Track_Item = props => {
    //Request order by num_pedido
    let pedido = mockData[0];
    useEffect(() => {
        if (pedido) {
            //Set context pedido
        }
    })
    return (
        <div className="track container" style={{ display: "flex", width: "100%", alignItems: "center", padding: 20 }}>
            <div className="left">
                <TrackSearch />
            </div>
            <div className="right">
                <Stepper status={pedido.estado}/>
                <div className="row-table">
                    <span># de envio</span>
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