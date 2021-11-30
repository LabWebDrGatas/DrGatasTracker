import React, { useState } from 'react';
import { useHistory } from "react-router";

import mockData from'../state/mockData';
import Modal from '../component/modal';

import '../css/homepage.css'
import '../css/form.css'
import Button from './../component/button';

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

    const submitForm = async (e) => {
        e.preventDefault();
        // Search order
        //let pedido = context.dispatch({type: "FIND_PEDIDO", payload: {id: "yes", lastname: "yes"}})
        const requestOptions = {
            method: 'GET',
            headers: { 'Content-Type': 'application/json' }
          }; 
          try {
            const responseData = await fetch('http://localhost:3001/getPedidoRastreo/' + trackingNumber, requestOptions);
            let res = await responseData.json();
            if (responseData.status === 200){
                history.push('/Track/' + res.numRastreo);
            } else {
                handleToggleModal();
            }
          } catch (error) {
              console.log(error)
              
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
                            <input className='form_fields' type='text' placeholder='Numero de restreo' onChange={handleTrackingNumber}/>
                            <Button
                                type='submit'
                                text='Buscar'
                            />
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