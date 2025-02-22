import React from "react";
import Cartlogo from "./Assets/cart.webp";
import "./Cart.css";
import Panel from "./Panel";

export default class Carts extends React.Component {
  render() {
    return (
      <div className="cart-container">
        <img src={Cartlogo} alt="Cart Logo" className="cart-logo"  />
        <span className="cart-count" style={{color:"white"}}>{this.props.count}</span>
      </div>
    );
  }
}