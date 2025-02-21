import React from "react";
export default class Loop extends React.Component {
  render() {
    const fruits = ["Apple", "Banana", "Orange", "Mango", "Pineapple"];
    return (
      <div style={{ marginTop: "200px" }}>
        <h1>{"Fruits List"}</h1>
        <ul>
          {fruits.map((item,index) => {
           return <li>{item}</li>
  })}
        </ul>
      </div>
    );
  }
}
