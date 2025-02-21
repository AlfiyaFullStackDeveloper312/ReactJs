// with the help of function without state
 
import React,{useState}from "react";
import "./Dynamic.css"
    
// import "../component/Assets"
 export default  function DynamicImage() {
    const [selectedFruit,setSelectFruit] = useState("Apple");
//   images for different fruits
const fruitImages ={
    Apple: "apple.jpg" ,
    Banana: "banana.webp",
    Orange: "orange.jpeg",
};
// handle select change
const onSelectChange = (event) =>{
    console.log("onSelectChange")
setSelectFruit(event.target.value);
};
        return(
            <div className="conatiner">
                <h1>Select Fruits</h1>
                <select className="drop-down" onChange={onSelectChange}>
                    <option value="Apple">Apple</option>
                    <option value="Banana">Banana</option>
                    <option value="Orange">Orange</option>
                </select>
                <h2>You select:{selectedFruit}</h2>
                <img
                style={{width:"20vw",height:"30vh",margin:"50px"}}
                src={fruitImages[selectedFruit]}
                alt={selectedFruit}
                />
            </div>
        )
    }
 


     
 