import { Box, Container, Typography } from "@mui/material";
import ModelsFilter from "../components/ModelsFilter";
import ModelsList from "../components/ModelsList";
import React, { useState, useEffect } from "react";
import { Option } from "../@types/mui";
import { Model } from "../@types/models";


type ModelContainerProps = {
    models: Model[]
}

function ModelContainer({models}: ModelContainerProps) {
    /*
    * Step 2.
    * The options variable needs to be filled with the relevant options, grouped by the attribute type:
    * Eye Colour: blue, green, etc...
    * Hair Colour: blond, auburn, etc...
    * See the following link for info on how the MUI Autocomplete component expects options
    * https://mui.com/material-ui/react-autocomplete/#grouped
    * 
    */

    let options: Option[] = [];
    const [filteredModels, setFilteredModels] = useState(models);
    const [selectedOptions, setSelectedOptions] = useState<Option[]>([]);



        useEffect(() => {
        filterModels()
      }, [selectedOptions])

        
        models.map((model) => {
        const newEyeOption = {group: "Eye Colour", value: model.facial_attributes.eye_colour.toString()}
        const newHairOption = {group: "Hair Colour", value: model.facial_attributes.hair_colour.toString()}
        if(!options.some((option) => option.group === newEyeOption.group && option.value === newEyeOption.value)){
        options.push(newEyeOption)
        } else if (!options.some((option) => option.group === newHairOption.group && option.value === newHairOption.value)){
        options.push(newHairOption)
        }})

        const filterModels = () => {
        if(selectedOptions.length === 0){
            setFilteredModels(models)
        } else {
        const matchingModels = models.filter((model) => {
        return selectedOptions.some((option) => {
        if (option.group === "Eye Colour") {
        return model.facial_attributes.eye_colour === option.value;
        } else if (option.group === "Hair Colour") {
        return model.facial_attributes.hair_colour === option.value;
        } 
        return false;
        });
        });
        setFilteredModels(matchingModels);
        }
};

    /*
    * Step 3.
    * The filterModels function needs to be implemented and called in the relevant place
    */
    // const filterModels = () => {}

    return (
        <>
            <Box
                sx={{
                    bgcolor: 'background.paper',
                    pt: 8,
                    pb: 6,
                }}
            >
                <Container maxWidth="sm">
                    <Typography
                        component="h1"
                        variant="h2"
                        align="center"
                        color="text.primary"
                        gutterBottom
                    >
                        Applicant Models
                    </Typography>
                    <Typography variant="h5" align="center" color="text.secondary" paragraph>
                        Below is a collection of models for your Company's Marketing Campaign. Use the search bar to
                        filter models by their eye or hair colour.
                    </Typography>
                    <ModelsFilter options={options} setSelectedOptions={setSelectedOptions}/>
                </Container>
            </Box>
            <Container sx={{py: 8}} maxWidth="lg">
                <ModelsList models={filteredModels}/>
            </Container>
        </>
    );
}

export default ModelContainer;
