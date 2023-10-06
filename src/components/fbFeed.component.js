import React from "react";
import { Card, Col, Row } from "react-bootstrap";

class FbFeed extends React.Component {
    render () {
        return(
            <Card>
                <Card.Body>
                    <Row fluid>
                    <Col fluid>
                    <iframe src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2FECMusician%2F&tabs=timeline&width=340&height=500&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId=1051569862871086"  height="2000" width="500" allowFullscreen="true" title="FB Feed" fluid></iframe>

                    </Col>
                    </Row>
                </Card.Body>
            </Card>
        )
    }
}

export default FbFeed;