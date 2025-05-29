import React, { useState } from "react";
import "./ Fruits.css";

export default function FruitDashboard() {
  const [chooseFruit, setSelectedFruit] = useState("Apple");

  const photos = {
    apple: "apple.jpg",
    banana: "banana.webp ",
    orange: "orange.jpeg",
  };

  const onSelectChange = (event) => {
    console.log("onSelectChange");
    setSelectedFruit(event.target.value);
  };

  return (
    // container
    <div className="container">
      <h1 className="select">Select a Fruit</h1>
       {/* select fruit */}
      <select className="fruit-list" onChange={onSelectChange}>
        <option value="apple">Apple</option>
        <option value="banana">Banana</option>
        <option value="orange">Orange</option>
      </select>
      <h2>Your selectedFruit: {chooseFruit}</h2>
      <img
        style={{
          width: "12vw",
          height: "20vh",
          marginLeft: "140px",
          border: "solid",
        }}
        src={photos[chooseFruit]}
      />
    </div>
  );
}
