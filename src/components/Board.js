import './styles/Board.scss'

const Board = () => {

    let arr = []
    for (let i = 0; i < 81; i++) {
        arr.push(<div className={'cell'}>1</div>)
    }

    return (
        <>
            <div className={'boardContainer'}>
                <div className={'board'}>
                    <div className="page top">
                        {
                            [...Array(81)].map((value, index) => {
                                return (
                                    <div className={'cell'} key={index}>{index}</div>

                                )
                            })
                        }
                    </div>
                    <div className="page bottom">
                        {
                            [...Array(81)].map((value, index) => {
                                return (
                                    <div className={'cell'} key={index}>{index}</div>

                                )
                            })
                        }
                    </div>
                    <div className="page left">
                        {
                            [...Array(81)].map((value, index) => {
                                return (
                                    <div className={'cell'} key={index}>{index}</div>

                                )
                            })
                        }
                    </div>
                    <div className="page right">
                        {
                            [...Array(81)].map((value, index) => {
                                return (
                                    <div className={'cell'} key={index}>{index}</div>

                                )
                            })
                        }
                    </div>
                    <div className="page front">
                        Welcome Page!
                    </div>
                    <div className="page back">
                        Final Page
                    </div>
                </div>
            </div>

        </>
    )
}

export default Board;