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

let gameCompleted = false;

const Board = ({
  sudokuArray,
  editable,
  solutionArray,
  difficulty,
  setDifficulty,
  setGameCount,
}) => {
  // console.log(solutionArray)
  // console.log(sudokuArray)
  // console.log(editable)
  // console.log("reset board", sudokuArray);
  const [board, setBoard] = useState(sudokuArray);
  useEffect(() => {
    setBoard(sudokuArray);
  });
  if (board.length > 10) {
    let newCompleted = JSON.stringify(board) === JSON.stringify(solutionArray);
    if (newCompleted && !gameCompleted)
      if (difficulty > 0 && difficulty < 3)
        setTimeout(() => {
          alert("CONGRATULATIONS !!!\nScroll Down for Next Level !!");
        }, 100);
      else if (difficulty === 5) {
        alert("CONGRATULATIONS !!!\nYOU WON THE GAME !!!");
      }
    gameCompleted = newCompleted;
  }
  const [count, setCount] = useState(0);
  const [selection, setSelection] = useState([-1, -1]);
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

  let backClick = () => {
    document.getElementById("board").classList.add("animate");
    setTimeout(() => {
      window.location = "/#/credits";
    }, 7000);
  };
  let arr = [];
  arr.push(<span className="tooltiptext">Hello there!!</span>);
  arr.push(<span className="tooltiptext">Don't know how to proceed??</span>);
  arr.push(<span className="tooltiptext">Well, Try some more!!!</span>);
  arr.push(<span className="tooltiptext">LOL!! Scroll to proceed!!</span>);

  const unsetStyling = {
    visibility: "unset",
  };

  const difficultyArray = ["", "xeasy", "easy", "medium", "hard", "done"];
  return (
    <div
      onWheel={() => {
        if ((gameCompleted && difficulty < 5) || difficulty < 1)
          setDifficulty(1 + difficulty);
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
      {difficulty > 0 && difficulty < 5 ? (
        <>
          <div className={"controls "}>
            <div className={"auto-pilot tooltipGame"}>
              <span className="tooltiptextGame">Auto Check</span>
              <input
                type="checkbox"
                className="switch3"
                id="switch3"
                onInput={(e) => {
                  document
                    .querySelector(".board")
                    .classList.toggle("suggestion");
                }}
              />
              <label htmlFor="switch3" />
            </div>
            <div className={"hints tooltipGame"}>
              <span className="tooltiptextGame">Auto Solve</span>
              <i
                className="far fa-lightbulb-on"
                onClick={() => {
                  for (let i in board) {
                    if (board[i] !== solutionArray[i]) {
                      board[i] = solutionArray[i];
                      break;
                    }
                  }
                  setBoard([...board]);
                }}
              />
            </div>
            <div className={"refresh tooltipGame"}>
              <span className="tooltiptextGame">New Game</span>
              <i
                className="fas fa-repeat-alt"
                onClick={() => {
                  setGameCount((a) => a + 1);
                }}
              />
            </div>
            <div className={"lose tooltipGame"}>
              <span className="tooltiptextGame">Show Solution</span>
              <i
                className="fas fa-heart-broken"
                onClick={() => {
                  for (let i in board) {
                    if (board[i] !== solutionArray[i]) {
                      board[i] = solutionArray[i];
                    }
                  }
                  setBoard([...board]);
                }}
              />
            </div>
          </div>
          <div className={"numpad "}>
            {[...Array(9)].map((val, i) => {
              return (
                <div
                  key={i}
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
        </>
      ) : (
        ""
      )}
    </div>
  );
};

export default Board;
