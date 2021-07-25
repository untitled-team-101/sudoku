"use strict"
export const haveDuplicateInColumn = (board, startRow, col, n) => {
  for(let i = startRow-1; i >= 0; i--){
    if(board[i][col] === n)
      return true
  }
  return false
}

export const haveDuplicateInRow = (board, row, startCol, n) => {
  for(let i = startCol-1; i >= 0; i--){
    if(board[row][i] === n)
      return true
  }
  return false
}

export default function createRandomBoard(){
  const array = []
  for(let i = 0; i < 9; i++){
    array[i] = []
    for(let j = 0; j < 9; j++){
      let n = (Math.floor(18 * Math.random()) % 9) + 1
      if (haveDuplicateInColumn(array, i, j, n) || haveDuplicateInRow(array, i, j, n)){
        n = (Math.floor(18 * Math.random()) % 9) + 1
      }
      array[i][j] = n
    }
  }
  return array
}
