import React, { useState } from "react";
import { Row, Col, Image } from "react-bootstrap";
import { Fade } from "react-reveal";
import { useLocation } from "react-router-dom";


export default function EpkBio({monster})  {
        return (
                    <Row className="align-items-center justify-content-center p-auto m-auto">
                        <Col  lg={6} className="text-white ">
                            <Fade left >
                                    <h1 className="text-warning">{monster.name}</h1>
                                    <h5 >
                                    delivers an acoustic blend of folk and punk, infused with ska and reggae sensibilities. His music is shaped by influences such as Green Day, Woody Guthrie, Streetlight Manifesto, and Pat the Bunny, creating a sound that's both unique and dynamic.
                                    </h5>
                                    <h5>
                                    With 15 years of experience in playing music and running sound, Ethan has honed his craft both on stage and behind the scenes. His dedication to the art extends to the studio, where he has been producing music for the past 7 years, refining the sounds that define his style.
                                    </h5>
                            </Fade>
                        </Col>
                        <Col sm={6} md={6} lg={4} className="text-white">
                            <Fade right >
                                <Image width="100%" src={require(`../img/epkpics/${monster.pics[0]}.png`)} />
                            </Fade>
                        </Col>
                        <Col sm={6} md={6} lg={4} className="text-white d-none d-sm-block">
                            <Fade left >
                                <Image width="100%" src={require(`../img/epkpics/${monster.pics[1]}.png`)} />
                            </Fade>
                        </Col>
                        <Col md={9} lg={6} className="text-white">
                            <Fade right >
                                    <h5>
                                    For the past 3 years, Ethan has been hosting open mics and showcases called "Musical Monsters," fostering a community of musicians and bringing new talent to the forefront. His experience in these settings has allowed him to develop a deep connection with audiences, making each performance memorable.
                                    </h5>
                                    <h5>
                                    Known for his refined yet high-energy performances, Ethan knows how to engage an audience and keep them listening. Whether it’s an intimate venue or a lively bar, he’s ready to bring his passion for music to the stage, ensuring an experience that resonates with listeners.
                                    </h5>
                            </Fade>
                        </Col>
                        <Col sm={6} md={6} lg={4} className="text-white d-block d-sm-none">
                            <Fade left >
                                <Image width="100%" src={require(`../img/epkpics/${monster.pics[1]}.png`)} />
                            </Fade>
                        </Col>
                    </Row>
                 )
}