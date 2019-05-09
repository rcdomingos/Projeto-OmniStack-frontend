import React from 'react';
//componente para configurar as rotas das paginas
import {BrowserRouter, Route, Switch} from 'react-router-dom';

import Main from './pages/Main';
import Box from './pages/Box';

const Routes = () =>(
  //informar como o navegar vai enteder as rotas
  <BrowserRouter>
    <Switch>
      <Route path="/" exact component={Main}/>
      <Route path="/box/:id" component={Box}/>

    </Switch>
  </BrowserRouter>
);

export default Routes;