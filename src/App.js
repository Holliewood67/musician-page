import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import NavigationBar from './components/navigation-bar.component';
import HomePage from './pages/home.page';
import ConstructionPage from './pages/construction.page';

import { Container, Row, Col } from 'react-bootstrap';


function App() {
  return (
    <Router>
      <Container fluid className="App" >
        <Row className="header">
          <Col className="p-0">
            <NavigationBar />
          </Col>
        </Row>
        <Row className="body">
          <Routes>
            <Route path='/' element={<HomePage/>} />
            <Route path='/home' element={<HomePage/>} />
            <Route path="/lyrics" element={<ConstructionPage/>} />
          </Routes>
        </Row>
        <Row className="footer">
          <Col>
            <a href="https://www.flaticon.com/free-icons" title="icon attribution">Icons created by Grow studio and Freepik - Flaticon</a>
          </Col>
        </Row>
      </Container>
    </Router>
  );
}

export default App;
