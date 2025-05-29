import React from "react";
import "./PanelOne.css";
import CoinCard from "./CoinCard";

export default class PanelOne extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            coinOneCounter: 0,
            coinTwoCounter: 0,
            coinFiveCounter: 0,
            coinTenCounter: 0,
            coinTwentyCounter: 0,
        };
    }
// incrementCounter
    incrementCounter = (coin) => {
        if (coin === "One") {
            this.setState({ coinOneCounter: this.state.coinOneCounter += 1 });
        } else if (coin === "Two") {
            this.setState({ coinTwoCounter: this.state.coinTwoCounter += 1 });
        } else if (coin === "Five") {
            this.setState({ coinFiveCounter: this.state.coinFiveCounter += 1 });
        } else if (coin === "Ten") {
            this.setState({ coinTenCounter: this.state.coinTenCounter += 1 });
        } else {
            this.setState({ coinTwentyCounter: this.state.coinTwentyCounter += 1 });
        }
    };

    render() {
        return (
            // panel
            <div className="panel">
                <h1 style={{color:"white", border:"solid gray", width:"100px", borderRadius:"10px"}}>Coins</h1>
               <div className="Coin-card"> 
                {/* CoinCard Images */}
                <CoinCard 
                    imageName="ones.png"
                    coin="One"
                    coinCounter={this.state.coinOneCounter}
                    onCoinClick={this.props.onCoinClick}
                    incrementCounter={this.incrementCounter}
                />
                   <CoinCard 
                    imageName="two.png"
                    coin="Two"
                    coinCounter={this.state.coinTwoCounter}
                    onCoinClick={this.props.onCoinClick}
                    incrementCounter={this.incrementCounter}
                />
                   <CoinCard 
                    imageName="five.png"
                    coin="Five"
                    coinCounter={this.state.coinFiveCounter}
                    onCoinClick={this.props.onCoinClick}
                    incrementCounter={this.incrementCounter}
                />
                   <CoinCard 
                    imageName="ten.png"
                    coin="Ten"
                    coinCounter={this.state.coinTenCounter}
                    onCoinClick={this.props.onCoinClick}
                    incrementCounter={this.incrementCounter}
                />
                   <CoinCard 
                    imageName="twenty.png"
                    coin="Twenty"
                    coinCounter={this.state.coinTwentyCounter}
                    onCoinClick={this.props.onCoinClick}
                    incrementCounter={this.incrementCounter}
                />
              </div>
            </div>
        );
    }
}
