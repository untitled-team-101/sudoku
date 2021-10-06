"use strict";
import React from "react";

import { setSelectedCell, getSelectedCell, setCellSelection } from "./context/SelectedCell";
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

function createClass(index, selection, editable, prevClass) {
  if (editable){
    prevClass += " editable"
  }
  if (index % 9 === 2 || index % 9 === 5) {
    prevClass += " border-right";
  }
  if (index % 9 === 3 || index % 9 === 6) {
    prevClass += " border-left";
  }
  if (index >= 18 && index <= 26) {
    prevClass += " border-bottom";
  }
  if (index >= 45 && index <= 53) {
    prevClass += " border-bottom";
  }
  if (index >= 27 && index <= 35) {
    prevClass += " border-top";
  }
  if (index >= 54 && index <= 62) {
    prevClass += " border-top";
  }
  if(selection < 0)
    return prevClass;
  if((index % 9 === selection % 9) && ( Math.floor(index / 9)  === Math.floor(selection / 9) % 9) ){
    return prevClass + ' selected'
  }
  if((index % 9 === selection % 9) || ( Math.floor(index / 9)  === Math.floor(selection / 9) % 9) ){
    return prevClass + ' highlighted'
  }
  return prevClass
}

function Cell({ number, index, editable, status, selection }) {
  // console.log(index, status)
  const onClickCell = (event) => {
    event.target.index = index;
    if (editable) {
      setSelectedCell(event.target)
      setCellSelection(index)
    }
    else {
      setSelectedCell(null)
      setCellSelection(-1)
    }
  }
  return (
    <div
      className={createClass(
        index, selection, editable,
        !editable || number === 0
          ? "cell"
          : status
          ? "cell correct"
          : "cell incorrect"
      )}
      onClick={onClickCell}
    >
      {number === 0 ? "" : number}
    </div>
  );
}

export default Cell;
