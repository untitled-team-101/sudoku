import step1Img1 from "../../imgs/step1.png";
import step2Img2 from "../../imgs/step3.jpg";
import {Link} from "react-router-dom";

import './styles/step2.scss'

const Step2 = () => {

    return (

        <div className={'step2'}>
            <div>
                <div className={'step2Title'}>
                    <h1>How To Play</h1>
                </div>
                <div className={'step2Containers'}>

                    <div className={'step2Container1'}>
                        <div className={'step2Para1'}>
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
                        <div className={'step2Image1'}>
                            <img className={'image'} src={step1Img1} alt={'Failed to load image'}/>
                        </div>
                    </div>

                    <div className={'step2Container2'}>

                        <div className={'step2Image2'}>
                            <img className={'image'} src={step2Img2} alt={'Failed to load image'}/>
                        </div>

                        <div className={'step2Para2'}>
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
                                </div></p>
                        </div>
                    </div>
                </div>
                <div className={'step2Btns'}>
                    <Link to={'/game'}>
                        <div className={'step2PlayBtn'}>Play</div>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Step2;