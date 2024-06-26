/* eslint-disable no-param-reassign */
import React from 'react';
import ReactDOM from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import Helmet from 'react-helmet'; // SEO && TEXT DATA
import App from '../game';
import getData from '../common/getData';

export default function renderer(html, path, context) {
  const promises = getData(path);
  context.data = {};

  return Promise.all(promises).then((responses) => {
    responses.forEach((r) => {
      if (r) Object.assign(context.data, r);
    });

    const serverHtml = ReactDOM.renderToString(
      <StaticRouter location={path} context={context}>
        <App />
      </StaticRouter>,
    );
    const regex = /(<div id="root">)(<\/div>)/;
    html = html.replace(regex, (original, div1, div2) => div1 + serverHtml + div2);
    const helmet = Helmet.renderStatic();
    const head = helmet.title.toString() + helmet.meta.toString();
    const index = html.indexOf('</head>');
    const html1 = html.slice(0, index);
    const html2 = html.slice(index);
    return html1 + head + html2;
  });
}
