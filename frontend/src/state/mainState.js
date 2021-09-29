import { createContext } from 'react';


const initialState = {
    pedidos: [],
    pedido: {},
    admin: 0,
    test: ''
};

const main = createContext(initialState)

const mainStateReducer = (state, action) => {
    switch (action.type) {
        case 'SET_PEDIDO':
            return { ...state, pedidos: action.payload.pedidos };
        case 'SET_TEST':
            return {...state, test: action.payload.test};
        case 'FIND_PEDIDO':
            let data = action.payload;
            let pedido = state.pedidos.filter(item => item.num_pedido  === data.id && data.apellido);
            let pedidoRes = pedido.length ? pedido[0] : undefined;
            return { ...state, pedido: pedidoRes };
        case 'LOG_OUT':
            return {...state, test: action.payload.admin}
        default: 
            return state
    }
}

export {main, mainStateReducer}