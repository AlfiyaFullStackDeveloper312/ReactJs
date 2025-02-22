// import React from "react";
// import "./MyComponent.css";
// // import { CAlert } from '@coreui/react'

// class MyComponent extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       counter : 0,

//     };
//   }
//   // showalert = () => {
//   // if (this.state.alert == 0){
//   //      this.setState({ alert: 1 });
//   //     }else if (this.state.alert == 1){
//   //         this.setState({ alert: 2})
//   // } else{
//   //         this.setState({alert :0})
//   //     }

//   // };
//   counterIncre = () => {
//     this.setState({ counter: ++this.state.counter });
//   };
//   counterDec = () => {
//     this.setState({   counter: --this.state. counter });
//   };

//   render() {
//     // let Name = "Alfiya";
//     return (
//       <div>
//         {this.state.counter > 0 ? (<text>{this.state.counter}</text>):this.state.counter <! 0 ? (<text>{this.state.counter}</text>): null}

//         <button className="buttonone" onClick={this.counterIncre}>
//           Increment
//         </button>
//         <button className="buttontwo" onClick={this.counterDec}>

//           Decrement
//         </button>

//       </div>
//     );
//   }
// }
// export default MyComponent;
// ---------------------------------------------------------------------

// import React from "react";
// import "./MyComponent.css"; // Correct import of the CSS file

// class MyComponent extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       counter: 0, // Example property in the state
//     };
//   }
//   counterIncre = () => {
//     this.setState({ counter: ++this.state.counter });
//   };
//   counterDecree = () => {
//     this.setState({ counter: ++this.state.counter });
//   };
//   sayHello = () => {
//     return <text>SAY HELLO</text>;
//   };
//   render() {
//     return (
//       <div>
//         {this.sayHello()}
//         {this.state.counter < 0}
//         <text> {this.state.counter}</text>
//         <button className="button" onClick={this.counterIncre}> Player One</button>
//         <button className="button" onClick={this.counterIncre}>Player Two </button>
//         <button className="button" onClick={this.counterIncre}>Player Three</button>
//       </div>
//     );
//   }
// }

// export default MyComponent; // Export the component
// ---------------------------------------------------------------
// import React from "react";
// import "./MyComponent.css";
// import { Button } from "@coreui/coreui";
// // import { CAlert } from '@coreui/react'

// class MyComponent extends React.Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       counterone: 0,
//       countertwo: 0,
//     };
//   }
  
//   counterIncr = () => {
//     this.setState({ counter: ++this.state.counterone });
//   };

//   renderScore = () => {
//     return this.state.counterone > 0 ? (
//       <text>{this.state.counterone}</text>
//     ) : null;
//   };

//   renderButton = (playerName, passedStyle) => {
//     return (
//       <button
//         className="button"
//         onClick={this.counterIncr}
//         style={passedStyle}
//       >
//         {playerName}
//       </button>
//     );
//   };
//   render() {
//     const styleOne = { backgroundColor: "yellow", fontSize: "14px" };
//     const styleTwo = { backgroundColor: "green", fontSize: "14px" };
//     const styleThree = { backgroundColor: "purple", fontSize: "14px" };
//     return (
//       <div className="team">
//         {this.renderScore()}
//         {this.renderButton("player One", styleOne)}
//         {this.renderButton("player two", styleTwo)}
//         {this.renderButton("player three", styleThree)}
//       </div>
//     );
//   }
// }
// export default MyComponent;

// ------------------------------------------------------

//  import React from "react";
// import "./MyComponent.css"; // Correct import of the CSS file
// import { text } from "express";

// class MyComponent extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       counterone: 0,
//       countertwo:0, // Example property in the state
//     };
//   }
//   counterIncre = () => {
//     this.setState({ counter: ++this.state.counterone});
//   };

//    renderScore = () =>{
//     return this.state.counterone > 0 ? (
//       <text>{this.state.counterone}</text>
//     ) : null;
//    };
//     renderButton = (playerName) => {
//       return(
//         <button className="button" onClick={this.counterIncre}>{playerName}</button>
//       );
//     };

