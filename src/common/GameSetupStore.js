import React, { createContext, useReducer } from 'react';
// import { helpers } from '.';

const GameSetupContext = createContext();

const initialState = {
  match: {
    id: null, home: {}, away: {}, network: null,
  },
  matches: [],
  price: 5,
  players: 25,
  host: { id: null, alias: null },
  error: null,
};

const actions = {
  SET_MATCH: 'SET_MATCH',
  SET_PRICE: 'SET_PRICE',
  SET_HOST: 'SET_HOST',
  SUBMIT_GAME: 'SUBMIT_GAME',
}

const reducer = (state, action) => {
  switch (action.type) {
  case 'SET_MATCH':
    return { ...state, match: { ...state.match, ...action.payload } };
  case 'SET_PRICE':
    return { ...state, price: action.payload };
  case 'SET_HOST':
    return { ...state, host: { ...state.host, ...action.payload } };
  case 'SUBMIT_GAME':
    console.log('SUBMIT_GAME');
    return { ...initialState }
  default:
    return state
  }
};

//= ====================== GAME SETUP HOC =======================
export default function GameSetupProvider({ children, value: matches }) {
  const [state, dispatch] = useReducer(reducer, { ...initialState, matches });
  const value = { state, dispatch };

  return (
    <GameSetupContext.Provider value={value}>
      {children}
    </GameSetupContext.Provider>
  );
}
//= ====================== END OF GAME SETUP =======================

//= ====================== NOTE: For components to use =======================
const { consumer: GameSetupConsumer } = GameSetupContext;

export {
  GameSetupContext, GameSetupConsumer, actions,
};
