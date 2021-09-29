import React from 'react';

const Stepper = props => {
    return(
        <div>
            <div>
                <ul className="progressbar">
                    <li className={props.status >= 0 ? 'active' : '' } >Depositado</li>
                    <li className={props.status >= 1 ? 'active' : '' } >Recibido</li>
                    <li className={props.status >= 2 ? 'active' : '' } >En reparación</li>
                    <li className={props.status >= 3 ? 'active' : '' } >Inspeccionado</li>
                    <li className={props.status >= 4 ? 'active' : '' } >Entregado</li>
                </ul>
            </div>
        </div>
    )
}

export default Stepper;