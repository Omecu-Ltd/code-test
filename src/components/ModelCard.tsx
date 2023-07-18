import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Skeleton,
} from "@mui/material";
import React from "react";
import { Model } from "../@types/models";

function ModelCard({ id, name, facial_attributes, portrait_url }: Model) {
  const { eye_colour, hair_colour } = facial_attributes;
  return (
    <Card
      key={id}
      sx={{ height: "100%", display: "flex", flexDirection: "column" }}
    >
      {/* Step 1. Implement the visual representation of a Model here */}

      {portrait_url ? (
        <CardMedia sx={{ height: 140 }} image={portrait_url} title="portrait" />
      ) : (
        <Skeleton sx={{ height: 140 }} animation="wave" variant="rectangular" />
      )}

      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {name ?? "undefined"}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Hair Color: {hair_colour ?? "undefined"}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Eye Color: {eye_colour ?? "undefined"}
        </Typography>
      </CardContent>
    </Card>
  );
}

export default ModelCard;
