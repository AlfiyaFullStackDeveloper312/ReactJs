import React from "react";
import "./Homepage.css"
export default class  Homepage extends React.Component{
 render(){
    return(
<div className="container">
     <h1 style={{color:"pink",fontSize:"40px",marginLeft:"40px"}}>Portfolio</h1>
     <div className="navbar">
        <h2  >About</h2>
        <h2  >Projects</h2>
        <h2  >Contact</h2>
     </div>
</div>
    )
 }
}