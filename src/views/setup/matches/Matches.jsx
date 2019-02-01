import React, { Fragment, useState, useEffect } from 'react';
import { GET_GAMES } from '../../../squares-core';
import Match from './match';
import './Matches.scss';

const Matches = () => {
  const [games, setGames] = useState(null);

  // const fetchGames = async () => {
  //   try {
  //     const {
  //       week: { games }
  //     } = await GET_GAMES();
  //     setGames(games);
  //   } catch (error) {
  //     console.error("SPORTS API -", error);
  //   }
  // };

  // useEffect(() => {
  //   fetchGames();
  // }, []);
  // Not sure if we need labels. games dont have labels. the original game doesn't either.

  return (
    <div className="matches">
      <div className="wrapper">
        {games && games.map(game => <Match key={game.id} {...game} />)}
      </div>
      {/* <div className="title">Select Event</div> */}
    </div>
  );
};

export default Matches;
