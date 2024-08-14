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
                  Our mission is to provide independent musicians with the tools to take the next step in their musical journey at a reasonable cost. We aim to remove the financial barrier to creative success for indie artists. We provide connections to relevant venues for booking, resources for recording and studio production, and the manufacturing and distribution of artist merch!
                </h4>
              </Col>
            </Row>
          </>

        )
    }
}

export default Mission;