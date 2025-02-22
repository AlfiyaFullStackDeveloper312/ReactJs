import React from "react";
import "./Apps.css";
import Navbar from "./ Navbar.js";
import Panel from "./Panel.js";
import products from "./ Product.js";
export default class Apps extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      products: products,
      cartArray: [],
    };
  }
  addToCart = (data) => {
    this.setState({ cartArray: [...this.state.cartArray, data] });
  };
  render() {
    return (
      <div className="main-container">
        <Navbar cartCount={this.state.cartArray.length} />
        <Panel data={this.state.products} addToCart={this.addToCart} />
      </div>
    );
  }
}
