import React, { createContext, useReducer } from 'react';

const GameSetupContext = createContext();

const initialState = {
  match: { home: {}, away: {} },
  settings: { price: 5, players: 25, exp: '' },
  host: { id: null, alias: null },
  step: 'matches',
  // NOTE: this board is pre activation
  board: { squares: {}, full: false },
};

//= ====================== STEP SAMPLE REDUCER PATTERN w/Context =======================
const actions = {
  step: { NEXT_STEP: 'NEXT_STEP' },
};

const changeStep = (state, step) => ({ ...state, step });
//= ====================== End of Step Actions/Reducers =======================

//= ====================== SETUP ALL REDUCERS =======================
const GameSetupReducers = (state, action) => {
  switch (action.type) {
  case actions.step.NEXT_STEP:
    return changeStep(state, action.payload);
  default:
    return state;
  }
};
//= ====================== END OF ALL REDUCERS =======================

//= ====================== GAME SETUP HOC =======================
const GameSetupProvider = ({ children }) => {
  const [state, dispatch] = useReducer(GameSetupReducers, initialState);
  const value = {
    state,
    dispatch,
  };

  return (
    <GameSetupContext.Provider value={value}>
      {children}
    </GameSetupContext.Provider>
  );
};
//= ====================== END OF GAME SETUP =======================

const { consumer: GameSetupConsumer } = GameSetupContext;

export {
  GameSetupContext, GameSetupProvider, GameSetupConsumer, actions,
};
