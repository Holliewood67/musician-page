import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { HelmetProvider } from 'react-helmet-async';

import NavigationBar from './components/navigation-bar.component';
import HomePage from './pages/home.page';
import ConstructionPage from './pages/construction.page';
import EpkPage from './pages/epk.page'
import Footer from './components/footer.component';
import MonsterPage from './pages/monsters.page'

import { Container, Row } from 'react-bootstrap';
import ScrollToTop from './components/ScrollToTop.component';


function App() {
  const helmetContext = {}
  return (
    <HelmetProvider context={helmetContext}>
    <Container fluid className="bg-black text-warning text-center" >
      <NavigationBar className="header"/>
      <Row>
        <Router>
          <ScrollToTop />
              <Routes>
                <Route path='/' element={<HomePage/>} />
                <Route path='/home' element={<HomePage/>} />
                <Route path='/epk/:monsterName' element={<EpkPage/>} />
              </Routes>
        </Router>
      </Row>
      <Footer />
    </Container>
    </HelmetProvider>
  );
}

export default App;
