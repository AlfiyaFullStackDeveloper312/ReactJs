 import React from "react";
import "./Header.css";
import AddMovie from "./AddMovie";
export default class Header extends React.Component {
  render() {
    return (
      <div className="Header-Container">
        <img
          src="Imdb.webp"
          style={{ height: "40px", width: "90px" }}
          alt="Imdb Logo"
        />
        <div className="search">
          <input type="text" id="searchInput" placeholder="Search Movies  names.." />
          {/* <p style={{ color: "white" }}></p> */}
        </div>
        <AddMovie openForm={this.props.openForm} />
      </div>
    );
  }
}
