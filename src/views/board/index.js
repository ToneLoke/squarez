import React, { useState } from 'react';
import { generateSquares } from '../../squares-core';
import './Board.scss';
import '../setup/matches/match/Match.scss';
import Match from '../setup/matches/match';

const SquareRenderer = generateSquares(36);

function lookupStatus(status) {
  const squareStates = ['empty', 'pending', 'approved', 'cancel'];
  return squareStates[status];
}

const InnerSquare = ({ data }) => {
  const [status, setStatus] = useState(0);

  const squareStatus = lookupStatus(status);
  return (
    <div
      className={`item ${squareStatus}`}
      data-status={squareStatus}
      onClick={() => setStatus(status + 1)}
      role="button"
    >
      {data}
    </div>
  );
};

const Square = (data, boxId) => (
  <div className="cell" key={boxId} id={boxId}>
    <InnerSquare data={data} />
  </div>
);

const board = SquareRenderer(Square);

const GameBoard = () => {
  const [squares, setSquares] = useState(board);

  // TODO: dynamically create
  const game = {
    scheduled: '',
    broadcast: '',
    scoring: '',
    home: { name: 'Los Angeles Rams' },
    away: { name: 'New England Patriots' },
  };

  return (
    <div className="board-container">
      <Match {...game} />
      <div className="board">{squares}</div>
    </div>
  );
};

export default GameBoard;
