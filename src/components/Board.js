import "./styles/Board.scss";
import frontImg from "./img/front.gif";

import Cell from "./Cell";
import { useState } from "react";

import { setBoardStateFunction } from "./context/BoardState";

const Board = ({ sudokuArray, editable, solutionArray, difficulty }) => {
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
        status={solutionArray[i] === board[i]}
      />
    );
  }
  return (
    <>
      <div id={"boardContainer"} className={"boardContainer"}>
        <div className={"board suggestion"}>
          <div className="page top" id={"hard"}>
            {cells}
          </div>
          <div className="page bottom" id={"xeasy"}>
            {cells}
          </div>
          <div className="page left" id={"medium"}>
            {cells}
          </div>
          <div className="page right" id={"easy"}>
            {cells}
          </div>
          <div
            className="page front"
            style={{
              backgroundImage: `url(${frontImg})`,
              backgroundPosition: "center",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
            }}
          />
          <div className="page back">Final Page</div>
        </div>
      </div>
      <div className={"controls"}></div>
    </>
  );
};

export default Board;
