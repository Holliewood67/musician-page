import React from "react";
import { Row, Col } from "react-bootstrap";
import { Fade } from "react-reveal";

class EpkBio extends React.Component {
    render() {
        return (
                <Row>
                    <Col md={9} lg={7} className="mx-auto text-white">
                        <Fade bottom >
                                <h1 className="text-warning">Ethan Cantrell</h1>
                                <p >
                                    is a seasoned singer-songwriter and charismatic host based in the vibrant Tulsa music scene. With a musical journey spanning 14 years, Ethan has carved his niche by blending the down-to-earth essence of classic folk with the raw energy of punk and ska.</p>
                                <p>
                                    Ethan's passion for music ignited at a young age, and over the years, he has honed his craft,weaving together an acoustic blend of the timeless storytelling of folk with the rebellious spirit of punk.
                                </p>
                                <p>
                                    Beyond his musical prowess, he is also a captivating host, known for his engaging and lively presence on stage. Ethan's performances are not just concerts; they are immersive experiences, where the connection between artist and audience is palpable.
                                </p>

                        </Fade>
                    </Col>
                </Row>
        )
    }
}

export default EpkBio;