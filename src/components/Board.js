import "./styles/Board.scss";

import Cell from "./Cell";
import { useState } from "react";

import { setBoardStateFunction } from "./context/BoardState";

const Board = ({ sudokuArray, editable }) => {
  const [board, setBoard] = useState(sudokuArray);
  setBoardStateFunction(setBoard);
  let cells = [];
  for (let i = 0; i < board.length; i++) {
    cells.push(
      <Cell
        number={board[i]}
        index={i}
        setBoard={setBoard}
        editable={editable[i]}
        key={i}
      />
    );
  }
  return (
    <div className={"boardContainer"}>
      <div className={"board"}>{cells}</div>
    </div>
  );
};

export default Board;
