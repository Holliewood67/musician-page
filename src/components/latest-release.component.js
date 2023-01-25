import React from "react";
import { Col, Card } from "react-bootstrap";

class LatestRelease extends React.Component {
    render() {
        return(
            <Col xs={12} md={4}>
                <Card className="card">
                    <Card.Title> My Latest Release</Card.Title>
                    <Card.Body>
                        <iframe src="https://open.spotify.com/embed/track/7IR8iDaXrA68oGabDk6VLF?utm_source=generator"    allowfullscreen="" width="100%" height="360" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy" title="One Word"/>
                    </Card.Body>
                </Card>
            </Col>
        )
    }
}

export default LatestRelease;