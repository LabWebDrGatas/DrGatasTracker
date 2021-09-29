import React, { useState } from 'react';
import { useHistory } from "react-router";
import mockData from'../state/mockData';
import '../css/track.css';


const TrackSearch = () => {
    const history = useHistory();
    const [lastname, setLastName] = useState();
    const [trackingNumber, setTrackingNumber] = useState();

    const handleLastName = (e) => {
        setLastName(e.target.value);
    }

    const handleTrackingNumber = (e) => {
        setTrackingNumber(e.target.value);
    }

    const handleSearch = () => {
        let pedido;
        // Search order
        //let pedido = context.dispatch({type: "FIND_PEDIDO", payload: {id: "yes", lastname: "yes"}})
        if (lastname && trackingNumber) {
            pedido = mockData[0];
        }
        
        if (pedido) {
            history.push('/Track/' + pedido.num_pedido);
        }
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
        </div>
    );
}

export default TrackSearch;