import React from "react";
import { Button, Image } from "react-bootstrap";

class SocialMediaCard extends React.Component {
    render(){
        return(
            
                 <Button className="bg-black border-0 " href={this.props.urlPath} >
                    <Image  className="social-media-img" src={this.props.imagePath} />
                 </Button>

        )
    }
}

export default SocialMediaCard;