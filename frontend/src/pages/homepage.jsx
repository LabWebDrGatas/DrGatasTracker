import React, { useState } from 'react';
import { useHistory } from "react-router";

import mockData from'../state/mockData';
import Modal from '../component/modal';

import '../css/homepage.css'
import '../css/form.css'

const Homepage = props => {
    const history = useHistory();
    const [lastname, setLastName] = useState();
    const [trackingNumber, setTrackingNumber] = useState();
    const [modalVisible, setModalVisible] = useState(false);

    const handleLastName = (e) => {
        setLastName(e.target.value);
    }

    const handleTrackingNumber = (e) => {
        setTrackingNumber(e.target.value);
    }

    let submitForm = (e) => {
        e.preventDefault();
        console.log(lastname, trackingNumber)
        let pedido = mockData[0];
        // Search order
        //let pedido = context.dispatch({type: "FIND_PEDIDO", payload: {id: "yes", lastname: "yes"}})

        
        if (lastname === pedido.cliente && trackingNumber === pedido.numRastreo) {
            history.push('/Track/' + pedido.numRastreo);
        } else {
            handleToggleModal();
        }
    }   

    const handleToggleModal = () => {
        setModalVisible(modalVisible ? false : true)
    }


    return ( 
        <React.Fragment>
            <div class="landing-page">
                <div class="container">
                    <div class="info">
                        <h1>Seguimiento de Reparaciones</h1>
                        <p>Introduce aqui tu nombre y numero de pedido para consultar el estado actual de tus Gatas</p>
                        <form id='myform' onSubmit={submitForm}>
                            <input className='form_fields' type='text' placeholder='Nombre' onChange={handleLastName}/>
                            <input className='form_fields' type='text' placeholder='Numero' onChange={handleTrackingNumber}/>
                            <button className={'button-home'}type="submit" value="Submit">Buscar</button>
                        </form>
                        <Modal
                        isVisible={modalVisible}
                        title={null}
                        onClose={handleToggleModal}
                        body={<h2>Orden no encontrada</h2>}
                        footer={<button class="bg-blue-600 hover:bg-blue-700 px-3 py-1 rounded text-white" onClick={handleToggleModal}>Okey</button>}
                        />
                    </div>
                    <div class="image">
                    <img src="https://i.ibb.co/QHsWCZR/gatas-resoladas.png"/>
                    </div>
                    <div class="clearfix"></div>
                </div>
            </div>
        </React.Fragment>
    );
  };
  
  export default Homepage;