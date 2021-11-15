import React, { useContext, useEffect, useState } from "react";
import { useHistory } from "react-router-dom";

import "../css/navbar.css";

import { main } from "../state/mainState";

const Navbar = () => {
  let { state: globalState, dispatch } = useContext(main);
  let context = useContext(main);
  const history = useHistory();
  const [ isLogin, setIsLogin ] = useState();

  useEffect(() => {

  }, [])

  let handleNavigation = (url) => {
    history.push(url);
  };

  let handleLogOut = () => {
    setIsLogin(false)
    localStorage.clear();
    dispatch({ type: "SET_USER", payload: { admin: 0 } });
    history.push("/Homepage");
  };

  let renderLogInButton = () => {
    if (!localStorage.getItem('token')) {
      return (
        <a onClick={() => handleNavigation("/Login/")} target='_blank'>
          Iniciar Sesión
        </a>
      );
    }
  };

  let renderLogOutButton = () => {
    if (localStorage.getItem('token')) {
      return (
        <a onClick={() => handleLogOut()} target='_blank'>
          Cerrar Sesión
        </a>
      );
    }
  };

  let renderAdminButton = () => {
    if (localStorage.getItem('token')) {
      return (
        <a onClick={() => handleNavigation("/Admin/")} target='_blank'>
          Admin
        </a>
      );
    }
  };
  
  return (
    <React.Fragment>
      <div class='nav'>
        <input type='checkbox' id='nav-check' />
        <div class='nav-header'>
          <div class='nav-title' onClick={() => handleNavigation("/Homepage")}>
            <img
              src='https://i.ibb.co/0255Nmc/imagotipo-amarillo.png'
              className='pic_demensions'
            />
          </div>
        </div>
        <div class='nav-btn'>
          <label for='nav-check'>
            <span></span>
            <span></span>
            <span></span>
          </label>
        </div>
        <div class='nav-links'>
          <a data-testid='go_home' onClick={() => handleNavigation("/Home")}>
            Inicio
          </a>
          <a onClick={() => handleNavigation("/Track")} target='_blank'>
            Rastrear
          </a>
          <a onClick={() => handleNavigation("/Request")} target='_blank'>
            Solicitar
          </a>
          {renderAdminButton()}
          {renderLogInButton()}
          {renderLogOutButton()}
        </div>
      </div>
    </React.Fragment>
  );
};

export default Navbar;
