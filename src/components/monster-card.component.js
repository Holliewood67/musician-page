import React from "react";
import { Card, Row, Col } from "react-bootstrap";

// const cardPic = require(`../img/epkpics/${this.props.cardPic}.png`)


class MonsterCard extends React.Component {
    render () {
        return (
            <Col fluid lg={4} sm={6} className=" align-items-center mb-3">
                    <Card style={{ cursor: "pointer" }} className="flex-fill">
                        <Row>
                            <Col >
                <a  href="epk">
                                <Card.Img className=" monster-card-pic" variant="top" src={require(`../img/epkpics/${this.props.cardPic}.png`)} />
                </a >
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
            </Col>
        )
    }
}

export default MonsterCard;