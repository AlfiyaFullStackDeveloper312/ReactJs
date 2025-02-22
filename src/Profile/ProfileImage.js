import React from "react";
import "./ProfileImage.css";

export default class ProfileImage extends React.Component{
    render(){
        return(
            <div className="container">
<img src={"https://pbs.twimg.com/profile_images/1829166084626210816/c6sR7XYC_400x400.png"} className="Image"/>
            </div>
        );
    }
}
export class ProfileImageTwo extends React.Component{
    render(){
        const defaultImage = "https://w7.pngwing.com/pngs/79/518/png-transparent-js-react-js-logo-react-react-native-logos-icon-thumbnail.png"
        return(
            <div className="Contaier-two">
<img src={defaultImage}className="Image"/>
            </div>
        );
}
}
export class ProfileImageThree extends React.Component{
    render(){
        const defaultImage = "https://w7.pngwing.com/pngs/79/518/png-transparent-js-react-js-logo-react-react-native-logos-icon-thumbnail.png"
        return(
            <div className="Contaier-Three">
<img src={ "https://pbs.twimg.com/media/GWPQpsyWEAMBT3E.jpg"}className="Image"/>
            </div>
        );
};
};

