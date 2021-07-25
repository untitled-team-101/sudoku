import './styles/Board.scss'

import Cell from './Cell'
import {useState} from "react";

import {setBoardStateFunction} from "./context/BoardState";

const Board = () => {
    const [board, setBoard] = useState([1,2,3,4,5])
    setBoardStateFunction(setBoard)
    let cells = []
    for(let i=0;i<board.length;i++){
      console.log(board)
        cells.push( <Cell number={board[i]} index={i} setBoard={setBoard} key={i}/> )
    }
    return(
        <div className={'boardContainer'}>
            <div className={'board'}>
                {cells}
            </div>
        </div>
    )
}

export default Board;