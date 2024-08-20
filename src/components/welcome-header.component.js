import React from "react";
import { Row, Col, Image } from "react-bootstrap";

const strawmanImage = require('../img/mm.png');


export default function WelcomeHeader() {
        return (
            <Row className="align-items-center justify-content-center m-auto">
            <Col md={5}>
              <h1>Welcome</h1>
              <h2>To the home of</h2>
              <h1>Ethan Cantrell's</h1>
              <h1>Musical Monsters</h1>
            </Col>
            <Col md={5}>
              <Image src={strawmanImage} fluid />
            </Col>
          </Row>

        )
    }
