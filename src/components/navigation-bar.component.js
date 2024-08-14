import React from "react";
import { Container, Row, Navbar, Nav, Image } from "react-bootstrap";

const logo = require ('../img/mm.png')

class NavigationBar extends React.Component {
    render() {
        return(
            <Row  className="p-0">
            <Navbar bg="black" variant="dark" expand="lg">
                <Container >
                    <Navbar.Brand className="text-warning" href="#home">
                        <Image 
                            src={logo} 
                            width="30"
                            height="30"
                            className="d-inline-block align-top" 
                        />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link className="nav-link text-warning" href={"/home"}>
                            Home
                        </Nav.Link>
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