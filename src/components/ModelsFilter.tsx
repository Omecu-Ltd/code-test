import React from "react";
import { Autocomplete, Chip, TextField } from "@mui/material";
import { Option } from "../@types/mui";



interface ModelsFilterProps {
    options: Option[];
    setSelectedOptions: React.Dispatch<React.SetStateAction<Option[]>>;
}

function ModelsFilter({options, setSelectedOptions}: ModelsFilterProps) {

       const renderOption = (props: any, option: Option) => {
        const capitalizedValue = option.value.charAt(0).toUpperCase() + option.value.slice(1);
        return (
            <li {...props}>
                {capitalizedValue}
            </li>
        );
    };

    return (
            <Autocomplete
            multiple
            id="tags-standard"
            options={options.sort((a, b) => a.group.localeCompare(b.group))}
            className="capitalise-entries"
            getOptionLabel={(option) => option.value}
            groupBy={(option) => option.group}
            defaultValue={[]}
            isOptionEqualToValue={(option, value) => option.value === value.value && option.group === value.group}
            renderInput={(params) => (
                <TextField
                    {...params}
                    variant="standard"
                    label="Filter Models"
                    className="capitalise-entries"
                />
            )}
            renderOption={renderOption}
            renderTags={(value, getTagProps) =>
                value.map((option, index) => (
                    <Chip
                        variant="outlined"
                        label={`${option.group}: ${option.value}`}
                        {...getTagProps({ index })}
                    />
                ))
            }
            onChange={(event, newValue) => {
                setSelectedOptions(newValue);
            }}
        />
    );
}

export default ModelsFilter;
