import React from "react";
import { Container, Row, Navbar, Nav } from "react-bootstrap";

class NavigationBar extends React.Component {
    render() {
        return(
            <Row fluid className="p-0">
            <Navbar bg="black" variant="dark" expand="lg">
                <Container >
                    <Navbar.Brand className="text-warning" href="#home">Ethan Cantrell: Musician</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link className="nav-link text-warning" href={"/home"}>
                            Home
                        </Nav.Link>
                        {/* <Nav.Link className="nav-link text-warning" href={"/lyrics"}>
                            Lyrics
                        </Nav.Link> */}
                        <Nav.Link className="nav-link text-warning" href={"https://musicalmonstersshop.com/collections/all"}>
                            Store
                        </Nav.Link>
                    </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            </Row>
        )
    }
}

export default NavigationBar;