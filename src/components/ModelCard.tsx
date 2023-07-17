import { Button, Card, CardActions, CardContent, CardMedia, Typography } from "@mui/material";
import React from "react";
import { Model } from "../@types/models";

function ModelCard({id, name, facial_attributes, portrait_url}: Model) {
    return (
        <Card key={id}
              sx={{height: '100%', display: 'flex', flexDirection: 'column'}}
        >
            {/* Step 1. Implement the visual representation of a Model here */}
        </Card>
    )
}

export default ModelCard;
