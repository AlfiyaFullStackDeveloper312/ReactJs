import React from "react";
 import "./Adition.css"
class  Addition extends React.Component {
    constructor(props) {
      super(props);
      this.state = { } ;
      
    }

    render(){
        return(
<div className="container">
    <input type="number" id="input"></input>
    <input type="number" id="input"></input>
    <input type="number" id="input"></input>
     
    =
    <button type="button" onClick="Add()"></button>
</div>
        )
    };
};
export default Addition;
