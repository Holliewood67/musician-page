import React from "react";
import { Row, Col, Ratio } from "react-bootstrap";
import { Fade } from "react-reveal";


class PromoVids extends React.Component {
    render() {
        return(
            <Row>
                <h1>
                    Promo Clips
                </h1>
                    <Fade bottom>
                <Row className="py-2" fluid>
                    <Col xs={12} md={4} >
                        <Ratio >
                            <iframe
                                className="promo"
                                src='https://www.youtube.com/embed/5mLmzrPC1m8'
                                frameborder='0'
                                allow='autoplay; encrypted-media'
                                allowfullscreen
                                title='Promo1'
                            />
                        </Ratio>
                    </Col>
                    <Col xs={12} md={4}>
                        <Ratio>
                            <iframe
                                className="promo"
                                src='https://www.youtube.com/embed/ZMAvN_ZYosc'
                                frameborder='1'
                                allow='autoplay; encrypted-media'
                                allowfullscreen
                                title='Promo2'
                            />
                        </Ratio>
                    </Col>
                    <Col xs={12} md={4}>
                        <Ratio>
                            <iframe
                                className="promo"
                                src='https://www.youtube.com/embed/I2qYE4QkhaU'
                                frameborder='0'
                                allow='autoplay; encrypted-media'
                                allowfullscreen
                                title='Promo3'
                            />
                        </Ratio>
                    </Col>
                </Row>
                    </Fade>
            </Row>
        )
    }
}

export default PromoVids;