import React, { useState, useEffect, useContext } from 'react';
import { GET_GAMES } from '../../../squares-core';
import { GameSetupContext } from '../SetupContext'
import Match from './match';
import './Matches.scss';

export function loadData() {
  return GET_GAMES()
}

const Matches = () => {
  const [games, setGames] = useState([]);
  const { state } = useContext(GameSetupContext);

  useEffect(() => {
    if (!state || !state.games) {
      loadData().then(({ week: { games } }) => {
        console.log('inside api call', games)
        setGames(games);
      });
    }
  }, []);

  // Not sure if we need labels. games dont have labels. the original game doesn't either.
  console.log(games)
  return (
    <div className="matches">
      <div className="wrapper">
        {games && games.map(game => <Match key={game.id} {...game} />)}
      </div>
      <div className="title">Select Event</div>
    </div>
  );
};

export default Matches;
