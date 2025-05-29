import React  from "react";
import "./Panel.css"
import Cards from "./Cards";
//  import products from "./ Product";
export default class Panel extends React.Component{
    render(){
        return(
            <div className="Panel-container">
     <Cards products={this.props.data} addToCart={this.props.addToCart} />
            </div>
        )
    }
}