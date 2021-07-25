import './styles/Board.scss'

import Cell from './Cell'
import {useState} from "react";

const Board = () => {
    const [board, setBoard] = useState([])
    let cells = []
    for(let i=0;i<81;i++){
        cells.push( <Cell number={i%9} setBoard={setBoard}/> )
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