//   render(){
//     return(
//      <div className="team">
// {this.renderScore()}
// {this.renderButton("Player One")}
// {this.renderButton("Player Two")}
// {this.renderButton("Player Three")}
//      </div>
//     );
//   }
// }
// export default MyComponent;
// =-------------------------------------
// import React from "react";
// import "./MyComponent.css";
// import { Button } from "@coreui/coreui";
// // import { CAlert } from '@coreui/react'

// class MyComponent extends React.Component {
//   constructor(props) {
//     super(props);
  
//     this.state = {
//         lastClicked: null,
//       counterone: 0,
//       countertwo: 0,
//     };
//   }
// //   ---------------------------
//   // showalert = () => {
//   // if (this.state.alert == 0){
//   //      this.setState({ alert: 1 });
//   //     }else if (this.state.alert == 1){
//   //         this.setState({ alert: 2})
//   // } else{
//   //         this.setState({alert :0})
//   //
//   // };
// // -------------------------------
//   counterIncr = (buttonClicked) => {
//     console.log(buttonClicked);
//     this.setState({lastClicked: buttonClicked});
//     this.setState({ counter: ++this.state.counterone });
//   };

//   renderScore = () => {
//     let textStyle ={color:"black",fontSize:"14px"}
//     if(this.state.lastClicked =="player one"){
//         textStyle={color:"yellow",fontSize:"14px"}
//     } else if(this.state.lastClicked =="player two"){
//         textStyle={color:"green",fontSize:"14px"}
//     } else if(this.state.lastClicked =="player three"){
//         textStyle={color:"purple",fontSize:"14px"}
//     }
//     return  <text style={textStyle}>{this.state.counterone}</text>
    
//   };

//   renderButton = (playerName, passedStyle) => {
//     return (
//       <button
//         className="button"
//         onClick={()=>this.counterIncr(playerName)  }
//         style={passedStyle}
//       >
//         {playerName}
//       </button>
//     );
//   };
//   render() {
//     const styleOne = { backgroundColor: "yellow", fontSize: "14px" };
//     const styleTwo = { backgroundColor: "green", fontSize: "14px" };
//     const styleThree = { backgroundColor: "purple", fontSize: "14px" };
//     return (
//       <div className="team">
//         {this.renderScore()}
//         {this.renderButton("player one", styleOne)}
//         {this.renderButton("player two", styleTwo)}
//         {this.renderButton("player three", styleThree)}
//       </div>
//     );
//   }
// }
// export default MyComponent;
//---------------------------------- coral to green-----------------------------------------
//  import React from "react";
// import "./MyComponent.css";
// import { Button } from "@coreui/coreui";
// // import { CAlert } from '@coreui/react'

// class MyComponent extends React.Component {
//   constructor(props) {
//     super(props);
  
//     this.state = {
//         lastClicked: null,
//       counterone: 0,
//       countertwo: 0,
//     };
//   }
//   counterIncr = (buttonClicked) => {
//     console.log(buttonClicked);
//     this.setState({lastClicked: buttonClicked});
//     this.setState({ counter: ++this.state.counterone });
//   };

//   renderScore = () => {
//     let textStyle ={color:"black",fontSize:"14px"}
//     if(this.state.lastClicked =="player one"){
//         textStyle={color:"yellow",fontSize:"14px"}
//     } else if(this.state.lastClicked =="player two"){
//         textStyle={color:"green",fontSize:"14px"}
//     } else if(this.state.lastClicked =="player three"){
//         textStyle={color:"purple",fontSize:"14px"}
//     }
//     return  <text style={textStyle}>{this.state.counterone}</text>
    
//   };

//   renderButton = (playerName) => {
// let buttonStyle={background:"lightcoral",fontSize:"20px"}
// if(this.state.lastClicked===playerName){
//     buttonStyle = { background: "green", fontSize: "20px" }
// }
//     return (
//       <button
//         className="button"
//         onClick={()=>this.counterIncr(playerName)  }
//         style={buttonStyle}
//       >
//         {playerName}
//       </button>
//     );
//   };
//   render() {
    
//     return (
//       <div className="team">
//         {this.renderScore()}
//         {this.renderButton("player one" )}
//         {this.renderButton("player two" )}
//         {this.renderButton("player three")}
//       </div>
//     );
//   }
// }
// export default MyComponent;
// -----------------------------green to coral---------------------
// import React from "react";
// import "./MyComponent.css";
// import { Button } from "@coreui/coreui";
// // import { CAlert } from '@coreui/react'

