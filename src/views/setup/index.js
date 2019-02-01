import React from 'react';
import Setup from './Setup';
import { GameSetupProvider } from './SetupContext';

export default () => (
  <GameSetupProvider>
    <Setup />
  </GameSetupProvider>
);
