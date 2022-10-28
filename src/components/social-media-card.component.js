import React from "react";
import { Button, Row, Col, Image } from "react-bootstrap";

class SocialMediaCard extends React.Component {
    render(){
        return(
                 <Button className="social-media-card m-2" id={this.props.coloring} href={this.props.urlPath} >
                     <Row >
                         <Col className="m-auto">
                             <Image  className="social-media-img" src={this.props.imagePath} />
                             {this.props.innerText}
                         </Col> 
                     </Row>
                 </Button>

        )
    }
}

export default SocialMediaCard;