import {React, useContext} from "react";
import logo from "../images/logo.svg"
import PhaseOne from "./PhaseOne";
import PhaseTwo from "./PhaseTwo";
import { ScoreContext } from "../Context/ScoreContext";
import { PhaseContext } from "../Context/PhaseContext";


function GamePlay( {setShowRules} ){
    const {phase} = useContext(PhaseContext)

    const {score} = useContext(ScoreContext)
    
    function displayRules(){
        setShowRules(true)
    }

    return (
        <div className="game-container">
            <header className="header">
                <div className="logo">
                    <h1 className="heading-text">Rock Paper Scissors Game</h1>
                    <img src={logo} alt="" />
                </div>
                <div className="score-container">
                    <p className="score-label">SCORE</p>
                    <p className="score">{score}</p>
                </div>
            </header>
            <main>
                {phase === 1 ? <PhaseOne /> : <PhaseTwo />}
            </main>
            <footer>
                <button type="button" className="rules" onClick={displayRules}>RULES</button>
            </footer>
        </div>
    )
}

export default GamePlay