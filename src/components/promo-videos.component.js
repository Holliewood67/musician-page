import React from "react";
import { Row, Col, Ratio } from "react-bootstrap";
import { Fade } from "react-reveal";


export default function PromoVids() {
        return(
            <Row>
                <h1>
                    Promo Clips
                </h1>
                    <Fade bottom>
                <Row className="py-2">
                    <Col xs={12} md={4} >
                        <Ratio >
                            <iframe
                                className="promo"
                                src='https://www.youtube.com/embed/5mLmzrPC1m8'
                                frameBorder='0'
                                allow='autoplay; encrypted-media'
                                allowFullScreen
                                title='Promo1'
                            />
                        </Ratio>
                    </Col>
                    <Col xs={12} md={4}>
                        <Ratio>
                            <iframe
                                className="promo"
                                src='https://www.youtube.com/embed/ZMAvN_ZYosc'
                                frameBorder='1'
                                allow='autoplay; encrypted-media'
                                allowFullScreen
                                title='Promo2'
                            />
                        </Ratio>
                    </Col>
                    <Col xs={12} md={4}>
                        <Ratio>
                            <iframe
                                className="promo"
                                src='https://www.youtube.com/embed/I2qYE4QkhaU'
                                frameBorder='0'
                                allow='autoplay; encrypted-media'
                                allowFullScreen
                                title='Promo3'
                            />
                        </Ratio>
                    </Col>
                </Row>
                    </Fade>
            </Row>
        )
    }
