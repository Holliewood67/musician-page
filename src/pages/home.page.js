import React from "react";
import { Container, Row, Col } from "react-bootstrap";

import WelcomeHeader from "../components/welcome-header.component";
import Mission from "../components/mission.component";
import Monsters from "../components/monsters.component";


class HomePage extends React.Component {
    render () {
        return (
          <Container>
            <WelcomeHeader />
            <Mission />
            <Monsters />
          </Container>
          )
    }
}

export default HomePage;