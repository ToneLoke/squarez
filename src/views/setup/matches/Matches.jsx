import React, { useState, useEffect } from 'react';
import { Match } from '../../squares-core/components';
import './Matches.scss';

const Matches = ({ games }) => (
  <div className="matches">
    <div className="wrapper">
      {games && games.map(game => <Match key={game.id} {...game} />)}
    </div>
  </div>
);

export default Matches;
