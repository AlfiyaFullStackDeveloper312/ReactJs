 
// import React from "react";
// import "./Player.css";

// class Player extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {};
//   }

//   // Button function to display player image and name
//   button = (playerImage, playerName) => {
//     return (
//       <div>
//         <div>
//           <img src={playerImage} alt={playerName} style={{ width: 100, height: 100 }} />
//           <p>{playerName}</p>
//         </div>
//         <button className="player-button" style={this.props.Style}
//           onClick={() => console.log(`${playerName} button clicked`)}
//         >
//           Click Me
//         </button>
//       </div>
//     );
//   };

//   render() {
//     return (
//       <div>
      
//         {this.button("https://www.hindustantimes.com/static-content/1y/cricket-logos/players/virat-kohli.png","virat kohli"
//         )}
//         {this.button(
//           "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQp5IMvU5mzUNUAVtUPVexkzgt3cDPUE6113Q&s", 
//           "Rohit Sharma"
//         )}
//         {this.button(
//           "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGTOrxNuvbfIegOS-NrnhAEyFrP_oLB2UrOg&s", 
//           "Jasprit Bumra"
//         )}
//       </div>
//     );
//   }
// }

// export default Player;


import React from "react";
import "./Player.css";

class Player extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  // Button function to display player image and name
  button = (playerImage, playerName) => {
    return (
      <div className="player-card">
        <div>
          <img src={playerImage} alt={playerName} style={{ width: 100, height: 100 }} />
          <p>{playerName}</p>
        </div>
        <button
          className="player-button"
          style={this.props.style}
          onClick={() => console.log(`${playerName} button clicked`)}
        >
          
        </button>
      </div>
    );
  };

  render() {
    return (
      <div>
        {/* {/ India Team /} */}
        <div className="team">
        <h2>India</h2>
          <div className="playersOne">
                  {this.button(
                    "https://www.hindustantimes.com/static-content/1y/cricket-logos/players/virat-kohli.png", 
                    "Virat Kohli"
                  )}
                  {this.button(
                    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQp5IMvU5mzUNUAVtUPVexkzgt3cDPUE6113Q&s", 
                    "Rohit Sharma"
                  )}
                  {this.button(
                    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGTOrxNuvbfIegOS-NrnhAEyFrP_oLB2UrOg&s", 
                    "Jasprit Bumrah"
                  )}
                    {this.button(
                    "https://api.bdcrictime.com/Profile/kl-rahul-14_10_2023.jpg", 
                    "K L Rahul"
                  )}
                    {this.button(
                    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScGl9Jw5PJiIdgKtGk0g-UaEvDCkoAxWf9kA&s", 
                    "Shubman Gill"
                  )}
                    {this.button(
                    "https://upload.wikimedia.org/wikipedia/commons/6/67/Rishabh_Pant_in_PMO_New_Delhi.jpg", 
                    "Rishbh Pant"
                  )}
                    {this.button(
                    "https://static.india.com/wp-content/uploads/2024/01/siraj1.jpg?impolicy=Medium_Widthonly&w=400&h=800", 
                    "Mohammad Siraj"
                  )}
          </div>
       

        {/* {/ Australia Team /} */}
       
          <h2>Australia</h2>
          <br/>
          <div className="playersTwo">
            {this.button(
              "https://opt.toiimg.com/recuperator/img/toi/m-69415515/69415515.jpg", 
              "Steve Smith"
            )}
            {this.button(
              "https://www.hindustantimes.com/static-content/1y/cricket-logos/players/travis-head.png", 
              "Travis Head"
            )}
            {this.button(
              "https://sportsmatik.com/uploads/world-events/players/pat-cummins_1580467882.jpg", 
              "Pat Cummins"
            )}
            {this.button(
              "https://assets.telegraphindia.com/telegraph/2024/Oct/1728880541_sam-konstas.jpg"
            )}
            {this.button(
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBMRLwwq4wM5Rrd1nyszAT5SRyKQAYbfMlCn4-PBqVmy67VVhooaFg0xc2zYKiP9gwc9c&usqp=CAU", 
              "Glenn Maxwell"
            )}
            {this.button(
              "https://m.media-amazon.com/images/M/MV5BNzQzOTk1MTktYTExNC00NGU0LTllYzAtYzVkZjJjM2EzNmY4XkEyXkFqcGc@._V1_.jpg", 
              "Mitchell Marsh"
            )}
          </div>
        </div>
      </div>
    )
  }
}

export default Player;