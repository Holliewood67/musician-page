import React from "react";
import { Container} from "react-bootstrap";

//Components
import SocialMedia from '../components/social-media.component';
import EpkBio from "../components/epk-bio.component";
import LatestRelease from "../components/latest-release.component";
import PromoVids from "../components/promo-videos.component";
import PromoPics from "../components/promo-pics.component";

class EpkPage extends React.Component {
    render() {
        return (
            <Container className="m-auto" fluid>
                <PromoPics/>
                <EpkBio/>
                <LatestRelease/>
                <PromoVids/>
                <SocialMedia/>
            </Container>
        )
    }
}

export default EpkPage;