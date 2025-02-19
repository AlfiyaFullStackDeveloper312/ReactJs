import React from "react";
import "./CoinDashboard.css"                       
import PanelOne from "./PanelOne.js";
 export default class CoinDashboard  extends  React.Component{
    constructor(props){
        super(props);
        this.state= {
            total:0
        };

    }
    onCoinClick = (coin)=>{
        if(coin == "One"){
            this.setState ({total:(this.state.total += 1)})
        }else if (coin == "Two"){
            this.setState ({total:(this.state.total += 2)})
        }else if (coin == "Five"){
            this.setState ({total:(this.state.total += 5)})
        }else if (coin == "Ten"){
            this.setState ({total:(this.state.total += 10)})
        }else {
            this.setState ({total:(this.state.total += 20)})
        }
    }
render(){
    return(
        <div className="main-container">
 <div className="counter">Total Coins:{this.state.total}</div>
 <PanelOne onCoinClick={this.onCoinClick}/>
        </div>
    )
}
 }