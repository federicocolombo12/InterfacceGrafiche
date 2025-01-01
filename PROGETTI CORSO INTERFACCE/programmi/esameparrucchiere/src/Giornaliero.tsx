import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import ToggleGiorno from './ToggleGiorno';
import {useContext} from "react";
import {StateContext} from "./Reducer";
export default function Giornaliero(){
    const [state,dispatch]=useContext(StateContext)
    return (<>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            {state.dataCorrente}
        </Typography>
        {state.listaAppuntamenti.filter(appuntamento=>(appuntamento.data===state.dataCorrente)).map(appuntamento=>

            (<Card sx={{ minWidth: 275 }}>
                <CardContent>
                    <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                        {appuntamento.data}
                    </Typography>
                    <Typography sx={{ mb: 1.5 }} color="text.secondary">
                        {appuntamento.nome}
                    </Typography>
                    <Typography variant="body2">

                        {appuntamento.cognome}
                    </Typography>
                </CardContent>
                <CardActions>

                </CardActions>
            </Card>))}

    </>)
}