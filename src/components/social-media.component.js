import React from "react";
import { Row } from "react-bootstrap";


import SocialMediaCard from "./social-media-card.component";

const FBLogo = require('../icons/facebook.png');
const IGLogo = require('../icons/instagram.png');
const TTLogo = require('../icons/tik-tok.png');
const YTLogo = require('../icons/youtube.png');
const SPLogo = require('../icons/spotify.png');
const BCLogo = require('../icons/bandcamp.png');



export default function SocialMedia({monster}) {
        return(
                <Row className="py-2 mt-3">
                  <Row>
                  <h1>SOCIAL MEDIA</h1>
                  </Row>
                <Row className="my-2">
                    {monster.fbLink ? <SocialMediaCard imagePath={FBLogo} innerText=" Facebook" urlPath={monster.fbLink}/> : <></>}
                    {monster.igLink ? <SocialMediaCard imagePath={IGLogo} innerText=" Instagram" urlPath={monster.igLink} /> : <></>}
                    {monster.ttLink ? <SocialMediaCard imagePath={TTLogo} innerText="TikTok" urlPath={monster.ttLink} /> : <></>}
                    {monster.ytLink ? <SocialMediaCard imagePath={YTLogo} innerText="Youtube" urlPath={monster.ytLink} /> : <></>}
                    {monster.bcLink ? <SocialMediaCard imagePath={BCLogo} innerText="Bandcamp" urlPath={monster.bcLink} /> : <></>}
                </Row>
              </Row>
        )
    }
