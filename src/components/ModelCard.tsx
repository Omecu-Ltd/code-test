import { Card,CardContent, CardMedia, Typography } from "@mui/material";
import  {useState} from "react";
import { Model } from "../@types/models";
import './ModelCard.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass, faPen, faPencil } from "@fortawesome/free-solid-svg-icons";

function ModelCard({id, name, facial_attributes, portrait_url}: Model) {

    const [mouseOver, setMouseOver] = useState(false);

    const handleMouseOver = () => {
        console.log(mouseOver)
        setMouseOver(true)
    }
    const handleMouseLeave=()=> {
        console.log(mouseOver)
        setMouseOver(false)
    }


    return (

        <Card key={id} className="card" onMouseOver={handleMouseOver} onMouseLeave={handleMouseLeave}>
            {/* Step 1. Implement the visual representation of a Model here */}
        <CardMedia className='model-card'  component="img" image={portrait_url} />
        {!mouseOver ? <Typography className="static-name">{name}</Typography> : null}
       {mouseOver ?
       <CardContent className="model-details">
        <CardContent className="hover-icons">
            <Typography><FontAwesomeIcon icon={faPen} fontSize={'1.2em'} /></Typography>
            <Typography><FontAwesomeIcon icon={faMagnifyingGlass} fontSize={'1.2em'} /></Typography>
            
        </CardContent>
        <CardContent className="hair-and-eyes">
            <Typography className="attributes" >Hair Colour<Typography className="hair-and-eye-colours">{facial_attributes.hair_colour}</Typography></Typography>
            <Typography className="attributes">Eye Colour<Typography className="hair-and-eye-colours">{facial_attributes.eye_colour}</Typography></Typography></CardContent>
        <Typography className="hover-name">{name}</Typography>
       </CardContent>
        : null }
        </Card>
    )
}

export default ModelCard;
