import React from "react";
import { Col, Button, Image } from "react-bootstrap";

export default function SocialMediaCard ({urlPath, imagePath}) {
        return(
               <Col className="my-2">        
                 <Button className="bg-black border-0 " href={urlPath} >
                    <Image  className="social-media-img" src={imagePath} />
                 </Button>
               </Col>
        )
    }
