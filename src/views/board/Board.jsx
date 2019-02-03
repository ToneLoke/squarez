import React, { useState } from 'react';
import { helpers } from '../../common';
import './Board.scss';

const { generateSquares } = helpers;

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
  return (
    <div className="board-wrapper">
      <div className="board-container">
        <div className="board">{squares}</div>
      </div>
    </div>
  );
};

export default GameBoard;
