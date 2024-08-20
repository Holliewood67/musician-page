import React from "react";
import { Row} from "react-bootstrap";


//Components
import MonsterCard from "./monster-card.component";

import monsters from "../data/monsters";

export default function Monsters(){
        return (
            <>
                <Row className="p-3 justify-content-center">  
                    <h1>MEET THE MONSTERS</h1>
                </Row>      
                <Row className="p-3 justify-content-center">
                    {monsters.monsters.map((monster, i) => {
                        return <MonsterCard key={i} monster={monster} />

                    })}
                </Row>
            </>
        )
    }