// class MyComponent extends React.Component {
//   constructor(props) {
//     super(props);
  
//     this.state = {
//         lastClicked: null,
//       counterone: 0,
//       countertwo: 0,
//     };
//   }
//   counterIncr = (buttonClicked) => {
//     console.log(buttonClicked);
//     this.setState({lastClicked: buttonClicked});
//     this.setState({ counter: ++this.state.counterone });
//   };

//   renderScore = () => {
//     let textStyle ={color:"black",fontSize:"14px"}
//     if(this.state.lastClicked =="player one"){
//         textStyle={color:"yellow",fontSize:"14px"}
//     } else if(this.state.lastClicked =="player two"){
//         textStyle={color:"green",fontSize:"14px"}
//     } else if(this.state.lastClicked =="player three"){
//         textStyle={color:"purple",fontSize:"14px"}
//     }
//     return  <text style={textStyle}>{this.state.counterone}</text>
    
//   };

//   renderButton = (playerName) => {
// let buttonStyle={background:"green",fontSize:"20px"}
// if(this.state.lastClicked===playerName){
//     buttonStyle = { background: "lightcoral", fontSize: "20px" }
// }
//     return (
//       <button
//         className="button"
//         onClick={()=>this.counterIncr(playerName)  }
//         style={buttonStyle}
//       >
//         {playerName}
//       </button>
//     );
//   };
//   render() {
    
//     return (
//       <div className="team">
//         {this.renderScore()}
//         {this.renderButton("player one" )}
//         {this.renderButton("player two" )}
//         {this.renderButton("player three")}
//       </div>
//     );
//   }
// }
// export default MyComponent;
// ----------------------------- when we button change it to name
// import React from "react";
// import "./MyComponent.css";
// import { Button } from "@coreui/coreui";
// import { CAlert } from '@coreui/react'

// class MyComponent extends React.Component {
//   constructor(props) {
//     super(props);
  
//     this.state = {
//         lastClicked: null,
//       counterone: 0,

//       players: {
//         "player one": "player one",
//         "player two": "player two",
//         "player three": "player three",
//       },
//     };
//   }
//   counterIncr = (buttonClicked) => {
//     this.setState((prevState) => ({
//       lastClicked: buttonClicked,
//       counterone: prevState.counterone + 1,
//       players: { ...prevState.players,
//         [buttonClicked]: "Alfiya", // Change the player's name to "Alfiya"
//       },
//     }));
//   };


//   renderScore = () => {
//     let textStyle ={color:"black",fontSize:"14px"}
//     if(this.state.lastClicked ==="player one"){
//         textStyle={color:"yellow",fontSize:"14px"}
//     } else if(this.state.lastClicked ==="player two"){
//         textStyle={color:"green",fontSize:"14px"}
//     } else if(this.state.lastClicked ==="player three"){
//         textStyle={color:"purple",fontSize:"14px"}
//     }
//     return  <text style={textStyle}>{this.state.counterone}</text>
    
//   };

//   renderButton = (playerName) => {
// let buttonStyle={background:"green",fontSize:"20px"}
// if(this.state.lastClicked===playerName){
//     buttonStyle = { background: "lightcoral", fontSize: "20px" }
// }
//     return (
//       <button
//         className="button"
//         onClick={()=>this.counterIncr(playerName)  }
//         style={buttonStyle}
//       >
//         {this.state.players[playerName]}
//       </button>
//     );
//   };
//   render() {
    
//     return (
//       <div className="team">
//         {this.renderScore()}
//         {this.renderButton("player one" )}
//         {this.renderButton("player two" )}
//         {this.renderButton("player three")}
//       </div>
//     );
//   }
// }
// export default MyComponent;
// ----------------------------------------------when we click the button will be deleted
// import React from "react";
// import "./MyComponent.css";
// import { Button } from "@coreui/coreui";
// // import { CAlert } from '@coreui/react'

// class MyComponent extends React.Component {
//   constructor(props) {
//     super(props);
  
