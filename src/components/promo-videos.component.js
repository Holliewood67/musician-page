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
                                src='https://www.youtube.com/embed/AiYdouT_7Qs'
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
                                src='https://www.youtube.com/embed/OEcK6fhrlH8'
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
                                src='https://www.youtube.com/embed/59DiiR3uY0o'
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