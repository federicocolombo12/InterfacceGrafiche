import React, {useContext, useReducer, useState} from "react";
import {Link, useNavigate} from "react-router-dom";
import {initialState, Reducer, StateContext} from "./state";
import {addPrenotazione} from "./reducer"
import {Button} from "@mui/material";

let id = 0;

function generateId() {
    return ++id;
}

function Data() {
    const [data, setData] = useState("");
    const [ora, setOra] = useState("");
    const [nome, setNome] = useState("");
    const [cognome, setCognome] = useState("");
    const [numero, setNumero] = useState("");
    const [, dispatch] = useContext(StateContext); // Destructure to ignore state
    const navigate=useNavigate()
    const handleConfirmation = () => {
        const newReservation = {
            id: generateId(),
            data: data,
            ora: ora,
            nome: nome,
            cognome: cognome,
            numero: numero
        };

        // Dispatch the action to add the reservation
        dispatch(addPrenotazione(newReservation));
        navigate("/prenotazioni")

    };

    return (
        <StateContext.Provider value={useReducer(Reducer,initialState)}>
        <div className={"DataPage"}>
            <input
                type="text"
                placeholder="Data"
                value={data}
                onChange={(e) => setData(e.target.value)}
            />
            <input
                type="text"
                placeholder="Ora"
                value={ora}
                onChange={(e) => setOra(e.target.value)}
            />
            <input
                type="text"
                placeholder="Nome"
                value={nome}
                onChange={(e) => setNome(e.target.value)}
            />
            <input
                type="text"
                placeholder="Cognome"
                value={cognome}
                onChange={(e) => setCognome(e.target.value)}
            />
            <input
                type="text"
                placeholder="Numero"
                value={numero}
                onChange={(e) => setNumero(e.target.value)}
            />
            {/* Use a button instead of a Link to handle the click event */}
            <Button onClick={handleConfirmation} variant={"contained"}>Conferma</Button>
        </div>
        </StateContext.Provider>
    );
}

export default Data;
