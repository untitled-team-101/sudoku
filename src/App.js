import {HashRouter, Route, Switch} from "react-router-dom";
import Game from "./components/Game";
import Home from "./components/Home";
import Credits from "./components/credits";
import {sudokuArrays} from "./variables/sudokuArrays";
import {useEffect, useState} from "react";

import {AnimatePresence, motion} from "framer-motion";

import "./styles/App.scss";
import Step1 from "./components/tutorial/Step1";
import Step2 from "./components/tutorial/Step2";

function App() {
    const [difficulty, setDifficulty] = useState(-1);
    // useEffect(() => {
    //     if(difficulty > -1)
    //         setDifficulty(-1)
    // })
    // console.log(difficulty)
    return (
        <div className="App">
            <AnimatePresence exitBeforeEnter>
                <HashRouter>
                    <Switch>
                        <Route exact path={"/"}>
                            <Home/>
                        </Route>

                        <Route exact path={"/step1"}>
                            <Step1/>
                        </Route>

                        <Route exact path={"/step2"}>
                            <Step2/>
                        </Route>
                        
                        <Route exact path={'/credits'}>
                            <Credits/>
                        </Route>

                        <Route exact path={"/game"}>
                            <Game
                                sudokuArrays={sudokuArrays}
                                difficulty={difficulty}
                                setDifficulty={setDifficulty}
                            />
                        </Route>
                        <Route path={"/"}>
                            <h1>404 Error</h1>
                            <h2>Kat gya TERA!! Kuch ni hai idhar</h2>
                        </Route>
                    </Switch>
                </HashRouter>
            </AnimatePresence>
        </div>
    );
}

export default App;
