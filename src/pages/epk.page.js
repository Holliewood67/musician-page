import React from "react";
import { Container} from "react-bootstrap";
import { useLocation, useParams } from "react-router-dom";

//Components
import SocialMedia from '../components/social-media.component';
import EpkBio from "../components/epk-bio.component";
import LatestRelease from "../components/latest-release.component";
import PromoVids from "../components/promo-videos.component";
import PromoPics from "../components/promo-pics.component";

import monsters from "../data/monsters";


export default function EpkPage({}) {
let monsterParam = useParams();
let monster = monsters.monsters.find(i => i.urlName === monsterParam.monsterName);
        return (
            <Container className="align-items-center justify-content-center" >
                <EpkBio monster={monster}/>
                <LatestRelease monster={monster}/>
                {/* <PromoVids/> */}
                <SocialMedia monster={monster}/>
            </Container>
        )
    }