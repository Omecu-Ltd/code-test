import React from "react";
import { Autocomplete, Chip, TextField } from "@mui/material";
import { Option } from "../@types/mui";

interface ModelsFilterProps {
  options: Option[];
  setSelectedOptions: React.Dispatch<React.SetStateAction<Option[]>>;
}

function ModelsFilter({ options, setSelectedOptions }: ModelsFilterProps) {
  return (
    <Autocomplete
      multiple
      id="tags-standard"
      options={options}
      getOptionLabel={(option) => option.value}
      groupBy={(option) => option.group}
      defaultValue={[]}
      isOptionEqualToValue={(option, value) =>
        option.value === value.value && option.group === value.group
      }
      renderInput={(params) => {
        return (
          <TextField {...params} variant="standard" label="Filter Models" />
        );
      }}
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
