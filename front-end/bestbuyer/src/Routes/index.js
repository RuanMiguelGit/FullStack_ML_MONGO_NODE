import React from 'react';
import { BrowserRouter,  Switch, Route, Redirect } from 'react-router-dom';
import Main from '../Pages/Main';
import Login from '../Pages/Login';
import Register from '../Pages/Register';

function Routes() {
  return (
    <div>
    <BrowserRouter>
      <Switch>
        <Route exact path="/main" component={ Main } />
        <Route exact path="/register" component={ Register } />
        <Route path={ ['/login'] } component={ Login } />
        <Route path="/">
          <Redirect to="/login" />
        </Route>
      </Switch>
    </BrowserRouter >
    </div>
  );
}

export default Routes;