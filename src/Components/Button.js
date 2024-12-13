import {React, useContext} from "react";
import rock from "../images/icon-rock.svg"
import paper from "../images/icon-paper.svg"
import scissors from "../images/icon-scissors.svg"
import { PhaseContext } from "../Context/PhaseContext";
import { UserChoiceContext } from "../Context/UserChoiceContext";

function Button(props){
    const avatar = props.avatar === "paper" ? paper : props.avatar === "rock" ? rock : scissors
    const phase = props.phase ? props.phase : "";

    const {setUserChoice} = useContext(UserChoiceContext)
    const {setPhase} = useContext(PhaseContext)

    function updateUserChoice(){
        setUserChoice(props.avatar)
        setPhase(2)
    }
    
    return (
        <button type="button" className={`outer-circle ${props.avatar} ${phase}-outer`} onClick={updateUserChoice}>
            <div className={`inner-circle ${phase}-inner`}>
                 <img alt="" src={avatar} className="avatar" />
            </div>
        </button>
    )
}

export default Button