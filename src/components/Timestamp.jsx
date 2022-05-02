import React from "react"; 
import Tweet from "./Tweet"
import App from "../App";

function Timestamp(props) {
    return <span className="timestamp"> {props.time} </span>
}

export default Timestamp; 