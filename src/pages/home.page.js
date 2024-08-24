import React from "react";
import { Container } from "react-bootstrap";
import { Helmet } from "react-helmet-async";

import WelcomeHeader from "../components/welcome-header.component";
import Mission from "../components/mission.component";
import Monsters from "../components/monsters.component";
import SEO from "../components/SEO.component";


class HomePage extends React.Component {
    render () {
        return (
          <Container>
            <SEO 
              title="Ethan Cantrell's Musical Monsters"
            />
            <WelcomeHeader />
            <Mission />
            <Monsters />
          </Container>
          )
    }
}

export default HomePage;