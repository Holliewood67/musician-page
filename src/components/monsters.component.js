import React from "react";
import { Row} from "react-bootstrap";


//Components
import MonsterCard from "./monster-card.component";

const monsters = [
    {
        name: "Jeff Bush",
        bioPic: "jeff-bush-1",
        link:""
    },
    {
        name: "Morton's Fork",
        bioPic: "mortons-fork-1"
    },
    {
        name: "Andrew Live",
        bioPic: "andrew-live-1"
    },
    {
        name: "Chris Ray",
        bioPic: "chris-ray-1"
    },
    {
        name: "Eric Ryan-Johnson",
        bioPic: "erj-1"
    },
    
]



class Monsters extends React.Component {
    render () {
        return (
            <>
                <Row className="p-3 justify-content-center">  
                    <h1>MEET THE MONSTERS</h1>
                </Row>      
                <Row className="p-3 justify-content-center">
                    <MonsterCard name="Ethan Cantrell" cardPic="ethan-cantrell-1" />
                </Row>
                <Row className="p-3 justify-content-center">
                    {monsters.map((monster, i) => {
                        return <MonsterCard key={i} name={monster.name} cardPic={monster.bioPic} />

                    })}
                </Row>
            </>
        )
    }
}

export default Monsters;