import React from "react";
import { Row, Col, Container } from "react-bootstrap";

class Footer extends React.Component{
    render() {
        return (
            <Container>
                <Row className="mt-5">
                    <Col >
                    <h3>Thank you for visiting!</h3>
                    </Col>
                </Row>
            </Container>
  
        )
    }
}

export default Footer;