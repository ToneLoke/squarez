import { matchRoutes } from 'react-router-config';
import helpers from './helpers';

const { getAllMatches, getBoard } = helpers;

const routes = [
  {
    //= ====================== "Props for routes" =======================
    loadData: undefined,
    routes: [
      {
        loadData: getAllMatches,
        path: '/',
        exact: true,
      },
      {
        loadData: getBoard,
        path: '/board/:id',
        exact: true,
      },
    ],
  },
];

//= ====================== PROMISE ERROR  =======================
function noOp() {
  console.error('**GET_DATA**');
}

export default function getData(path) {
  //= ====================== create promises from all routes??? =======================
  const matches = matchRoutes(routes, path);
  return (
    matches
      .filter(m => !!m.route.loadData)
    //= ====================== grab all  =======================
      .map(m => m.route.loadData().catch(noOp))
  );
}
