import React, { Component } from 'react';

import '../css/homepage.css'
import '../css/form.css'

const Homepage = props => {

    let submitForm = (e) => {
        console.log('hello')
    }

    return ( 
        <React.Fragment>
            <div class="landing-page">
                <div class="container">
                    <div class="info">
                        <h1>Seguimiento de Reparaciones</h1>
                        <p>Introduce aqui tu nombre y numero de pedido para consultar el estado actual de tus Gatas</p>
                        <form id='myform' onSubmit={submitForm}>
                            <input className='form_fields' type='text' placeholder='Nombre'/>
                            <input className='form_fields' type='text' placeholder='Numero'/>
                        </form>
                        <button>Button name</button>
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