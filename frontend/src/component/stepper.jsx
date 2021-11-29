import React from 'react';

const Stepper = ({ status }) => {
    return(
        <div>
            <div>
                <ul className="progressbar">
                    <li className={status >= 0 ? 'active' : ''} >Solicitando</li>
                    <li className={status >= 1 ? 'active' : ''} >Aceptado</li>
                    <li className={status >= 2 ? 'active' : ''} >Recibido en buzon</li>
                    <li className={status >= 3 ? 'active' : ''} >En taller</li>
                    <li className={status >= 4 ? 'active' : ''} >En reparación</li>
                    <li className={status >= 5 ? 'active' : ''} >Reparado</li>
                    <li className={status >= 6 ? 'active' : ''} >Entregado en buzón</li>
                </ul>
            </div>
        </div>
    )
}

export default Stepper;