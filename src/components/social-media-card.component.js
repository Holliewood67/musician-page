import React from "react";
import { Button, Image } from "react-bootstrap";

export default function SocialMediaCard ({urlPath, imagePath}) {
        return(
            
                 <Button className="bg-black border-0 " href={urlPath} >
                    <Image  className="social-media-img" src={imagePath} />
                 </Button>

        )
    }
