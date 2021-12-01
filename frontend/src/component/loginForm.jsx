import React, { useState, useContext } from 'react'
import { main } from '../state/mainState'; 
import Button from "./button";
import Modal from './modal';
import TextInput from "./textInput";
import { useHistory } from "react-router";
import { apiAddress } from '../connections';

export const LoginForm = ({ handleSubmit }) => {
  let context = useContext(main);
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [errorModal, setErrorModal] = useState(false);
  const history = useHistory();
  const handleRequestLogin = (e) => {
    e.preventDefault()
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email: email, password: password })
    };
    fetch(apiAddress + "/loginAdmin", requestOptions)
      .then(res => {
        if (res.status !== 200) {
          throw new Error();
        } else {
          return (res.json());
        }
      })
      .then(
        (result) => {
          context.dispatch({type: "LOGIN", payload: {token: result.token}})
          history.push('/Admin');
        },
        (error) => {
          setErrorModal(true);
        }
      )
    // = context.dispatch({type: "FIND_PEDIDO", payload: {id: "yes", lastname: "yes"}})
  }
  return (
    <div class='container border rounded shadow-md grid grid-cols-6 gap-4'>
      <div class='col-start-2 col-span-4'>
        <h1>Iniciar Sesión</h1>
        <form onSubmit={handleSubmit}>
          <div className='flex flex-col'>
            <label
              className='block mb-2 text-sm font-bold text-gray-700'
              htmlFor='username'
            >
              Usuario
            </label>
            <TextInput
              className=''
              id='username'
              type='text'
              placeholder='Usuario'
              onChange={(e) => {setEmail(e.target.value)}}
            />
          </div>
          <div className='flex flex-col'>
            <label
              className='block mb-2 text-sm font-bold text-gray-700'
              htmlFor='password'
            >
              Contraseña
            </label>
            <TextInput
              id='password'
              type='password'
              placeholder='Contraseña'
              onChange={(e) => {setPassword(e.target.value)}}
            />
          </div>
          <div className='flex justify-end'>
            <Button type='submit' text='Login' onClick={handleRequestLogin}/>
          </div>
        </form>
      </div>
      <Modal
        isVisible={errorModal}
        body={<h6>Correo o contraseña es incorrecto</h6>}
        onClose={()=> {setErrorModal(false)}}
      />
    </div>
  );
};
