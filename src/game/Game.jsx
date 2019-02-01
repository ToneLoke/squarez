import React from 'react';
import { Route, Switch, IndexRedirect } from 'react-router-dom';
import Board from '../views/board';
import Setup from '../views/setup';

export default function App() {
  return (
    <div className="App">
      <Switch>
        <IndexRedirect to="/setup" />
        <Route exact path="/setup" component={Setup} />
        <Route exact path="/board/:Id" component={Board} />
      </Switch>
    </div>
  );
}
