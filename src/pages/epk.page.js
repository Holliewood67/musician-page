import React from "react";
import { Container} from "react-bootstrap";
import { useLocation } from "react-router-dom";

//Components
import SocialMedia from '../components/social-media.component';
import EpkBio from "../components/epk-bio.component";
import LatestRelease from "../components/latest-release.component";
import PromoVids from "../components/promo-videos.component";
import PromoPics from "../components/promo-pics.component";



export default function EpkPage({}) {
let location = useLocation().state;
        return (
            <Container className="" fluid>
                <EpkBio monster={location.monster}/>
                <LatestRelease/>
                {/* <PromoVids/> */}
                <SocialMedia/>
            </Container>
        )
    }