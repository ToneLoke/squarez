import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Board from '../views/board';
import Setup from '../views/setup';
import '../views/squares-core/styles/index.scss';

export default function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Setup} />
        <Route exact path="/board/:Id" component={Board} />
      </Switch>
    </div>
  );
}
