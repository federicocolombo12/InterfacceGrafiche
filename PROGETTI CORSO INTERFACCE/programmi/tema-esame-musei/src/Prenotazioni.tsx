import React, {useContext, useReducer} from "react";
import {initialState, Reducer, StateContext} from "./state";
import {Prenotazione, removePrenotazione} from "./reducer";
import {Button, CardContent, Card, Typography, CardActions} from "@mui/material";
import {useNavigate} from "react-router-dom";

function Prenotazioni(){
    const [state,dispatch]=useContext(StateContext)

    const navigate=useNavigate()
    function handleModify(prenotazione:Prenotazione){
        dispatch(removePrenotazione(prenotazione))
        navigate("/raccoltadati")


    }
    function handleBack(){
        navigate("/")
    }
    return (
        <StateContext.Provider value={useReducer(Reducer,initialState)}>
            <Button variant={"contained"} onClick={handleBack}>Back</Button>
            {state.listaPrenotazioni.map((prenotazione)=>
            (<Card sx={{
                textAlign:"center", mx:"10%", bgcolor:"primary.main" ,my:"1em"}}>
                <CardContent>

                <Typography>
                    {prenotazione.data}

                </Typography>
                <Typography>
                    {prenotazione.ora}

                </Typography>
                <Typography>
                    {prenotazione.nome}

                </Typography>
                <Typography>
                    {prenotazione.cognome}

                </Typography>
                <Typography>
                    {prenotazione.numero}

                </Typography>
                </CardContent>
                <CardActions sx={{display:"flex", justifyContent:"center"}}>
                <Button onClick={()=>(dispatch(removePrenotazione(prenotazione)))}
                        variant="contained" color={"error"}>
                    Rimuovi
                </Button>
                    <Button onClick={()=>(handleModify(prenotazione))}
                            variant="contained" color={"error"} >Modifica</Button>
                </CardActions>
          </Card>))}
        </StateContext.Provider>
    )
}
export default Prenotazioni