import React from "react";
 import "./Profile.css"
export default class ProfileTwo extends React.Component{

    render(){
        const defaultImage = "https://w7.pngwing.com/pngs/79/518/png-transparent-js-react-js-logo-react-react-native-logos-icon-thumbnail.png"
        return(
            <div className="Contaier-two">
<img src={defaultImage}className="Image"/>
            </div>
        );
}
} 
