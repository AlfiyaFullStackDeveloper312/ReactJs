import React from "react";
import "./About.css";
export default class About extends React.Component {
  render() {
    return (
      <div className="main-container">
        {/* for logo */}
        <div className="logo">
          <img src="https://static.vecteezy.com/system/resources/previews/054/577/714/non_2x/3d-female-business-woman-holding-folder-free-png.png" style={{height:"300px",width:"350px",marginLeft:"50px",marginTop:"20px"}} />
          </div>
          {/* for information */}
          <div className="information">
             <h3 style={{ color:"white",marginLeft:"40px",fontSize:"30px"}}>Hello,<span style={{color:"pink"}}>its me</span></h3>
             <h2 style={{ color:"#E82561",marginLeft:"80px",fontSize:"35px"}}>Alfiya Pathan</h2>
             <h2 style={{color:"white"}} >And  <span style={{color:"pink",fontSize:"40px", marginLeft:"20px"}}>I'm a Full Stack Developer</span> </h2>
          </div>
      </div>
    );
  }
}
