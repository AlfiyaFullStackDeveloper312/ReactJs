import React from "react";
import "./AddMovie.css";
export default class AddMovie extends React.Component {

 
  render() {
    return (
     <div className="Movies-conotainer">
        <button className="add-btn" onClick={()=>this.props.openForm()}>
          Add movies
        </button>
       </div>
    );
  }
}
