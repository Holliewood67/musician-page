import React from "react";
import { Carousel, Row, Col, Image } from "react-bootstrap";

const promopic1 = require("../img/epkpic1.png");
const promopic2 = require("../img/epkpics/ethan-cantrell-1.png");
const promopic3 = require("../img/epkpic3.png");

class PromoPics extends React.Component {
    render() {
        return(
            <Row>
                <Col className="m-auto" xl={9}>
                    <Carousel  fade  indicators={false} interval={10000} >
                        <Carousel.Item  >
                            <Image className="w-100"  src={promopic1} text="First slide" />
                        </Carousel.Item>
                        <Carousel.Item>
                            <Image className="w-100" src={promopic2} text="Second slide" />
                        </Carousel.Item>
                        <Carousel.Item>
                            <Image className="w-100" src={promopic3} text="Third slide" />
                        </Carousel.Item>
                    </Carousel>
                </Col>
            </Row>

        )
    }
}

export default PromoPics;