import React, { Fragment, useEffect , useContext} from 'react';
import {main} from '../state/mainState'; 
import TrackSearch from '../component/trackSearch';
import '../css/track.css';
import '../css/tailwind.css';
const Track = props => {
    
    let context = useContext(main);
    console.log(context.state)

    return ( 
        <div className="container track" style={{width: "100%", alignItems: "center", padding: 20}}>
        <div className="left">
            <TrackSearch/>
        </div>
        <div className="right">
            Ingresa tu número de seguimiento para realizar el seguimiento
        </div>
        </div>
    );
  };
  
  export default Track;