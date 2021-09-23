import React, { Component, useContext } from 'react';
import { useHistory } from "react-router-dom";

import '../css/navbar.css'

import { main } from "../state/mainState";

const Navbar = () => {
    let { state: globalState, dispatch } = useContext(main);

    const history = useHistory()

    let handleNavigation = (url) => {
        history.push(url)
    }

    let handleLogOut = () => {
        dispatch({ type: "SET_USER", payload: { admin: 0}});
        history.push('/Homepage')
    }

    let renderLogInButton = () => {
        if(globalState.admin == 0) {
            return <a onClick={() => handleNavigation('/Login/')} target="_blank">Iniciar Sesion</a>
        }
    }

    let renderLogOutButton = () => {
        if(globalState.name == 1) {
            return <a onClick={() => handleLogOut()} target="_blank">Cerrar sesión</a>
        }
    }

    let renderAdminButton = () => {
        if(globalState.admin == 1) {
            return <a onClick={() => handleNavigation('/Admin/')} target="_blank">Iniciar Sesion</a>
        }
    }

    return (  
        <React.Fragment>
            <div class="nav">
                <input type="checkbox" id="nav-check"/>
                <div class="nav-header">
                    <div class="nav-title" onClick={() => handleNavigation('/Homepage')}>
                        <img src='https://i.ibb.co/0255Nmc/imagotipo-amarillo.png' className='pic_demensions'/>
                    </div>
                </div>
                <div class="nav-btn">
                    <label for="nav-check">
                    <span></span>
                    <span></span>
                    <span></span>
                    </label>
                </div>
                <div class="nav-links">
                    <a data-testid='go_home' onClick={() => handleNavigation('/Home')}>Home</a>
                    <a onClick={() => handleNavigation('/Track')} target="_blank">Track</a>
                    {renderAdminButton()}
                    {renderLogInButton()}
                    {renderLogOutButton()}
                </div>
            </div>
        </React.Fragment>
    );
}
 
export default Navbar;