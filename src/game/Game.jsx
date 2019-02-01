import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Board from '../views/board';
import Setup from '../views/setup';

export default function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Setup} />
        <Route path="/:gameId" component={Board} />
      </Switch>
    </div>
  );
}
