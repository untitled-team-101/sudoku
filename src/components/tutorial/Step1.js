import step1Img from '../../imgs/step1.png'
import step2Img from '../../imgs/step2.jpg'
import './styles/Step1.scss'

const Step1 = () => {

    return (
        <div className={'step1'}>
            <div>
                <div className={'step1Title'}>
                    <h1>How To Play</h1>
                </div>
                <div className={'step1Containers'}>

                    <div className={'step1Container1'}>
                        <div className={'step1Para'}>
                            <p className={'para'}>Sudoku is played on a grid of 9 x 9 spaces. Within the rows and
                                columns are 9 “squares” (made
                                up of 3 x 3 spaces). Each row, column and square (9 spaces each) needs to be filled out
                                with
                                the numbers 1-9, without repeating any numbers within the row, column or square. Does it
                                sound complicated? As you can see from the image below of an actual Sudoku grid, each
                                Sudoku
                                grid comes with a few spaces already filled in; the more spaces filled in, the easier
                                the
                                game – the more difficult Sudoku puzzles have very few spaces that are already filled
                                in.</p>
                        </div>
                        <div className={'step1Image'}>
                            <img className={'image'} src={step1Img} alt={'Failed to load image'}/>
                        </div>
                    </div>

                    <div className={'step1Container1'}>
                        <div className={'step1Para'}>
                            <div className={'step1Image'}>
                                <img className={'image'} src={step2Img} alt={'Failed to load image'}/>
                            </div>
                            <p className={'para'}>As you can see, in the upper left square (circled in blue), this
                                square already has 7 out of the 9 spaces filled in. The only numbers missing from the
                                square are 5 and 6. By seeing which numbers are missing from each square, row, or
                                column, we can use process of elimination and deductive reasoning to decide which
                                numbers need to go in each blank space.

                                For example, in the upper left square, we know we need to add a 5 and a 6 to be able to
                                complete the square, but based on the neighboring rows and squares we cannot clearly
                                deduce which number to add in which space. This means that we should ignore the upper
                                left square for now, and try to fill in spaces in some other areas of the grid
                                instead.</p>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Step1;