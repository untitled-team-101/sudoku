import "./styles/Board.scss";
import frontImg from "./img/front.gif";
import backImg from "./img/back.gif";

import Cell from "./Cell";
import { useEffect, useState } from "react";

import { setCellSelectionFunction } from "./context/SelectedCell";
import { setBoardStateFunction } from "./context/BoardState";
import {
  setSelectedCell,
  getSelectedCell,
  setCellSelection,
} from "./context/SelectedCell";

import { setBoardState } from "./context/BoardState";

const Board = ({
  sudokuArray,
  editable,
  solutionArray,
  difficulty,
  setDifficulty,
}) => {
  // console.log(solutionArray)
  // console.log(sudokuArray)
  // console.log(editable)
  console.log("reset board", sudokuArray);
  const [board, setBoard] = useState(sudokuArray);
  useEffect(() => {
    setBoard(sudokuArray);
  });
  if (JSON.stringify(board) === JSON.stringify(solutionArray)) {
    if (difficulty < 5) setDifficulty(difficulty + 1);
  }
  const [count, setCount] = useState(0);
  const [selection, setSelection] = useState([-1, -1]);
  setBoardStateFunction(setBoard);
  setCellSelectionFunction(setSelection);
  let cells = [];
  console.log(
    solutionArray.map((a, i) => {
      return a + "/" + board[i] + "/" + sudokuArray[i];
    })
  );
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

  let backClick = () => {
    document.getElementById("board").classList.add("animate");
    setTimeout(() => {
      window.location = "/#/credits";
    }, 7000);
  };
  let arr = [];
  arr.push(<span className="tooltiptext">LOL</span>);
  arr.push(<span className="tooltiptext">Neeche to Dekho !!!</span>);
  arr.push(<span className="tooltiptext">Abe Chutiye!!</span>);
  arr.push(<span className="tooltiptext">Scroll kar nallay !!!</span>);

  const unsetStyling = {
    visibility: "unset",
  };

  const difficultyArray = ["", "xeasy", "easy", "medium", "hard", "done"];
  return (
    <div
      onWheel={() => {
        if (difficulty < 1) setDifficulty(1);
      }}
    >
      <div
        id={"boardContainer"}
        className={`boardContainer ${difficultyArray[difficulty]}`}
      >
        <div className={"board"} id={"board"}>
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
            onClick={() => {
              setCount(count + 1);
            }}
            className="page front tooltip"
            style={{
              backgroundImage: `url(${frontImg})`,
              backgroundPosition: "center",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
            }}
          >
            {arr[count]}
          </div>
          <div
            className="page back"
            id={"finalPage"}
            style={{
              backgroundImage: `url(${backImg})`,
              backgroundPosition: "center",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
            }}
            onClick={backClick}
          />
        </div>
      </div>
      <div className={"controls "}>
        <div className={"auto-pilot"}>
          <input
            type="checkbox"
            className="switch3"
            id="switch3"
            onInput={(e) => {
              document.querySelector(".board").classList.toggle("suggestion");
            }}
          />
          <label htmlFor="switch3" />
        </div>
        <div className={"hints"}>
          <i className="far fa-lightbulb-on" />
        </div>
        <div className={"refresh"}>
          <i className="fas fa-repeat-alt" />
        </div>
        <div className={"lose"}>
          <i className="fas fa-heart-broken" />
        </div>
      </div>
      <div className={"numpad "}>
        {[...Array(9)].map((val, i) => {
          return (
            <div
              className={"num"}
              id={"num-" + (i + 1)}
              onClick={() => {
                setBoardState((prevState) => {
                  prevState[getSelectedCell()?.index] = i + 1;
                  return [...prevState];
                });
              }}
            >
              {i + 1}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Board;
