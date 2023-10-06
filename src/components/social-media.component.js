import React from "react";
import { Row, Col } from "react-bootstrap";


import SocialMediaCard from "./social-media-card.component";

const FBLogo = require('../icons/facebook.png');
const IGLogo = require('../icons/instagram.png');
const TTLogo = require('../icons/tik-tok.png');
const YTLogo = require('../icons/youtube.png');
const SPLogo = require('../icons/spotify.png');
const BCLogo = require('../icons/bandcamp.png');



class SocialMedia extends React.Component {
    render(){
        return(
                <Row className="py-2 mx-auto mt-3">
                  <Row>
                  <h1>SOCIAL MEDIA</h1>
                  </Row>
                <Row className="my-2">
                  <Col className="my-2">                
                    <SocialMediaCard imagePath={FBLogo} innerText=" Facebook" urlPath="https://www.facebook.com/ECMusician" />
                  </Col>
                  <Col className="my-2">
                    <SocialMediaCard imagePath={IGLogo} innerText=" Instagram" urlPath="https://www.instagram.com/ethancantrellmusician/" />
                  </Col>
                  <Col className="my-2">
                    <SocialMediaCard imagePath={TTLogo} innerText="TikTok" urlPath="https://www.tiktok.com/@ethancantrellmusician" />
                  </Col>
                  <Col className="my-2">
                    <SocialMediaCard imagePath={SPLogo} innerText="Spotify" urlPath="https://open.spotify.com/artist/3TrHIZ92sj1YvABKrcJTQE" />
                  </Col>
                  <Col className="my-2">
                    <SocialMediaCard imagePath={YTLogo} innerText="Youtube" urlPath="https://www.youtube.com/channel/UC9fOxoEeGQmTzzXFTQEjqRA" />
                  </Col>
                  <Col className="my-2">
                    <SocialMediaCard imagePath={BCLogo} innerText="Bandcamp" urlPath="https://ethancantrell.bandcamp.com" />
                  </Col>
                </Row>
              </Row>
        )
    }
}

export default SocialMedia;