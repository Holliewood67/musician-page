import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';


import NavigationBar from './components/navigation-bar.component';
import SocialMedia from './components/social-media.component';
import { Card, Container, Row, Col } from 'react-bootstrap';

function App() {
  return (
    <Container fluid className="App" >
      <Row className="header">
        <Col className="p-0">
          <NavigationBar />
        </Col>
      </Row>
      <Row className="body">
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
      </Row>
      <Row className="footer">
        <Col>
          <a href="https://www.flaticon.com/free-icons" title="icon attribution">Icons created by Grow studio - Flaticon</a>
        </Col>
      </Row>
    </Container>
  );
}

export default App;
