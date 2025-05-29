
// import React from "react";
// import "./NewTable.css";

// class NewTable extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = { tableOf: 1 };
//   }

//   renderCell(tableOf, number) {
//     return (
//       <div className="row" key={number}>
//         <button className="cell-button" style={{ backgroundColor: "lightblue" }}>
//           {tableOf}
//         </button>
//         <span className="multi">{" X "}</span>
//         <button className="cell-button" style={{ backgroundColor: "lightblue" }}>
//           {number}
//         </button>
//         <span className="multi">{" = "}</span>
//         <button className="cell-button" style={{ backgroundColor: "lightcoral" }}>
//           {tableOf * number}
//         </button>
//       </div>
//     );
//   }

//   renderTable() {
//     const { tableOf } = this.state;
//     let tableCellArray = [];
//     for (let i = 1; i <= 10; i++) {
//       tableCellArray.push(this.renderCell(tableOf, i));
//     }
//     return tableCellArray;
//   }

//   renderTableOf() {
//     let array = [];
//     for (let i = 1; i <= 10; i++) {
//       // Define button for each number
//       let ui = (
//         <button
//           key={i}
//           className="cell-button"
//           style={{ backgroundColor: "lightgray", fontWeight: "bold" }}
//           onClick={() => this.buttonClicked(i)}
//         >
//           {i}
//         </button>
//       );
//       array.push(ui);
//     }
//     return <div className="row">{array}</div>;
//   }

//   buttonClicked(index) {
//     console.log("INDEX ==", index);
//     this.setState({ tableOf: index });
//   }

//   render() {
//     return (
//       <div className="table">
//         {this.renderTableOf()}
//         {this.renderTable()}
//       </div>
//     );
//   }
// }

// export default NewTable;



import React from "react";
import "./NewTable.css";
class NewTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {tableOf: 1};
  }
  renderCell(tableOf, number) {
    return (
      <div className="row">
        <button className="cell-button" style={{backgroundColor:"lightcyan"}}>
          {tableOf}</button>
        <text className="multi">{" X "}</text>
        <button className="cell-button" style={{backgroundColor:"lightcyan"}}>
          {number}</button>
        <text className="multi">{" = "}</text>
        <button className="cell-button"style={{backgroundColor:"lightblue"}}>
          {tableOf * number}</button>
      </div>
    );
  };
  renderTable = () => {
    let i = 1;
    let  tabelCellArray = [];
    while (i <= 10) {
      tabelCellArray.push(this.renderCell(this.state.tableOf,i));
      i++;
    }
    return tabelCellArray;
  };
  buttonClicked = (index) => {
    console.log("INDEX ==", index);
    this.setState({tableOf: index});
  };
  render() {
    return (
      <div className="table">
         
        {this.renderTable()}
      </div>
    );
  }
}
export default NewTable;
