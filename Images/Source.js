import React from "react";
import "./Source.css"
import logo from '../Images/asset/back.jpg';
export default class  Source extends React.Component {
    render() {
      return (
        <div className="container">
          <img src={logo} className="Image" />
        </div>
      );
    }
  }