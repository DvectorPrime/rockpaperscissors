import {React, useContext} from "react"
import Button from "./Button"
import { UserChoiceContext } from "../Context/UserChoiceContext"

function PhaseTwo(){

    const {userChoice} = useContext(UserChoiceContext)

    function getHouseChoice(){
        let houseChoice = ""
        const choices = ["rock", "paper", "scissors"]
        const randomNumber = Math.floor(Math.random() * 3)

        houseChoice = choices[randomNumber]

        return houseChoice
    }

    const housePick = getHouseChoice();

    return (
        <div className="choice-dashboard">
            <div className="choices">
                <Button avatar = {userChoice} phase="phase" />
                <p>YOU PICKED</p>
            </div>
            <div className="choices">
                <div id="house-choice-container">
                    {housePick === "" ? <div className="empty-choice"></div>: <Button avatar={housePick} phase="phase" />}
                </div>
                <p>THE HOUSE PICKED</p>
            </div>
        </div>
    )
}

export default PhaseTwo