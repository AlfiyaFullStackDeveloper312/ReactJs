import React, {useState} from "react";
import "./Bulb.css";
export default function Bulb(){
 const [ bulbreaction, setBulbReaction] = useState ("BulbOf");

 const image ={
    BulbOn: "./bulbon.png",
    BulbOf: "./bulboff-removebg-preview.png",
 };
 const onChangeColor = (event)=>{
    setBulbReaction(event.target.value);
  };
  return(
    <div className="containers">
      <img 
      src={image[bulbreaction]}style={{height:"50vh",width:"20vw"}}/>
      <div className="btn">
        <div className="button-one">
             <button onClick={()=> setBulbReaction("BulbOn")}>On</button>
        </div>
        <div className="button-two">
            <  button onClick={()=> setBulbReaction("BulbOf")}>Off</button>
         </div>
         </div>
     </div>
  )
};

