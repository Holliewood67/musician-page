import React from "react";
import { Card, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";


export default function MonsterCard({monster}) {
        return (
            <Col  xxl={3} xl={4} md={5} sm={6} className=" align-items-center mb-5 mx-2">
                    <Card  className="flex-fill">
                        <Row>
                <Link  to={`/epk/${monster.urlName}`}
                        state={{monster: monster}}
                        >
                            <Col >
                                <Card.Img className=" monster-card-pic" variant="top" src={require(`../img/epkpics/${monster.pics[0]}.png`)} />
                            </Col>
                </Link >
                        </Row>
                        <Row >
                            <Col>
                                <Card.Body className="text-center monster-card">
                                <Card.Title style={{fontSize: 32, fontWeight: "bold"}}>{monster.name}</Card.Title>
                                </Card.Body>
                            </Col>
                        </Row>
                    </Card>
            </Col>
        )
    }
