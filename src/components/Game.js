import Board from "./Board";

import "./styles/Game.scss";

import {motion} from "framer-motion";
import {useState} from "react";

const Game = ({sudokuArrays, difficulty, setDifficulty}) => {
    const [gameCount, setGameCount] = useState(0);
    const index = Math.floor(Math.random() * 5);
    let sudokuString = sudokuArrays[0][0][index];
    let solutionString = sudokuArrays[0][0][index];
    if (difficulty > 0 && difficulty < 5) {
        sudokuString = sudokuArrays[difficulty - 1][0][index];
        solutionString = sudokuArrays[difficulty - 1][1][index];
    }
    const sudokuArray = sudokuString.split("").map((x) => parseInt(x));
    const solutionArray = solutionString.split("").map((x) => parseInt(x));
    const editable = sudokuArray.map((item) => {
        return item === 0;
    });

    const pageTranstion = {
        in: {
            opacity: 1,
            y: 0
        },
        out: {
            opacity: 0,
            y: "-100%"
        }
    }

    return (


        <motion.div
            initial="out"
            animate="in"
            exit="out" variants={pageTranstion}
            className={"gamePage"}
        >
            <Board
                sudokuArray={sudokuArray}
                editable={editable}
                solutionArray={solutionArray}
                difficulty={difficulty}
                setDifficulty={setDifficulty}
                setGameCount={setGameCount}
            />
        </motion.div>
    );
};

export default Game;
