// import React from "react"; 
// import logo from "../ AmazonWebsite/ Assets/ cart.webp";
// import "./Amazon.css"
// export default class Carts extends React.Component{
//      render(){
//         return(
//             // <div className="cart-icon-container">
//             <img src={logo} alt="Cart Logo" className="cart-logo" />
//           // </div>
//         )
//      }
// }
import React from "react";
import logo from "../ AmazonWebsite/ Assets/cart.webp";
import "./Amazon.css";
export default class Carts extends React.Component {
  render() {
    return (
      <div className="cart-container">
        <img src={logo} alt="Cart Logo" className="cart-logo" />
        <span className="cart-count" style={{color:"white"}}>{this.props.cartCount}</span>
      </div>
    );
  }
}

