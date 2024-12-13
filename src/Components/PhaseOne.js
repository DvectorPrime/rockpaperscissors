import { React } from "react";
import triangle from "../images/bg-triangle.svg";
import Button from "./Button";


function PhaseOne(){
    
    return (
        <div className="main">
            <img alt="" src={triangle} className="game-triangle" />
            <Button avatar="paper" /> 
            <Button avatar="scissors" />
            <Button avatar="rock" />  
        </div>
    )
}

export default PhaseOne