import React from "react";
import { Row, Col } from "react-bootstrap";

export default function LatestRelease({monster}) {
        return(
            <Row className="p-2">
                    <Col>
                        {monster.spotifyUrl ? <iframe src={`https://open.spotify.com/embed/artist/${monster.spotifyUrl}`}  allowFullScreen width="100%" height="360" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy" title="One Word"/>
                         : 
                         <></>}
                    </Col>
            </Row>
        )
    }