//     this.state = {
//         lastClicked: null,
//       counterone: 0,
//        players:["player one","player two","player three"]
//     };
//   }
//   counterIncr = (buttonClicked) => {
//     console.log(buttonClicked);
//     this.setState({lastClicked: buttonClicked});
//     this.setState({ counter: ++this.state.counterone });
//     this.setState((prevState)=>({
//         players: prevState.players.filter((player)=> player !== buttonClicked)
//     }));
//   };

//   renderScore = () => {
//     let textStyle ={color:"black",fontSize:"14px"}
//     if(this.state.lastClicked ==="player one"){
//         textStyle={color:"yellow",fontSize:"14px"}
//     } else if(this.state.lastClicked ==="player two"){
//         textStyle={color:"green",fontSize:"14px"}
//     } else if(this.state.lastClicked ==="player three"){
//         textStyle={color:"purple",fontSize:"14px"}
//     }
//     return  <text style={textStyle}>{this.state.counterone}</text>
    
//   };

//   renderButton = (playerName) => {
// let buttonStyle={background:"green",fontSize:"20px"}
// if(this.state.lastClicked===playerName){
//     buttonStyle = { background: "lightcoral", fontSize: "20px" }
// }
//     return (
//       <button
//         className="button"
//         onClick={()=>this.counterIncr(playerName)  }
//         style={buttonStyle}
//       >
//         {playerName}
//       </button>
//     );
//   };
//   render() {
    
//     return (
//         <div className="team">
//           {this.renderScore()}
//           {this.state.players.map((player) => this.renderButton(player))} {/* Render buttons dynamically */}
//         </div>
//       );
//   }
// }
// export default MyComponent
// -----------------------------------------------2nd type to delete button with if else-------------
import React from "react";
import "./MyComponent.css";
// import { Button } from "@coreui/coreui";
// import { CAlert } from '@coreui/react'

class MyComponent extends React.Component {
  constructor(props) {
    super(props);
  
    this.state = {
        lastClicked: null,
      counterone: 0,
      // countertwo: 0,
      buttonArray:[true,true,true,true,true,true,true,true,true,true,true],
       
    };
  }
  counterIncr = (index, buttonClicked) => {
    
    let copiedArray ={...this.state.buttonArray};
    copiedArray[index]= false;
    this.setState({buttonArray : copiedArray})
 
    // this.setState({lastClicked: buttonClicked});
    this.setState({ counter: ++this.state.counterone });
  };
  renderScore = () => {
    return <text>{this.props.teamName}</text>;
  };

  renderButton = (index,playerName) => {
     // const isSelected = this.state.changeButton === playerName; // Check if the button is selected
    // const btnStyle = isSelected
    //   ? { backgroundColor: "green", fontSize: "20px" } // Green for the selected button
    //   : { backgroundColor: "lightcoral", fontSize: "20px" }; // Default style

    // let btnstyle = { backgroundColor: "lightcoral", fontSize: "20px"}
    // if (this.state.lastClicked == playerName){
    //   btnstyle = { backgroundColor: "green", fontSize: "20px"};
    // }
    // let ispresent = this.state.lastClicked.indexOf.(playerName) > -1;
    let buttonStyle = this.props.buttonStyle;
    return (
      <button
        className="button"
        style={buttonStyle}
        onClick={()=>this.counterIncr(index,playerName)  }
      >
        {playerName}
      </button>
    );
  };
  render() {
    return (
      <div className="team">
        {this.renderScore()}
        {this.state.buttonArray[0] ? this.renderButton(0,"player one"):null}
        {this.state.buttonArray[1] ? this.renderButton(1,"player two"):null}
        {this.state.buttonArray[2] ? this.renderButton(2,"player three"):null}
        {this.state.buttonArray[3] ? this.renderButton(3,"player four"):null}
        {this.state.buttonArray[4] ? this.renderButton(4,"player five"):null}
        {this.state.buttonArray[5] ? this.renderButton(5,"player six"):null}
        {this.state.buttonArray[6] ? this.renderButton(6,"player seven"):null}
        {this.state.buttonArray[7] ? this.renderButton(7,"player eight"):null}
        {this.state.buttonArray[8] ? this.renderButton(8,"player nine"):null}
        {this.state.buttonArray[9] ? this.renderButton(9,"player ten"):null}
        {this.state.buttonArray[10]? this.renderButton(10,"player eleven"):null}
      </div>
    );
  }
}
export default MyComponent;