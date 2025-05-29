import React from "react";
import "./Project.css";
import logo from "../landing-page/Assets/htmlcss-removebg-preview.png";
export default class Project extends React.Component {
  render() {
    return (
      <div className="conatiner-three">
        <h1 style={{color:"#E82561",fontSize:"45px",marginLeft:"500px" }}>
          <span style={{ color:"pink" }}>Latest </span>Projects
        </h1>
        <div className="image" id="Projects">
          <img src={logo} style={{ height: "200px", width: "220px", boxShadow:"0 0 1em" ,color:"pink  "}} />
          <img src={logo} style={{ height: "200px", width: "220px", boxShadow:"0 0 1em" ,color:"pink  "  }} />
          <img src={logo} style={{  height: "200px", width: "220px", boxShadow:"0 0 1em" ,color:"pink  "}} />
          <img src={logo} style={{  height: "200px", width: "220px", boxShadow:"0 0 1em" ,color:"pink  " }} />
        </div>
      </div>
    );
  }
}
