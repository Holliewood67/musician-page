import React from "react";
import { Container, Row, Col } from "react-bootstrap";


class ConstructionPage extends React.Component {
    render () {
        return (
            <Container className="lyrics-page App">
                <Row>
                    <Col>
                        <h1>Uh oh! </h1>
                        <p>Looks like this page is still under construction. Check back later for more content!</p> 
                    </Col>
                </Row>
                <Row><h1 className="text-black">-</h1></Row>
                <Row><h1 className="text-black">-</h1></Row>
                <Row><h1 className="text-black">-</h1></Row>
                <Row><h1 className="text-black">-</h1></Row>
                <Row><h1 className="text-black">-</h1></Row>
            </Container>
        )
    }
}

export default ConstructionPage;