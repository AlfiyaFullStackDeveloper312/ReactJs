import React from "react";
import "./Amazon.css";
import Carts from "./Carts";

export default class Header extends React.Component {
  render() {
    return (
      <div className="cart-container">
        <h1>Amazon</h1>
        <div className="search-container">
          <input type="text" id="searchInput" placeholder="Search names.." />
        </div>
        <Carts cartCount={this.props.cartCount} />
      </div>
    );
  }
}
