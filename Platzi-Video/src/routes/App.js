import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from '../containers/Home';
import Login from '../containers/Login';
import Register from '../containers/Register';
import NotFount from '../containers/NotFount';

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path='/' component={Home} />
      <Route exact path='/Login' component={Login} />
      <Route exact path='/Register' component={Register} />
      <Route exact path='/NotFount' component={NotFount} />
    </Switch>
  </BrowserRouter>
);

export default App;
