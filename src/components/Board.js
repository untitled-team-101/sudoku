import './styles/Board.scss'

const Board = () => {

    let arr = []
    for (let i = 0; i < 81; i++) {
        arr.push(<div className={'cell'}>1</div>)
    }

    return (
        <div className={'boardContainer'}>
            <div className={'board'}>
                <div className="page top">
                    Hard
                </div>
                <div className="page bottom">
                    Extra Easy
                </div>
                <div className="page left">
                    Medium
                </div>
                <div className="page right">
                    <div className={'cell'}>1</div>
                    <div className={'cell'}>2</div>
                    <div className={'cell'}>3</div>
                    <div className={'cell'}>4</div>
                    <div className={'cell'}>5</div>
                    <div className={'cell'}>6</div>
                    <div className={'cell'}>7</div>
                    <div className={'cell'}>8</div>
                    <div className={'cell'}>9</div>
                </div>
                <div className="page front">
                    Welcome Page!
                </div>
                <div className="page back">
                    Final Page
                </div>
            </div>
        </div>
    )
}

export default Board;