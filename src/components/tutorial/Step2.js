import step1Img1 from "../../imgs/step1.png";
import step2Img2 from "../../imgs/step3.jpg";
import {Link} from "react-router-dom";

import './styles/step2.scss'

import {motion} from 'framer-motion'


const Step2 = () => {


    const pageTranstion = {
        in:{
            opacity:1,
            y:0
        },
        out:{
            opacity: 0,
            y:"100%"
        }
    }

    return (

        <motion.div initial="out"
                    animate="in"
                    exit="out" variants={pageTranstion}>

            <div className={'step2'}>
                <div>
                    <div className={'step2Title'}>
                        <h1>How To Play</h1>
                    </div>
                    <div className={'step2Containers'}>

                        <div className={'step2Container1'}>
                            <div className={'step2Para1'}>
                                <p className={'para'}>
                                    <div>
                                        <h1>Step 4</h1>
                                        <br/>
                                    </div>
                                    &#8226;Use <span id={'special'}>“process of elimination”</span> by seeing which
                                    other numbers are
                                    <span id={'info'}> already included within each square</span> – since there can
                                    be <span id={'danger'}>NO duplication of numbers </span>
                                    1-9 within each square.
                                    <br/>
                                    <br/>
                                    &#8226;Here, There are already <span id={'info'}> number 1s in the
                                    top left and center left squares</span> (<span id={'danger'}>circled in red</span>).
                                    So, only one space left in the far left column where a 1 could
                                    possibly go – <span id={'info'}>circled in green</span>
                                    <br/>
                                    <br/>
                                    &#8226;That's how this process is implemented.
                                </p>

                            </div>
                            <div className={'step2Image1'}>
                                <img className={'image'} src={step2Img2} alt={'Failed to load image'}/>
                            </div>

                        </div>

                        <div className={'step2Container2'}>

                            <div className={'step2Image2'}>
                                <img className={'image'} src={step1Img1} alt={'Failed to load image'}/>
                            </div>

                            <div className={'step2Para2'}>
                                <p className={'para'}>
                                    <div>
                                        <h1>Step 3</h1>
                                        <br/>
                                    </div>

                                    &#8226;<span id={'special'}>Dont Guess!!</span><span
                                    id={'info'}> Keep scanning</span> and look for opportunity
                                    <br/>
                                    <br/>
                                    &#8226;Sudoku requires <span id={'info'}> patience, insights, and recognition of patterns</span>.
                                    <br/>
                                    <br/>
                                    &#8226;Now, <span id={'special'}>Let's Play!!</span>
                                </p>
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
        </motion.div>
    )
}

export default Step2;