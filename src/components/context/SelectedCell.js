"use strict"
let selectedCell = null
export const setSelectedCell = (cell) => {
  selectedCell = cell
}

export const getSelectedCell = () =>{
  return selectedCell
}

let cellSelectionFunction = ()=>{}
export const setCellSelectionFunction = (func) => {
  cellSelectionFunction = func
}

export const setCellSelection = (state) => {
  cellSelectionFunction(state)
}