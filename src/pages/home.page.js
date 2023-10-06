import React from "react";
import SocialMedia from '../components/social-media.component';
import FbFeedComponent from "../components/fbFeed.component";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
const epImg = require('../img/Free Drugs For Life Cover Art.png');


class HomePage extends React.Component {
    render () {
        return (
            <Container className="home-page App">
            <Row>
                <Card className="
                card 
                m-4
                p-2">
                  <Card.Title>Ethan Cantrell</Card.Title>
                  <Card.Subtitle className="mb-2 text-muted">Musician</Card.Subtitle>
                  <Card.Body>
                    <Row>
                      <Col>
                        <Card.Body>
                          Hi, my name is Ethan, and I write/play "music" as well as hosting Open Mic and Singer/Songwriter nights at venues around Tulsa.
                        </Card.Body>
                      </Col>
                      <Col>
                        <Card className="m-2 p-2">
                          <Row>
                            <Col>
                              <Card.Img className="m-2" src={epImg} />
                              <Button href="https://show.co/pD3L7L2">PRE-SAVE ON SPOTIFY NOW</Button>
                            </Col>
                            <Col>
                              <Card.Body>
                                <Card.Text>
                                  Don't forget to check out my new EP that is coming out on all platform on Sept 26th
                                </Card.Text>
                              </Card.Body>
                            </Col>
                          </Row>  
                        </Card>
                      </Col>
                    </Row>
                  </Card.Body>
                </Card>
            </Row>
            <Row>
              <FbFeedComponent/>
            </Row>
            <Row>
                <SocialMedia />
            </Row>
            </Container>
          )
    }
}

export default HomePage;