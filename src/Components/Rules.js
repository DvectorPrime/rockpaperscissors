import React from "react";
import ImageRules from "../images/image-rules.svg"
import CloseIcon from "../images/icon-close.svg"

function Rules({setShowRules}){
    function hideRules(){
        setShowRules(false)
    }

    return(
        <div className="rules-div">
            <div className="large-screen">
                <h3>RULES</h3>
                <button onClick={hideRules} className="small"><img className="close-icon" src={CloseIcon} alt="Close" /></button> 
            </div>
            <h3 className="small-screen">RULES</h3>
            <img className="rule-sheet" src={ImageRules} alt="Rock beats Scissors. Scissors beats paper. Paper beats Rock" />
            <button onClick={hideRules} className="small-screen"><img className="close-icon" src={CloseIcon} alt="Close" /></button>
        </div>
    )
}

export default Rules