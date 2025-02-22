import React from "react";
import "./Navbar.css";
import amazonlogo from "./Assets/amazonlogo-removebg-preview.png";
import Carts from "./Cart";
export default class Navbar extends React.Component {
  render() {
    return (
      // navbar
      <div className="Navbar">
        <img
          src={amazonlogo}
          style={{ height: "80px", width: "180px" }}
          alt="Amazon Logo"
        />
        <div className="search-container">
          <input type="text" id="searchInput" placeholder="Search names.." />
          <p style={{ color: "white" }}></p>
        </div>
        <Carts count={this.props.cartCount}  />
      </div>
    );
  }
}
