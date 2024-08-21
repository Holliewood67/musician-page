import React from "react";
import { Row, Col, Image } from "react-bootstrap";
import { Fade } from "react-reveal";


export default function EpkBio({monster})  {
        return (
                    <Row className="align-items-center justify-content-center p-2 m-auto">
                        <Col  lg={6} className="text-white ">
                            <Fade left >
                                    <h1 className="text-warning">{monster.name}</h1>
                                    <h5 >{monster.bioText[0]}</h5>
                                    <h5>{monster.bioText[1]}</h5>
                            </Fade>
                        </Col>
                        <Col sm={6} md={6} lg={4} className="text-white">
                            <Fade right >
                                <Image roundedCircle  width="100%" src={require(`../img/epkpics/${monster.pics[0]}.png`)} />
                            </Fade>
                        </Col>
                        <Col sm={6} md={6} lg={4} className="text-white d-none d-sm-block">
                            <Fade left >
                                <Image roundedCircle  width="100%" src={require(`../img/epkpics/${monster.pics[1]}.png`)} />
                            </Fade>
                        </Col>
                        <Col md={9} lg={6} className="text-white">
                            <Fade right >
                                    <h5>{monster.bioText[2]}</h5>
                                    <h5>{monster.bioText[3]}</h5>
                            </Fade>
                        </Col>
                        <Col sm={6} md={6} lg={4} className="text-white d-block d-sm-none">
                            <Fade left >
                                <Image roundedCircle  width="100%" src={require(`../img/epkpics/${monster.pics[1]}.png`)} />
                            </Fade>
                        </Col>
                    </Row>
                 )
}