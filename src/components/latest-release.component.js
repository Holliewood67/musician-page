import React from "react";
import { Row, Col } from "react-bootstrap";

class LatestRelease extends React.Component {
    render() {
        return(
            <Row>
                <Row>
                    <h1> My Latest Releases</h1>
                </Row>
                <Row className="py-3">
                    <Col xs={12} md={4}>
                        <iframe src="https://open.spotify.com/embed/track/17rQsQohH9GusanCNYXUVI?utm_source=generator"  allowfullScreen width="100%" height="360" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy" title="One Word"/>
                    </Col>
                    <Col xs={12} md={4}>
                        <iframe src="https://open.spotify.com/embed/track/72Qtry5Jeg2wKZjHpVIfwb?si=652e1449288a4f2d"  allowfullScreen width="100%" height="360" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy" title="One Word"/>
                    </Col>
                    <Col xs={12} md={4}>
                        <iframe src="https://open.spotify.com/embed/track/7IR8iDaXrA68oGabDk6VLF?si=30b8640edd634f3d"  allowfullScreen width="100%" height="360" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy" title="One Word"/>
                    </Col>
                </Row>
            </Row>
        )
    }
}

export default LatestRelease;