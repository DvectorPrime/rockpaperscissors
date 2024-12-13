import {React, useContext, useEffect, useState} from "react"
import Button from "./Button"
import { UserChoiceContext } from "../Context/UserChoiceContext"

function PhaseTwo(){

    const {userChoice} = useContext(UserChoiceContext)

    const [housePick, setHousePick] = useState("");

    function getHouseChoice(){
        let houseChoice = ""
        const choices = ["rock", "paper", "scissors"]
        const randomNumber = Math.floor(Math.random() * 3)

        houseChoice = choices[randomNumber]

        setHousePick(houseChoice)
    }

    useEffect(() => {
        setTimeout(() => {
            getHouseChoice();
        }, 1000);
    }, [])

    return (
        <div >
            <div className="choice-dashboard">
                <div className="choices"> 
                    <div className="light-out">
                        <Button avatar = {userChoice} phase="phase" disabled={true} />
                    </div>
                    <p>YOU PICKED</p>
                </div>
                <div className="result-div result-large-screen">
                    <p>YOU LOSE</p>
                    <button>PLAY AGAIN</button>
                </div>
                <div className="choices">
                        {housePick === "" ? <div className="empty-choice"></div> : <Button avatar={housePick} phase="phase" disabled={true} />}
                    <p>THE HOUSE PICKED</p>
                </div>
            </div>
            <div className="result-div result-small-screen">
                <p>YOU LOSE</p>
                <button>PLAY AGAIN</button>
            </div>
        </div>
    )
}

export default PhaseTwo