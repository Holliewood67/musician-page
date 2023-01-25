import React from "react";
import { Row, Col, Card } from "react-bootstrap";

class EpkBio extends React.Component {
    render() {
        return (
            <Col  xs={12} md={7} >
                        <Card className="card">
                            <Row>
                                <Col>
                                    <Card.Body>
                                    <Card.Title>Ethan Cantrell</Card.Title>
                                    <Card.Text>
                                        Ethan Cantrell is a local Tulsa musician, open mic host, and music producer. Ethan has been playing and writing his own music for over 14 years.
                                    </Card.Text>
                                    <Card.Text>
                                        He originally played with a four-piece punk band called *67 from 2011 until 2015, when they disbanded. After that, he took a break from playing publically to focus on his job and to focus on retooling his sound for an acoustic guitar. After this hiatus, he began attending open mics and playing solo in Tulsa and the surrounding areas in early 2022.
                                    </Card.Text>
                                    <Card.Text>
                                        After just a few months of this, as well as a notable fully unplugged performance at a local art bar, Ethan was asked to create and host a weekly singer/songwriter night there. This quickly began to gain traction and attention among local musicians in the community, and has since grown into a thriving weekly event that continues on to this day.
                                    </Card.Text>
                                    <Card.Text>
                                        During this time,  the host of a local long-running open mic at a downtown bar took notice of Ethan’s professional, high energy, and supportive stage presence. In August of 2022, this would result in Ethan being asked by the host to take the reins as the new host of the weekly open mic.
                                    </Card.Text>
                                    <Card.Text>
                                        Ethan still continues to host and play every Wednesday and Thursday night at The Fur Shop and Lot No. 6 respectively in Tulsa. He is incredibly thankful for all of the wonderful people that he has gotten to meet along this journey, and he excitedly looks forward to what this next year will bring!
                                    </Card.Text>
                                    </Card.Body>
                                </Col>
                            </Row>
                        </Card>
                    </Col>
        )
    }
}

export default EpkBio;