import * as React from 'react';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';
import {useContext} from "react";
import {StateContext} from "./Reducer";

export default function Mensile() {
    const [state,dispatch]=useContext(StateContext)
    return (
        <LocalizationProvider
            dateAdapter={AdapterDayjs}
            localeText={{
                calendarWeekNumberHeaderText: '#',
                calendarWeekNumberText: (weekNumber) => `${weekNumber}.`,
            }}
        >
            <DateCalendar displayWeekNumber
            />
        </LocalizationProvider>
    );
}