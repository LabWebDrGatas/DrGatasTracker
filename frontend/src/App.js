import React, {useReducer} from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';

import "./css/tailwind.css";

import Navbar from './component/navbar'
import Footer from './component/footer';
import Homepage from './pages/homepage'
import Admin from './pages/admin'
import Track_Item from './pages/track_item'
import Track from './pages/track'
import Login from './pages/login'
import Solicitud from './pages/solicitud';
import pedidosMock from './state/mockData';
import UpdatePedido from './pages/update_pedido'
import Table from './pages/table';

import {main, mainStateReducer} from './state/mainState'

function App() {

  let [mainState, stateDispatch] = useReducer(mainStateReducer, {
    pedidos: pedidosMock,
    pedido: {},
    admin: 0,
    test: ''
  })

  return (
    <React.Fragment>
      <main.Provider value={{ state: mainState, dispatch: stateDispatch }}>
        <Navbar />
        <Switch>
          <Route path='/Home' component={Homepage} />
          { localStorage.getItem('token') ? <Route path='/Admin' component={Admin} /> : null }
          { localStorage.getItem('token') ?  <Route path='/Table/' component={Table} /> : null }
          { localStorage.getItem('token') ? <Route path='/Update/:_id' component={UpdatePedido} /> : null }
          <Route path='/Request' component={Solicitud} />
          <Route path='/Track/:_id' component={Track_Item} />
          <Route path='/Track' component={Track} />
          <Route path='/Login' component={Login} />
          <Redirect from='/' to='/Home' />
        </Switch>
        <Footer />
      </main.Provider>
    </React.Fragment>
  );
}

export default App;
