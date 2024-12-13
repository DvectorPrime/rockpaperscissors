import { React, useContext } from "react";
import triangle from "../images/bg-triangle.svg";
import Button from "./Button";
import { PhaseContext } from "../Context/PhaseContext";
import { UserChoiceContext } from "../Context/UserChoiceContext";


function PhaseOne(){

    const {setUserChoice} = useContext(UserChoiceContext)
    const {setPhase} = useContext(PhaseContext)
    
    function updateUserChoice(avatar){
        setUserChoice(avatar)
        setPhase(2)
    }

    return (
        <div className="main">
            <img alt="" src={triangle} className="game-triangle" />
            <Button avatar="paper" handleClick = {updateUserChoice} disabled={false}/> 
            <Button avatar="scissors" handleClick = {updateUserChoice} disabled={false}/>
            <Button avatar="rock" handleClick = {updateUserChoice} disabled={false}/>  
        </div>
    )
}

export default PhaseOne