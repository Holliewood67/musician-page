import React from "react";
import { Card, Row, Col, Button } from "react-bootstrap";

// const cardPic = require(`../img/epkpics/${this.props.cardPic}.png`)


class MonsterCard extends React.Component {
    render () {
        return (
            <Col fluid md={4} sm={6} className="align-items-center mb-3">
                <Button variant="monster-card-pic">
                    <Card className="my-1">
                        <Row>
                            <Col >
                                <Card.Img className=" monster-card-pic" variant="top" src={require(`../img/epkpics/${this.props.cardPic}.png`)} />
                            </Col>
                        </Row>
                        <Row >
                            <Col>
                                <Card.Body className="text-center monster-card">
                                <Card.Title style={{fontSize: 32, fontWeight: "bold"}}>{this.props.name}</Card.Title>
                                </Card.Body>
                            </Col>
                        </Row>
                    </Card>
                </Button>
            </Col>
        )
    }
}

export default MonsterCard;