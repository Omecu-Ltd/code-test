import React from "react";
import { Grid } from "@mui/material";
import ModelCard from "./ModelCard";
import { Model } from "../@types/models";

interface ModelsListProps {
    models: Model[];
}

const ModelsList = ({models}: ModelsListProps) => {
    return (
        <Grid container spacing={4}>
            {models.map((model) => (
                <Grid item key={model.id} xs={12} sm={6} md={4}>
                    <ModelCard {...model} />
                </Grid>
            ))}
        </Grid>
    );
}

export default ModelsList;
