import React from "react";
import { Container, Row, Col, Card  } from "react-bootstrap";


class ConstructionPage extends React.Component {
    render () {
        return (
            <Container>
                <Row>
                    <Col>
                        <Card>
                            <Card.Title>
                                Uh oh! 
                            </Card.Title>
                            <Card.Text>
                            Looks like this page is still under construction. Check back later for more content! 
                            </Card.Text>
                        </Card>
                    </Col>
                </Row>
            </Container>
        )
    }
}

export default ConstructionPage;