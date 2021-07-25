import Board from "./Board";

import "./styles/Game.scss";

const Game = ({ sudokuArrays, difficulty }) => {
  const index = Math.floor(Math.random() * 5);
  const sudokuString = sudokuArrays[difficulty][0][index];
  const solutionString = sudokuArrays[difficulty][1][index];
  const sudokuArray = sudokuString.split("").map((x) => parseInt(x));
  const solutionArray = solutionString.split("").map((x) => parseInt(x));
  const editable = sudokuArray.map((item) => {
    if (item === 0) return true;
    else return false;
  });

  return (
    <div className={"gamePage"}>
      <Board sudokuArray={sudokuArray} editable={editable} solutionArray={solutionArray} />
    </div>
  );
};

export default Game;
