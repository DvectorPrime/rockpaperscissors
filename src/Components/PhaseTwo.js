import {React, useContext, useEffect, useState} from "react"
import Button from "./Button"
import { UserChoiceContext } from "../Context/UserChoiceContext"
import { ScoreContext } from "../Context/ScoreContext"
import { PhaseContext } from "../Context/PhaseContext"

function PhaseTwo(){
    const {userChoice} = useContext(UserChoiceContext)

    const { setScore } = useContext(ScoreContext)

    const { setPhase } = useContext(PhaseContext)

    const [housePick, setHousePick] = useState("");

    const [result, setResult] = useState("");

    function getResults(){
        let houseChoice = ""
        const choices = ["rock", "paper", "scissors"]
        const randomNumber = Math.floor(Math.random() * 3)

        houseChoice = choices[randomNumber]

        setHousePick(houseChoice)

        setTimeout(() => {
            if(houseChoice === userChoice){
                setResult("Draw")
            } else if (userChoice === "rock"){
                houseChoice === "scissors" ? setResult("Win") : setResult("Lose")
            } else if (userChoice === "paper"){
                houseChoice === "rock" ? setResult("Win") : setResult("Lose")
            } else if (userChoice === "scissors"){
                houseChoice === "paper" ? setResult("Win") : setResult("Lose")
            }
        }, 1000)
    }

    useEffect(() => {
        setTimeout(() => {
            getResults();
        }, 1000);
    }, [])

    useEffect(() => {
        if (result === "Win"){
            setScore(prevScore => prevScore + 1)
        } else if (result === "Lose"){
            setScore(prevScore => prevScore - 1)
        }
    }, [result])

    function resetPhase(){
        setPhase(1)
    }

    return (
        <div >
            <div className="choice-dashboard">
                <div className="choices"> 
                    <div className={result === "Win" ? "light-out" : ""}>
                        <Button avatar = {userChoice} phase="phase" disabled={true} />
                    </div>
                    <p>YOU PICKED</p>
                </div>
                {
                    result &&
                        <div className="result-div result-large-screen">
                            <p>YOU {result.toUpperCase()}</p>
                            <button onClick={resetPhase}>PLAY AGAIN</button>
                        </div> 
                }
                <div className="choices">
                    <div className={result === "Lose" ? "light-out" : ""}>
                        {housePick === "" ? <div className="empty-choice"></div> : <Button avatar={housePick} phase="phase" disabled={true} />}
                    </div>
                    <p>THE HOUSE PICKED</p>
                </div>
            </div>
            {
                result && 
                    <div className="result-div result-small-screen">
                        <p>YOU {result.toUpperCase()}</p>
                        <button onClick={resetPhase}>PLAY AGAIN</button>
                    </div> 
            }
        </div>
    )
}

export default PhaseTwo