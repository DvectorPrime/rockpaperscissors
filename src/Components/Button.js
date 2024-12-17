import {React} from "react";
import rockavatar from "../images/icon-rock.svg"
import paperavatar from "../images/icon-paper.svg"
import scissorsavatar from "../images/icon-scissors.svg"

function Button(props){
    const avatar = props.avatar === "paper" ? paperavatar : props.avatar === "rock" ? rockavatar : scissorsavatar
    const phase = props.phase ? props.phase : "";
    
    return (
        <div className="workout">
        <button type="button" 
                className={`outer-circle ${props.avatar} ${props.phase ? `${phase}-outer` : ""}`} 
                onClick={() => {props.handleClick && props.handleClick(props.avatar)}}
                disabled={props.disabled}
        >
            <p className="button-text">{props.avatar}</p>
            <div className={`inner-circle ${phase}-inner`}>
                 <img alt="" src={avatar} className="avatar" />
            </div>
        </button></div>
    )
}

export default Button