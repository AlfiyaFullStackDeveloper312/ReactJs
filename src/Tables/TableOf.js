import React from "react";
import "./TableOf.css";

class TableOf extends React.Component {
  constructor(props) {
    super(props);
    this.state = {tableOf: 1};
  }
  renderTable = () => {
    let i = 1;
    let  tabelCellArray = [];
    while (i <= 10) {
      tabelCellArray.push(this.renderCell(this.state.tableOf,i));
      i++;
    }
    return tabelCellArray;
  };
  renderTableOf = () => {
    let i = 1;
    let array = [];
    while (i <= 10) {
      let index = i;
      // defining ui
      let ui = (
        <button
          className="cell-button"
          style={{ backgroundColor: "lightpink", fontSize: "bold" }}
          onClick={() => {
            this.buttonClicked(index);
          }}
        >
          {index}
        </button>
      );
      // adding ui to array
      array.push(ui);
      //   loop index
      i++;
    }
    return <div className="row">{array}</div>;
  };
  buttonClicked = (index) => {
    console.log("INDEX ==", index);
    this.setState({tableOf: index});
  };
  render() {
    return (
      <div className="table">
        {this.renderTableOf()}
        
      </div>
    );
  }
}
export default TableOf;
