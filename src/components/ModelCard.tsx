import { Button, Card, CardActions, CardContent, CardMedia, Typography } from "@mui/material";
import React from "react";
import { Model } from "../@types/models";

function capitalize(string: string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

function ModelCard({id, name, facial_attributes, portrait_url}: Model) {
    return (
        <Card key={id}
            sx={{height: '25rem', display: 'flex', flexDirection: 'column', justifyContent: 'space-between'}}
        >
            <img src={portrait_url} height='70%' style={{objectFit: 'cover' }} />
            <div style={{textAlign: "center"}}>
                <Typography>
                   {name}
                </Typography>
                <Typography>
                    {facial_attributes.eye_colour}
                </Typography>
                <Typography>
                    {facial_attributes.hair_colour}
                </Typography>
            </div>
        </Card>
    )
}

export default ModelCard;
