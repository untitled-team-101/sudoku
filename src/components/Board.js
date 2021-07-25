import './styles/Board.scss'

const Board = () => {

    let arr = []
    for (let i = 0; i < 81; i++) {
        arr.push(<div className={'cell'}>1</div>)
    }

    return (
        <div className={'boardContainer'}>
            <div  className={'board'}>
                <div className="page top">

                </div>
                <div className="page bottom">

                </div>
                <div className="page left">

                </div>
                <div className="page right">

                </div>
                <div className="page front">

                </div>
                <div className="page back">

                </div>
            </div>
        </div>
    )
}

export default Board;