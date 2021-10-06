/* eslint-disable jsx-a11y/img-redundant-alt */
import step1Img1 from "../../imgs/step1.png";
import step1Img2 from "../../imgs/step2.jpg";
import "./styles/Step1.scss";
import {Link} from "react-router-dom";

import {motion} from "framer-motion";

const Step1 = () => {

    const pageTranstion = {
        in:{
            opacity:1,
            x:0
        },
        out:{
            opacity: 0,
            x:"-100%"
        }
    }

    return (
        <motion.div
            initial="out"
            animate="in"
            exit="out" variants={pageTranstion}
        >
            <div className={"step1"}>
                <div>
                    <div className={"step1Title"}>
                        <h1>How To Play</h1>
                    </div>
                    <div className={"step1Containers"}>
                        <div className={"step1Container1"}>
                            <div className={"step1Para1"}>
                                <p className={"para"}>
                                    <div>
                                        <h1>Step 1</h1>
                                        <br/>
                                    </div>
                                    &#8226;Sudoku is played on a grid of <span id={'info'}>9 x 9 spaces</span>.
                                    <br/>
                                    <br/>
                                    &#8226;Each row, column and square (9 spaces each) needs to
                                    be filled out with the numbers 1-9.
                                    <br/>
                                    <br/>
                                    &#8226;<span id={'danger'}>There is a Catch!</span> Without repeating any
                                    numbers within the row, column or square.
                                </p>
                            </div>
                            <div className={"step1Image1"}>
                                <img
                                    className={"image"}
                                    src={step1Img1}
                                    alt={"Failed to load image"}
                                />
                            </div>
                        </div>

                        <div className={"step1Container2"}>
                            <div className={"step1Image2"}>
                                <img
                                    className={"image"}
                                    src={step1Img2}
                                    alt={"Failed to load image"}
                                />
                            </div>

                            <div className={"step1Para2"}>
                                <p className={"para"}>
                                    <div>
                                        <h1>Step 2</h1>
                                        <br/>
                                    </div>
                                    &#8226;The upper left square (circled in <span id={'special'}>blue</span>), this square already has <span id={'info'}> 7 out of the
                                    9 spaces</span> filled in.
                                    <br/>
                                    <br/>
                                    &#8226;The only <span id={'danger'}>numbers missing</span> from the square are<span id={'special'}> 5 and 6</span>.
                                    <br/>
                                    <br/>
                                    &#8226;Seeing which number is missing, Perform <span id={'info'}>process of elimination and deductive reasoning</span> to fill the blanks.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className={"step1Btns"}>
                        <Link to={"/step2"}>
                            <div className={"step1NextBtn"}>Next</div>
                        </Link>
                        <Link to={"/game"}>
                            <div className={"step1SkipBtn"}>Skip</div>
                        </Link>
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

export default Step1;
