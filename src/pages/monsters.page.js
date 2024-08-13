import React from "react";
import { Container} from "react-bootstrap";

//Components
import Monsters from "../components/monsters.component"
class MonstersPage extends React.Component {
    render() {
        return (
            <Container className="m-auto" fluid>
                <h1>Meet The Monsters</h1>
                <p>Bio paragraph about the musical monsters and what they are what our mission statement is.</p>
                <Monsters />
            </Container>
        )
    }
}

export default MonstersPage;