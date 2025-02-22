// import React from "react";
// import "./Counter.css";

//  class Counter extends React.Component {
//      constructor(props) {
//          super(props);
//          this.state = {
//              counter: 0,
//              //     alert: false,
//              // };
//          }

//      }

//      CounterIncre = () => {
//         this.setState({
//             counter: this.state.counter + 1
//             })
//      };

//      render() {
//          return (
//              <div >
//                  <button className="Button" onClick={() => this.CounterIncre()} style={this.props.styleColor}> {this.props.buttonName}
//                     <text> {this.state.counter}</text>
//                  </button>
//              </div>
//          );
//      }
//  }
//  export default Counter;

import React from "react";

import "./Counter.css";

class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = { numberclicked: 0 };
  }
  render() {
    return (
      <div className="container">
        <button
          className="button"
          style={this.props.buttonStyle}
          onClick={() =>
            this.setState({ numberclicked: ++this.state.numberclicked })
          }
        >
          <text className="btn-style">{this.state.numberclicked}</text>
        </button>
      </div>
    );
  }
}
export default Counter;
