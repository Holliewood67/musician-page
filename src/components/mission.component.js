import React from "react";
import { Row, Col } from "react-bootstrap";

class Mission extends React.Component {
    render() {
        return(
            <>
            <Row>
              <Col>
                <h1>
                  Our Mission
                </h1>
              </Col>
            </Row>
            <Row>
              <Col>
                <h4>
                  Our mission is to provide independant musicians with the tools to take the next step in their musicalm journey at a feasable cost. Our goal in doing this is to remove the finanical barrier to creative success for indie artists. We provide connections to relevant venues for booking, resources for recording and studio prodiuction, and the manufacturing and distrobution of artist merch! 
                </h4>
              </Col>
            </Row>
          </>

        )
    }
}

export default Mission;