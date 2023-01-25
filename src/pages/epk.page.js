import React from "react";
import { Container, Row } from "react-bootstrap";

//Components
import SocialMedia from '../components/social-media.component';
import EpkBio from "../components/epk-bio.component";
import LatestRelease from "../components/latest-release.component";
import PromoVids from "../components/promo-videos.component";
import PromoPics from "../components/promo-pics.component";

class EpkPage extends React.Component {
    render() {
        return (
            <Container fluid className="epk-page App p-5 ">
                <Row fluid className="justify-content-md-center">
                    <EpkBio/>
                    <LatestRelease/>
                </Row>
                <Row>
                    <PromoVids/>
                </Row>
                <Row>
                    <PromoPics/>
                </Row>
                <Row>
                    <SocialMedia/>
                </Row>
            </Container>
        )
    }
}

export default EpkPage;