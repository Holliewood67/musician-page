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
import SEO from "../components/SEO.component";


export default function EpkPage({}) {
let monsterParam = useParams();
let monster = monsters.monsters.find(i => i.urlName === monsterParam.monsterName);
        return (
            <Container className="align-items-center justify-content-center" >
                <SEO 
                    title={`${monster.name} - Musical Monsters`}
                    description={monster.bioText[0]}
                    name="Musical Monsters"
                    type="website"
                    image={monster.urlName}

                />
                <EpkBio monster={monster}/>
                <LatestRelease monster={monster}/>
                {/* <PromoVids/> */}
                <SocialMedia monster={monster}/>
            </Container>
        )
    }