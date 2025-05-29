import React, { Component } from "react";
import "./HomePage.css";
import ImdbDashboard from "./RJ_Imdb/ ImdbDashboard";
import CoinDashboard from "./RJ_Coins/ CoinDashboard";
import ActorDashboard from "./RJ_Actors/Actor";
import Greeting from "./RJ_Greeting/ Greeting";
import FruitDashboard from "./RJ_Fruits/ Fruits";
import Bulb from "./RJ_Bulb/Bulb";

export default class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      projects: [
        { name: "ImdbDashboard", component: <ImdbDashboard /> },
        { name: "CoinDashboard", component: <CoinDashboard /> },
        { name: "Actors", component: <ActorDashboard /> },
        { name: "Greeting", component: <Greeting /> },
        { name: "Fruits", component: <FruitDashboard /> },
        { name: "Bulb", component: <Bulb /> },
      ],
      selectedProject: null, // Initially no project is selected
    };
  }

  handleProjectClick = (project) => {
    this.setState({ selectedProject: project.component });
  };

  render() {
    return (
      <div className="Home-main-container">
        <h1 style={{fontSize: "40px" }}>React Projects</h1>
        <div className="Projects-Container">
          {this.state.projects.map((project, index) => (
            <div
              key={index}
              className="project-box"
              onClick={() => this.handleProjectClick(project)}
              style={{ cursor: "pointer" }}
            >
              {project.name}
            </div>
          ))}
        </div>
        <br />
        {/* Render the selected project below */}
        <div className="Project-Content">
          {this.state.selectedProject ? this.state.selectedProject : <p></p>}
        </div>
      </div>
    );
  }
}
