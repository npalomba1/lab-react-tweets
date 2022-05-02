import React from "react"; 
import Tweet from "./Tweet"
import App from "../App";

function ProfileImage(props) {

    return  (
    <img
    src={props.image}//why? why just props.image
    className="profile"
    alt="profile"
  />
    );
}





export default ProfileImage 
