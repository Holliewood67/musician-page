import React from "react";
import { Card, Row, Col, Image } from "react-bootstrap";

const apkpic = require("../img/epkpic1.jpg");
const promopic1 = require("../img/epkpic3.jpg");
const promopic2 = require("../img/background2.jpg");
const promopic3 = require("../img/epkpic2.jpg");
const promopic4 = require("../img/epkpic4.jpg");

class PromoPics extends React.Component {
    render() {
        return(
            <Card className="mb-3 p-2">
                        <Card.Title>Promo Pics</Card.Title>
                        <Card.Body>
                            <Row className="p-2">
                                <Col xs={12} md={4}>
                                    <Image className="img-fluid promo promo-pic-vert" src={promopic1}/>
                                </Col>
                                <Col xs={12} md={4}>
                                    <Image className="img-fluid promo promo-pic-vert" src={promopic2}/>
                                </Col>
                                <Col xs={12} md={4}>
                                    <Image className="img-fluid promo promo-pic-vert" src={apkpic}/>
                                </Col>
                            </Row>
                            <Row className="justify-content-md-center">
                                <Col xs={12} md={4}>
                                    <Image className="img-fluid promo promo-pic-horz" src={promopic3}/>
                                </Col>
                                <Col xs={12} md={4}>
                                    <Image className="img-fluid promo promo-pic-horz" src={promopic4}/>
                                </Col>
                            </Row>
                            <Row>
                                
                            </Row>
                            
                        </Card.Body>
                    </Card>
        )
    }
}

export default PromoPics;