import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import { TransitionProps } from '@mui/material/transitions';
import {useContext, useState} from "react";
import {TextField} from "@mui/material";
import {StateContext} from "./Reducer";
import {aggiungiAppuntamento} from "./Action";

const Transition = React.forwardRef(function Transition(
    props: TransitionProps & {
        children: React.ReactElement<any, any>;
    },
    ref: React.Ref<unknown>,
) {
    return <Slide direction="up" ref={ref} {...props} />;
});

export default function AlertDialogSlide() {
    const [open, setOpen] = React.useState(false);
    const [nome,setNome]=useState("")
    const [cognome,setCognome]=useState("")
    const [numero,setNumero]=useState("")
    const [prestazione,setPrestazione]=useState("")
    const [date,setDate]=useState("")
    const [ora,setOra]=useState("")
    const [state,dispatch]=useContext(StateContext)


    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };
    const handleClick=()=>{
        dispatch(aggiungiAppuntamento({nome,cognome,numeroTelefono:String(numero),prestazione,data:date,ora}))
    }
    return (
        <React.Fragment>
            <Button variant="contained" onClick={handleClickOpen}>
                Aggiungi Prenotazione
            </Button>
            <Dialog
                open={open}
                TransitionComponent={Transition}
                keepMounted
                onClose={handleClose}
                aria-describedby="alert-dialog-slide-description"
            >
                <DialogTitle>{"Vuoi Aggiungere un appuntamento"}</DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-slide-description">
                        Aggiungi una prenotazione di un Parrucchiere
                    </DialogContentText>
                    <TextField
                        autoFocus
                        required
                        margin="dense"
                        id="name"
                        name="email"
                        type="string"
                        fullWidth
                        variant="standard"
                        value={nome}
                        label="nome"
                        onChange={(e)=>setNome(e.target.value)}
                    />
                    <TextField
                        autoFocus
                        required
                        margin="dense"
                        id="name"
                        name="email"
                        type="string"
                        fullWidth
                        variant="standard"
                        value={cognome}
                        label="cognome"
                        onChange={(e)=>setCognome(e.target.value)}
                    />
                    <TextField
                        autoFocus
                        required
                        margin="dense"
                        id="name"
                        name="email"
                        type="string"
                        fullWidth
                        variant="standard"
                        value={prestazione}
                        label="Prestazione"
                        onChange={(e)=>setPrestazione(e.target.value)}
                    />
                    <TextField
                        autoFocus
                        required
                        margin="dense"
                        id="name"
                        name="email"
                        type="date"
                        fullWidth
                        variant="standard"
                        label="data"
                        value={date}
                        onChange={(e)=>setDate(e.target.value)}
                    />
                    <TextField
                        autoFocus
                        required
                        margin="dense"
                        id="name"
                        name="email"
                        type="string"
                        fullWidth
                        variant="standard"
                        value={ora}
                        label="ora"
                        onChange={(e)=>setOra(e.target.value)}
                    />
                    <TextField
                        autoFocus
                        required
                        margin="dense"
                        id="name"
                        name="email"
                        type="string"
                        fullWidth
                        variant="standard"
                        value={numero}
                        label="numero"
                        onChange={(e)=>setNumero(e.target.value)}
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Disagree</Button>
                    <Button onClick={()=>(handleClick(),handleClose())}>Agree</Button>
                </DialogActions>
            </Dialog>
        </React.Fragment>
    );
}
