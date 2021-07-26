import "./styles/Board.scss";
import frontImg from "./img/front.gif";
import backImg from "./img/back.gif";

import Cell from "./Cell";
import {useState} from "react";

import {setBoardStateFunction} from "./context/BoardState";

const Board = ({sudokuArray, editable, solutionArray, difficulty}) => {
    const [board, setBoard] = useState(sudokuArray);

    setBoardStateFunction(setBoard);
    let cells = [];
    for (let i = 0; i < board.length; i++) {
        cells.push(
            <Cell
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
        document.getElementById('board').classList.add('animate');
        setTimeout(()=>{
            window.location = '/#/credits'
        },7000);
    }
    return (
        <>
            <div id={'boardContainer'} className={"boardContainer"}>
                <div className={"board suggestion"} id={'board'}>
                    <div className="page top" id={'hard'}>{cells}</div>
                    <div className="page bottom" id={'xeasy'}>{cells}</div>
                    <div className="page left" id={'medium'}>{cells}</div>
                    <div className="page right" id={'easy'}>{cells}</div>
                    <div className="page front" style={{
                        backgroundImage: `url(${frontImg})`,
                        backgroundPosition: 'center',
                        backgroundSize: 'cover',
                        backgroundRepeat: 'no-repeat'
                    }}/>
                    <div className="page back" id={'finalPage'} style={{
                        backgroundImage: `url(${backImg})`,
                        backgroundPosition: 'center',
                        backgroundSize: 'cover',
                        backgroundRepeat: 'no-repeat'
                    }} onClick={backClick} />
                </div>
            </div>
            <div className={'controls '}>
                <div className={'auto-pilot'}>
                    <input type="checkbox" className="switch3" id="switch3"/>
                    <label htmlFor="switch3"/>
                </div>
                <div className={'hints'}>
                    <i className="far fa-lightbulb-on"/>
                </div>
                <div className={'refresh'}>
                    <i className="fas fa-repeat-alt"/>
                </div>
                <div className={'lose'}>
                    <i className="fas fa-heart-broken"/>

                </div>
            </div>
            <div className={'numpad '}>
                {
                    [...Array(9)].map((val,i)=>{
                        return(
                        <div className={'num'} id={'num-'+(i+1)}>{i+1}</div>
                        )
                    })
                }
            </div>
        </>
    );
};

export default Board;
