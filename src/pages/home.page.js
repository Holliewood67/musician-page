import React from "react";
import SocialMedia from '../components/social-media.component';
import { Container, Row, Col, Card } from "react-bootstrap";

class HomePage extends React.Component {
    render () {
        return (
            <Container>
            <Row >
              <Col lg={6} className="m-auto">
                <Card className="card">
                  <Card.Title>Ethan Cantrell</Card.Title>
                  <Card.Subtitle className="mb-2 text-muted">Musician</Card.Subtitle>
                  <Card.Body>
                    Hi, my name is Ethan, and I write/play "music" as well as hosting Open Mic and Singer/Songwriter nights at venues around Tulsa.
                  </Card.Body>
                </Card>
              </Col>
            </Row>
            <Row>
              <Col lg={6} className="mx-auto my-auto">
                <SocialMedia />
              </Col>
            </Row>
            </Container>
          )
    }
}

export default HomePage;