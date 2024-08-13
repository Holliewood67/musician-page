import React from "react";
import { Row} from "react-bootstrap";


//Components
import MonsterCard from "./monster-card.component";



class Monsters extends React.Component {
    render () {
        return (
            <>
                <Row className="p-3 justify-content-center">  
                    <h1>MEET THE MONSTERS</h1>
                </Row>      
                <Row className="p-3 justify-content-center">
                    <MonsterCard name="Ethan Cantrell" cardPic="ethan-cantrell-1" />
                    <MonsterCard name="Ethan Cantrell" cardPic="ethan-cantrell-1" />
                    <MonsterCard name="Andrew Live" cardPic="andrew-live-1" />
                    <MonsterCard name="Andrew Live" cardPic="andrew-live-1" />
                    <MonsterCard name="Jeff Bush" cardPic="jeff-bush-1" />
                </Row>
            </>
        )
    }
}

export default Monsters;