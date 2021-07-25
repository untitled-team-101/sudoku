import Board from "./Board";

import "./styles/Game.scss";

const Game = () => {
  const s =
    "000051030005000040074002000496070300700208900208009475001007890827590160640010500";
  const gameMatrix = s.split("").map((x) => parseInt(x));
  return (
    <div className={"gamePage"}>
      <Board gameMatrix={gameMatrix} />
    </div>
  );
};

export default Game;
