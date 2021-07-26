import step1Img1 from '../../imgs/step1.png'
import step1Img2 from '../../imgs/step2.jpg'
import './styles/Step1.scss'
import {Link} from "react-router-dom";

const Step1 = () => {

    return (

        <div className={'step1'}>
            <div>
                <div className={'step1Title'}>
                    <h1>How To Play</h1>
                </div>
                <div className={'step1Containers'}>

                    <div className={'step1Container1'}>
                        <div className={'step1Para1'}>
                            <p className={'para'}>
                                <ul>
                                <li>Sudoku is played on a grid of 9 x 9 spaces. Within the rows and
                                    columns are 9 “squares” (made up of 3 x 3 spaces).
                                </li>
                                <br/>
                                <li>Each row, column and square (9 spaces each) needs to be filled out
                                    with the numbers 1-9, without repeating any numbers within the row, column or
                                    square.
                                </li>
                                <br/>
                                <li>Does it sound complicated? As you can see from the image below of an actual
                                    Sudoku grid, each
                                    Sudoku grid comes with a few spaces already filled in; the more spaces filled in,
                                    the easier
                                    the game – the more difficult Sudoku puzzles have very few spaces that are already
                                    filled
                                    in.
                                </li>
                                </ul>
                            </p>
                        </div>
                        <div className={'step1Image1'}>
                            <img className={'image'} src={step1Img1} alt={'Failed to load image'}/>
                        </div>
                    </div>

                    <div className={'step1Container2'}>

                        <div className={'step1Image2'}>
                            <img className={'image'} src={step1Img2} alt={'Failed to load image'}/>
                        </div>

                        <div className={'step1Para2'}>
                            <p className={'para'}>
                                <div>&#8226;Sudoku is played on a grid of 9 x 9 spaces. Within the rows and
                                    columns are 9 “squares” (made up of 3 x 3 spaces).
                                </div>
                                <br/>
                                <div>&#8226;Each row, column and square (9 spaces each) needs to be filled out
                                    with the numbers 1-9, without repeating any numbers within the row, column or
                                    square.
                                </div>
                                <br/>
                                <div>&#8226;Does it sound complicated? As you can see from the image below of an actual
                                    Sudoku grid, each
                                    Sudoku grid comes with a few spaces already filled in; the more spaces filled in,
                                    the easier
                                    the game – the more difficult Sudoku puzzles have very few spaces that are already
                                    filled
                                    in.
                                </div>
                            </p>
                        </div>
                    </div>
                </div>
                <div className={'step1Btns'}>
                    <Link to={'/step2'}>
                        <div className={'step1NextBtn'}>Next</div>
                    </Link>
                    <Link to={'/game'}>
                        <div className={'step1SkipBtn'}>Skip</div>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Step1;