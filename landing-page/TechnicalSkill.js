import React from "react";
import "./TechnicalSkill.css"
 export default class TechnicalSkill extends React.Component{
    render(){
        return(
<div className="container-four">
<h1 style={{color:"pink",fontSize:"42px",marginLeft:"500px"}}>Technical <span style={{color:"#E82561"}}>Skills</span></h1>
<li style={{color:"pink"}}>HTML
  <input type="range"id="htmlRange" min="1" max="100" value="95"/>
</li>
<li style={{color:"pink"}}>CSS
  <input type="range"id="htmlRange" min="1" max="100" value="80"/>
</li>
<li style={{color:"pink"}}>JavaScript
  <input type="range"id="htmlRange" min="1" max="100" value="75"/>
</li>
<li style={{color:"pink"}}>React JS
  <input type="range"id="htmlRange" min="1" max="100" value="70"/>
</li>
</div>
        )
    }
 }