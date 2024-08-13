import React from "react";
import { Row, Col, Image } from "react-bootstrap";

const strawmanImage = require('../img/mm.png');


class WelcomeHeader extends React.Component{
    render() {
        return (
            <Row className="align-items-center m-auto">
            <Col md={5}>
              <h1>Welcome to EthanCantrell.com</h1>
              <h2>Home of</h2>
              <h1>Ethan Cantrell's</h1>
              <h1>Musical Monsters</h1>
            </Col>
            <Col md={7}>
              <Image src={strawmanImage} fluid />
            </Col>
          </Row>

        )
    }
}

export default WelcomeHeader;