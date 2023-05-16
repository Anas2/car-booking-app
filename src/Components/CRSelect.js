import React from 'react';
import { FormControl, Select, InputLabel, MenuItem } from '@mui/material';

function CRSelect(props) {
    const { arr, label, variant, func,value,disabled } = props;
    return (
        <>
            <FormControl fullWidth variant={variant} sx={{ m: 0, minWidth: 210 }} >
                <InputLabel>{label}</InputLabel>
                <Select
                    label={label}
                    onChange={func}
                    disabled={disabled}
                    value={value}

                >
                    {arr.map((x, i) => {
                        return (
                            <MenuItem value={x} key={i}>{x}</MenuItem>
                        )
                    })}


                </Select>
            </FormControl>


        </>
    );
}

export default CRSelect;