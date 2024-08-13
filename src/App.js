import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import NavigationBar from './components/navigation-bar.component';
import HomePage from './pages/home.page';
import ConstructionPage from './pages/construction.page';
import EpkPage from './pages/epk.page'
import Footer from './components/footer.component';
import MonsterPage from './pages/monsters.page'

import { Container, Row } from 'react-bootstrap';


function App() {
  return (
    <Container fluid className="bg-black text-warning text-center" >
          <NavigationBar className="header"/>
      <Row>
        <Router>
              <Routes>
                <Route path='/' element={<HomePage/>} />
                <Route path='/home' element={<HomePage/>} />
                <Route path="/lyrics" element={<ConstructionPage/>} />
                <Route path="/monsters" element={<MonsterPage/>} />
              </Routes>
        </Router>
      </Row>
      <Footer />
    </Container>
  );
}

export default App;
