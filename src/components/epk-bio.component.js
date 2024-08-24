import React, { useState } from "react";
import { Row, Col, Image } from "react-bootstrap";

export default function EpkBio({monster})  {

    const [picIndex, setPicIndex] = useState(0);

    const BioPic1 = () => {
        let index = Math.floor(Math.random() * monster.pics.length);
        setPicIndex(index);
        return <Image roundedCircle  width="100%" src={require(`../img/epkpics/${monster.pics[index]}.png`)} />
    }

    const BioPic2 = () => {
        let pics = monster.pics.slice();
        pics.splice(picIndex, 1);
        let index = Math.floor(Math.random() * pics.length);
        return <Image roundedCircle  width="100%" src={require(`../img/epkpics/${pics[index]}.png`)} />

    }

        return (
                    <Row className="align-items-center justify-content-center p-2 m-auto">
                        <Col  lg={6} className="text-white ">
                                    <h1 className="text-warning">{monster.name}</h1>
                                    <h5 >{monster.bioText[0]}</h5>
                                    <h5>{monster.bioText[1]}</h5>
                        </Col>
                        <Col sm={6} md={6} lg={4} className="text-white">
                                <BioPic1 />
                        </Col>
                        <Col sm={6} md={6} lg={4} className="text-white d-none d-sm-block">
                                <BioPic2 />
                        </Col>
                        <Col md={9} lg={6} className="text-white">
                                    <h5>{monster.bioText[2]}</h5>
                                    <h5>{monster.bioText[3]}</h5>
                        </Col>
                        <Col sm={6} md={6} lg={4} className="text-white d-block d-sm-none">
                                <BioPic2 />
                        </Col>
                    </Row>
                 )
}