import React from "react";
import { Container, Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

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
                        <Nav.Link>
                            <Link className="nav-link" to={"/home"}>Home</Link>
                        </Nav.Link>
                        <Nav.Link>
                        <Link className="nav-link" to={"/lyrics"}>Lyrics</Link>
                        </Nav.Link>
                    </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            </Container>
        )
    }
}

export default NavigationBar;