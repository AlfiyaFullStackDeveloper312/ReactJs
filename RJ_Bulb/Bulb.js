import React, { useState } from "react";
import "./Bulb.css";
export default function Bulb() {
  const [bulbreaction, setBulbReaction] = useState("BulbOf");

  const image = {
    BulbOn: "./bulbon.png",
    BulbOf: "./bulbof.png",
  };
  const onChangeColor = (event) => {
    setBulbReaction(event.target.value);
  };
  return (
    <div className="bulb-main-container"> 

    <div className="bulb-container">
    <h1>Bulb Project</h1>
      <img
        src={image[bulbreaction]}
        style={{ height: "50vh", width: "20vw", marginBottom: "10px" }}
      />
      <div className="btn">
        <button className="button-on" onClick={() => setBulbReaction("BulbOn")}>
          On
        </button>
        <button
          className="button-off"
          onClick={() => setBulbReaction("BulbOf")}
        >
          Off
        </button>
      </div>
    </div>
    </div>
  );
}
