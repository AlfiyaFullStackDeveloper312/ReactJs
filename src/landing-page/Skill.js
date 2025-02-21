import React from "react";
import "./Skill.css"
 import logo from "../landing-page/Assets/logo5-removebg-preview (1).png"
 
export default class Skill extends React.Component{
    render(){
        return(
            <div className=" container-two">
                <div className="Information">
                 <h1 style={{color:"#E82561",fontSize:"45px",marginLeft:"400px",marginTop:"60px"}}><span style={{color:"pink"}}>About </span>Me</h1>   
                 <p style={{fontsize:"50px", padding:"60px",marginBottom:"50px"}}> 
                    A versatile Full Stack Developer with expertise in both web and mobile application development. I build dynamic, responsive web applications using HTML, CSS, React, Angular, Node.js, and SQL databases, 
                    while also crafting seamless mobile experiences for iOS platforms using Swift. My approach integrates clean, maintainable code with efficient database management and responsive design, 
                    ensuring high-performance, user-friendly solutions. Whether developing intuitive websites or robust mobile applications,
                     I'm committed to delivering scalable,innovative solutions that drive business success and enhance user satisfaction. Let's collaborate and bring your ideas to life,
                      across all platforms!
                </p>
                </div>
                <div className="logo-two" > 
                <img src={logo} style={{height:"250px",width:"300px",marginTop:"80px",marginLeft:"80px"}}/>
                </div>
            </div>
        )
    }
};