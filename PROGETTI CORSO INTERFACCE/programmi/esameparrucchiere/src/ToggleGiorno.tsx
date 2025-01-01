import * as React from 'react';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import {useContext} from "react";
import {StateContext} from "./Reducer";
import {setData, setVisualizzazione} from "./Action";
import DatePopup from "./setDatePopup";

export default function ToggleGiorno() {
    const [alignment, setAlignment] = React.useState('web');
    const [state,dispatch]=useContext(StateContext)

    const handleChange = (
        event: React.MouseEvent<HTMLElement>,
        newAlignment: string,
    ) => {
        setAlignment(newAlignment);
    };

    return (
        <ToggleButtonGroup
            color="primary"
            value={alignment}
            exclusive
            onChange={handleChange}
            aria-label="Platform"

        >
            <DatePopup/>
        </ToggleButtonGroup>
    );
}