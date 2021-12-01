import React, { useEffect, useState } from 'react';
import TrackSearch from '../component/trackSearch';
import Stepper from '../component/stepper';
import mockData from '../state/mockData';
import { useParams } from 'react-router-dom';
import '../css/track.css';
import { apiAddress } from '../connections';
import { estados } from '../state/estados';
import Modal from '../component/modal';
import Button from '../component/button';
import { useHistory } from 'react-router';

const Track_Item = props => {
    const [ pedido, setPedido ] = useState({});
    const { _id } = useParams();
    const history = useHistory();
    const [lastname, setLastName] = useState();
    const [trackingNumber, setTrackingNumber] = useState();
    const [modalVisible, setModalVisible] = useState(false);

    const handleTrackingNumber = (e) => {
        setTrackingNumber(e.target.value.toUpperCase());
    }

    useEffect(() => {
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
        };
        searchOrder();
    }, []);

    const handleSearch = async () => {
        // Search order
        //let pedido = context.dispatch({type: "FIND_PEDIDO", payload: {id: "yes", lastname: "yes"}})
        const requestOptions = {
            method: 'GET',
            headers: { 'Content-Type': 'application/json' }
          }; 
          try {
            const responseData = await fetch(apiAddress + '/getPedidoRastreo/' + trackingNumber, requestOptions);
            let res = await responseData.json();
            if (responseData.status === 200){
                setPedido(res);
                history.push('/Track/' + res.numRastreo);
            } else {
                handleToggleModal();
            }
            
            console.log(pedido)
          } catch (error) {
              console.log(error)        
          }
    }

    const handleToggleModal = () => {
        setModalVisible(modalVisible ? false : true)
    } 

    return (
        <div className="container track" style={{width: "100%", alignItems: "center", padding: 20 }}>
            <div className="left">
            <div>
                <div className="">
                    <h1>Seguimiento de<br /> reparaciones</h1>
                </div>
                <div className="form">
                    <input placeholder="# de seguimiento" type="text" name="lastname" onChange={handleTrackingNumber}/>
                    <Button
                        onClick={handleSearch}
                        text='Buscar'
                    />
                </div>
                <Modal
                    isVisible={modalVisible}
                    title={null}
                    onClose={handleToggleModal}
                    body={<h2>Orden no encontrada</h2>}
                    footer={<button class="bg-blue-600 hover:bg-blue-700 px-3 py-1 rounded text-white" onClick={handleToggleModal}>Okey</button>}
                />
            </div>
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