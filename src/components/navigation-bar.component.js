import React from "react";
import { Container, Navbar, Nav } from "react-bootstrap";

class NavigationBar extends React.Component {
    render() {
        return(
            <Container fluid className="p-0">
            <Navbar bg="dark" variant="dark" expand="lg">
                <Container>
                    <Navbar.Brand href="#home">Ethan Cantrell: Musician</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#link">Lyrics</Nav.Link>
                    </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            </Container>
        )
    }
}

export default NavigationBar;