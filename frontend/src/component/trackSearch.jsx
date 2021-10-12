import React, { useState } from 'react';
import { useHistory } from "react-router";
import mockData from'../state/mockData';
import '../css/track.css';
import Modal from './modal';


const TrackSearch = () => {
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

    const handleSearch = () => {
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

    console.log(lastname, trackingNumber)

    return(
        <div>
            <div className="">
                <h1>Seguimiento de<br /> reparaciones</h1>
            </div>
            <div className="form">
                <input placeholder="Apellido" type="text" name="lastname" onChange={handleLastName}/>
                <input placeholder="# de seguimiento" type="text" name="lastname" onChange={handleTrackingNumber}/>
                <button onClick={handleSearch}>Buscar</button>
            </div>
            <Modal
                isVisible={modalVisible}
                title={null}
                onClose={handleToggleModal}
                body={<h2>Orden no encontrada</h2>}
                footer={<button class="bg-blue-600 hover:bg-blue-700 px-3 py-1 rounded text-white" onClick={handleToggleModal}>Okey</button>}
            />
        </div>
    );
}

export default TrackSearch;