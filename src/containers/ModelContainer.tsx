import { Box, Container, Typography } from "@mui/material";
import ModelsFilter from "../components/ModelsFilter";
import ModelsList from "../components/ModelsList";
import React, { useState } from "react";
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
    */
   const eyeColours = [...new Set(models.map(model => model.facial_attributes.eye_colour))].map(m => ({group: 'Eye Colour', value: m}))
   const hairColours = [...new Set(models.map(model => model.facial_attributes.hair_colour))].map(m => ({group: 'Hair Colour', value: m}))

    let options: Option[] = [...eyeColours, ...hairColours];

    const [filteredModels, setFilteredModels] = useState(models);
    const [selectedOptions, setSelectedOptions] = useState<Option[]>([]);
    
    const filterModels = function (models: any, selectedOptions: any) {
        if (selectedOptions && selectedOptions.length === 0) return models
        return models.filter((m: Model) => {
            const allowedHairs = selectedOptions
                .filter((o: Option) => o.group === 'Hair Colour')
                .map((o: Option) => o.value)
            const allowedEyes = selectedOptions
                .filter((o: Option) => o.group === 'Eye Colour')
                .map((o: Option) => o.value)
            return allowedEyes.includes(m.facial_attributes.eye_colour)
                || allowedHairs.includes(m.facial_attributes.hair_colour)
        })
    }
    
    const workingModels = filterModels(filteredModels, selectedOptions)
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
            <Container sx={{py: 8}} maxWidth="md">
                <ModelsList models={workingModels}/>
            </Container>
        </>
    );
}

export default ModelContainer;
