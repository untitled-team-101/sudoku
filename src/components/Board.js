import "./styles/Board.scss";

import Cell from "./Cell";
import { useState } from "react";

const Board = ({ gameMatrix }) => {
  const [board, setBoard] = useState(gameMatrix);
  let cells = [];
  for (let i = 0; i < board.length; i++) {
    cells.push(<Cell number={board[i]} index={i} setBoard={setBoard} />);
  }
  return (
    <div className={"boardContainer"}>
      <div className={"board"}>{cells}</div>
    </div>
  );
};

export default Board;
