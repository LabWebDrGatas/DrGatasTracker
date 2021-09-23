import React, { Component, createContext } from 'react';

const initialState = {
    pedidos: [],
    pedido: {},
    admin: 0,
    test: ''
};

const main = createContext(initialState)

const mainStateReducer= (state, action) => {
    switch (action.type) {
        case 'SET_PEDIDO':
            return { ...state, pedidos: action.payload.pedidos };
        case 'SET_TEST':
            return {...state, test: action.payload.test}
        case 'LOG_OUT':
            return {...state, test: action.payload.admin}
        default: 
            return state
    }
}

export {main, mainStateReducer}