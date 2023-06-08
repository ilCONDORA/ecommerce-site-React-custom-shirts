import React from "react";
import "./logout.css";
import Rick from "../../assets/img/never-gonna.gif"

const logout = ()=>{
    return(
        <div className="error-container">
            <h1>error:no procastination</h1>
            <img src={Rick} alt="" />
           
        </div>
    )
}

export default logout;