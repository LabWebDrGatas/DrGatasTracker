import React, {useReducer} from 'react';
import { Redirect, Route, Switch } from "react-router-dom";

import Navbar from './component/navbar'
import Homepage from './pages/homepage'
import Admin from './pages/admin'
import Track_Item from './pages/track_item'
import Track from './pages/track'
import Login from './pages/login'



import {main, mainStateReducer} from './state/mainState'

function App() {

  let [mainState, stateDispatch] = useReducer(mainStateReducer, {
    pedidos: [],
    pedido: {},
    admin: 0,
    test: ''
  })

  return (
    <React.Fragment>
      <main.Provider value={{state:mainState, dispatch: stateDispatch}}>
        <Navbar/>
          <Switch>
            <Route path='/Home' component={Homepage} />
            <Route path='/Admin' component={Admin} />
            <Route path='/Track/:_id' component={Track_Item} />
            <Route path='/Track' component={Track} />
            <Route path='/Login' component={Login} />
            <Redirect from='/' to='/Home' />
          </Switch>
      </main.Provider>

    </React.Fragment>
  );
}

export default App;
