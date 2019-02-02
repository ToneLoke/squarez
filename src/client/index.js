/* eslint-disable no-undef */
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from '../game';
import { StaticContext, getData } from '../common';

const path = window.document.location.pathname
// const Provider = path.indexOf('/setup') > -1 ? SetupProvider : GameProvider
const promises = getData(path);
const data = {};
Promise.all(promises).then((responses) => {
  responses.forEach((r) => {
    if (r) Object.assign(data, r);
  });

  ReactDOM.hydrate(
    <StaticContext.Provider value={data}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </StaticContext.Provider>,
    document.getElementById('root'),
  )
});
