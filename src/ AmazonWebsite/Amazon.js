import React from "react";
import "./Amazon.css";
import Header from "./Header";
import Panel from "./ Panel";
import products from "./Data";
export default class Amazon extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cartCount: 0, 
      // productArray: data,
      // cartArray:[];
    };
  }
  addToCart = (products) => {
console.log("addToCart",products)
    this.setState((prevState) => ({
      cartCount: prevState.cartCount + 1,
    }));
  };
  // removeFromCart = (data) => {
    // const newItems = this.state.cartArray;
    // newItems.splice({indexToRemove,1};
    // this.setstate ({cartArray:newItems})
    // )}
 
  render() {
    return (
      <div className="App">
        <Header cartCount={this.state.cartCount} />
        <Panel 
        // datapassed={this.state.productArray}
        addToCart={this.addToCart} />
      </div>
    );
  }
}

   

   

 
