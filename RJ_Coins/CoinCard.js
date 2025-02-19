import React from "react";
import "./CoinCard.css";

export default class CoinCard extends React.Component {
    render() {
        return (
            <div
                className="coin-card"
                onClick={() => {
                    this.props.onCoinClick(this.props.coin); 
                    this.props.incrementCounter(this.props.coin); 
                }}
            >
                <img className="coin-image" src={this.props.imageName} alt={this.props.coin} />
                {this.props.coinCounter ? (
                    <text className="coin-badge">Count Coins:{this.props.coinCounter}</text>
                ) : null}
            </div>
        );
    }
}

 