import React from "react";
export default class Greeting extends React.Component{
    render(){
 let Greeting = "Hello,World"
 const date = new Date();
 const hours = date.getHours();
 const minutes = date.getMinutes();
 if(hours < 12){
    Greeting = "Good Morning";
 }else if (hours >= 12 && hours < 17){
    Greeting ="Good Afternoon";
 }else if(hours >= 17 && hours < 20){
    Greeting ="Good Evening";
 }else  {
    Greeting = "Good Night";
 }
        return(
            <div style={{backgroundColor:"black",padding:"20px",height:"100px",marginTop:"200px",border:"solid white"}}>
               <h1 style={{color:"white"}}>{Greeting}</h1>
                 <p style={{color:"white"}}>
                    The current time is {hours}:{minutes < 10 ? `0${minutes}`: minutes}
                 </p>
            </div>
        )
    }
}