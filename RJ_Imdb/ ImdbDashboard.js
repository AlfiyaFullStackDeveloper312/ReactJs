import React from "react";
import "./ImdbDashboard.css";
import Header from "./Header";
import Form from "./Form";
import Panel from "./Panel";
export default class ImdbDashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      movieArray: [], // Stores added movies
      showForm: false, // Controls which panel is shown
    };
  }

  // Function to show form
  openForm = () => {
    this.setState({ showForm: !this.state.showForm });
  };

  // Function to add a movie and return to movie list
  addMovie = (movie) => {
    console.log("Added movie:", movie);
    this.setState((prev) => ({
      movieArray: [...prev.movieArray,movie], // Add new movie at the top
      showForm: false, // Switch back to Panel view
    }));
  };

  render() {
    return (
      <div className="imdb-container">
        <Header openForm={this.openForm} />
        <hr />
        {this.state.showForm ? (
          <Form addMovie={this.addMovie} />
        ) : (
          <Panel movieArray={this.state.movieArray} openForm={this.openForm} />
        )}
      </div>
    );
  }
}
