import React from "react";
import { Card, Row, Col, Ratio } from "react-bootstrap";

class PromoVids extends React.Component {
    render() {
        return(
            <Card xs={12} md={4} className="card mb-5 p-4">
                <Row>
                    <Card.Title>
                        Promo Clips
                    </Card.Title>
                </Row>
                <Row fluid>
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
            </Card>
        )
    }
}

export default PromoVids;