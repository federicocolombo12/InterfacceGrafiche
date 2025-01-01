import * as React from 'react';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import {useContext} from "react";
import {StateContext} from "./Reducer";
import {setVisualizzazione} from "./Action";

export default function ColorToggleButton() {
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
            <ToggleButton value="giornaliero" onClick={()=>dispatch(setVisualizzazione("giornaliero"))}>Giornaliero</ToggleButton>
            <ToggleButton value="settimanale" onClick={()=>dispatch(setVisualizzazione("settimanale"))}>Settimanale</ToggleButton>
            <ToggleButton value="mensile" onClick={()=>dispatch(setVisualizzazione("mensile"))}>Mensile</ToggleButton>
        </ToggleButtonGroup>
    );
}