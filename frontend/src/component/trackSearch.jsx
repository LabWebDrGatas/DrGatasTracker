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

    const fetchFindOrder = () => {
        
    }

    const handleSearch = async () => {
        // Search order
        //let pedido = context.dispatch({type: "FIND_PEDIDO", payload: {id: "yes", lastname: "yes"}})
        if (lastname && trackingNumber){
            let url = "https://run.mocky.io/v3/9cec9a2f-d398-4b53-a041-43da3fcd9527";
            fetch(url).then(res => res.json()).then((data) => {
                let order = data;    
                if (order) {
                    history.push('/Track/' + order.num_pedido);
                }
            })
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