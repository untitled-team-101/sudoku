"use strict";
import React from "react";

import { setSelectedCell, getSelectedCell } from "./context/SelectedCell";
import { setBoardState } from "./context/BoardState";

const bindToKeyboardInput = () => {
  document.addEventListener("keydown", (event) => {
    const selectedCell = getSelectedCell();
    if (!selectedCell) return;
    if (event.key === "Backspace")
      setBoardState((prevState) => {
        prevState[selectedCell.index] = 0;
        return [...prevState];
      });
    else {
      const inputKey = event.key * 1;
      if (!inputKey) return;
      if (inputKey < 1 || inputKey > 9) return;
      setBoardState((prevState) => {
        prevState[selectedCell.index] = inputKey;
        return [...prevState];
      });
    }
  });
};

bindToKeyboardInput();

function Cell({ number, index, editable }) {
  const onClickCell = (event) => {
    event.target.index = index;
    if (editable) setSelectedCell(event.target);
    else setSelectedCell(null);
  };
  return (
    <div className="cell" onClick={onClickCell}>
      {number === 0 ? "" : number}
    </div>
  );
}

export default Cell;
