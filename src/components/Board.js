import './styles/Board.scss'
const Board = () => {

    let arr = []
    for(let i=0;i<81;i++){
        arr.push(<div className={'cell'}>1</div>)
    }

    return(
        <div className={'boardContainer'}>
            <div className={'board'}>
                {
                    arr
                }
            </div>
        </div>
    )
}

export default Board;