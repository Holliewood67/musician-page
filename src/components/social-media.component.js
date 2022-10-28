import React from "react";
import { Card } from "react-bootstrap";


import SocialMediaCard from "./social-media-card.component";

const FBLogo = require('../icons/facebook.png');
const IGLogo = require('../icons/instagram.png');
const TTLogo = require('../icons/tik-tok.png');
const YTLogo = require('../icons/youtube.png');
const SPLogo = require('../icons/spotify.png');



class SocialMedia extends React.Component {
    render(){
        return(
            <Card>
            <Card.Title>SOCIAL MEDIA</Card.Title>
              <Card.Body>
                <SocialMediaCard coloring="fb-button" imagePath={FBLogo} innerText=" Facebook" urlPath="https://www.facebook.com/ECMusician" />
                <SocialMediaCard coloring="ig-button" imagePath={IGLogo} innerText=" Instagram" urlPath="https://www.instagram.com/ethancantrellmusician/" />
                <SocialMediaCard coloring="tt-button" imagePath={TTLogo} innerText="TikTok" urlPath="https://www.tiktok.com/@ethancantrellmusician" />
                <SocialMediaCard coloring="yt-button" imagePath={YTLogo} innerText="Youtube" urlPath="https://www.youtube.com/channel/UC9fOxoEeGQmTzzXFTQEjqRA" />
                <SocialMediaCard coloring="sp-button" imagePath={SPLogo} innerText="Spotify" urlPath="https://open.spotify.com/artist/3TrHIZ92sj1YvABKrcJTQE" />
              </Card.Body>
            </Card>
        )
    }
}

export default SocialMedia;