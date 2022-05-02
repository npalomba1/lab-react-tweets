import React from "react"; 
import Tweet from "./Tweet"
import App from "../App";

function User(props){
    return (
    <span className={props.userData}>
        <span className="name"> {props.userData.name} </span>
        <span className="handle">@{props.userData.handle}</span>
    </span>
    )
}

export default User; 