import React from "react";
import "./Header.css";
import AddMovies from "./AddMovie";
export default class Header extends React.Component {
    addMovie = (newMovie) => {
        this.setState({ movies: [...this.state.movies, newMovie] });
      };
    render() {
        return (
            <div className="Header-Container">
                  <img
          src="Imdb.webp"
          style={{ height: "40px", width: "90px" }}
          alt="Imdb Logo"
        />
        <div className="search-container">
          <input type="text" id="searchInput" placeholder="Search names.." />
          <p style={{ color: "white" }}></p>
        </div>
                {/* <AddMovies  addMovie={this.addMovie} />   */}
            </div>
        );
    }
}
