import "./styles/Board.scss";

import Cell from "./Cell";
import { useState } from "react";

import { setBoardStateFunction } from "./context/BoardState";
import { setCellSelectionFunction } from "./context/SelectedCell";

const Board = ({ sudokuArray, editable, solutionArray }) => {
  const [board, setBoard] = useState(sudokuArray);
  const [selection, setSelection] = useState([-1, -1])
  setBoardStateFunction(setBoard);
  setCellSelectionFunction(setSelection);
  let cells = [];
  for (let i = 0; i < board.length; i++) {
    cells.push(
      <Cell
        selection={selection}
        number={board[i]}
        index={i}
        setBoard={setBoard}
        editable={editable[i]}
        key={i}
        status={solutionArray[i] === board[i]}
      />
    );
  }
  return (
    <>
      <div className={"boardContainer"}>
        <div className={"board"}>
          <div className="page top">{cells}</div>
          <div className="page bottom">{cells}</div>
          <div className="page left">{cells}</div>
          <div className="page right">{cells}</div>
          <div className="page front">Welcome Page!</div>
          <div className="page back">Final Page</div>
        </div>
      </div>
    </>
  );
};

export default Board;
