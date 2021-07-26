import "./styles/Board.scss";
import frontImg from "./img/front.gif";

import Cell from "./Cell";
import { useState } from "react";

import { setBoardStateFunction } from "./context/BoardState";
import { setCellSelectionFunction } from "./context/SelectedCell";

const Board = ({
  sudokuArray,
  editable,
  solutionArray,
  difficulty,
  setDifficulty,
}) => {
  const [board, setBoard] = useState(sudokuArray);
  if (JSON.stringify(board) === JSON.stringify(solutionArray)) {
    setDifficulty(difficulty+1);
  }
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
  const difficultyArray = ["", "xeasy", "easy", "medium", "hard", "done"];
  return (
    <div onWheel = {() => {
      console.log("CHLRA");
      setDifficulty(1);
    }}> 

      <div id={"boardContainer"} className={`boardContainer ${difficultyArray[difficulty]}`}>
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
    </div>
  );
};

export default Board;
