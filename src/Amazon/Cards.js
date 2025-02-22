import React from "react";
import "./Cards.css"
export default class Cards extends React.Component{
    render(){
        return(
            <div> 
                <h1>CPU COMPONENT</h1>
            <div className="card-container">
            {this.props.products.map((product, index) => (
              <div key={index} className="product-box">
                <img src={product.image} alt={product.name} className="product-image" />
                <h3>{product.name}</h3>
                <p className="product-price">{product.price}</p>
                <button className="add-to-cart" onClick={() => this.props.addToCart(product)}>
                  Add to Cart
                </button>  
              </div>
            ))}
          </div>
          </div>
        )
    }
}