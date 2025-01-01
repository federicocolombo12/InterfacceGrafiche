import {MapContainer, Popup, Tooltip} from "react-leaflet";
import {AppBar, Box, Button, IconButton, Stack, Toolbar, Typography} from "@mui/material";
import Elenco from "./Elenco";
import {Marker, TileLayer} from "react-leaflet";
import 'leaflet/dist/leaflet.css'
import L, {map} from "leaflet";
import icon from "leaflet/dist/images/marker-icon.png";
import {Simulate} from "react-dom/test-utils";
import useHistory, {BrowserRouter, Link, Route, Routes, useNavigate} from 'react-router-dom';
import React, {useContext, useEffect, useReducer, useState} from "react";
import {initialState, Reducer, StateContext} from "./state";
import {setCurrentMuseum} from "./reducer";

// Import statements...

// Import statements...

export interface MuseoProp {
    id: number;
    position: L.LatLng;
    descrizione: string;
    name:string
}

export const listamusei: MuseoProp[] = [
    { id: 1, name: "Museo Egizio", position: new L.LatLng(45.11371975013867, 7.670686678487164), descrizione: "Il museo è stato fondato nel 1824 e raccoglie tesori culturali e artistici dell'antico Egitto." },
    { id: 2, name: "Pinacoteca di Brera", position: new L.LatLng(45.47208989724619, 9.187793038990165), descrizione: "La Pinacoteca di Brera è una galleria nazionale d'arte antica e moderna, collocata nell'omonimo palazzo, " +
            "uno dei complessi più vasti di Milano con oltre 24 000 metri quadri di superficie." },
    {id:3, name:"Uffizi", position: new L.LatLng(43.76794052731579, 11.255385898414774), descrizione:"uffizi firenze"},
    {id:4,name:"National Gallery", position:new L.LatLng(51.509022457400384, -0.12828827413216046), descrizione:"national gallery"},
    {id:5, name:"Musei Vaticani", position:new L.LatLng(41.90667940579172, 12.453641296460152), descrizione:"Musei vaticani"},
    {id:6, name:"MoMa", position:new L.LatLng(40.762926142830395, -73.97753572455204), descrizione:"Moma new york"},
    {id:7, name:"British Museum", position:new L.LatLng(51.519546791861, -0.12691368762395033), descrizione:"british museum"},
    {id:8, name:"Museo Dell'automobile", position:new L.LatLng(45.032906932833114, 7.673975395510988), descrizione:"Museo Automobile"}

];

function MainPanel() {
    const navigate=useNavigate()
    const [state,dispatch]=useContext(StateContext)
    function Mappa() {
        function handleClick(museo:MuseoProp){
            navigate("/descrizione")
            dispatch(setCurrentMuseum(museo))

        };
        return (
            <>
                <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                {listamusei.map((museo) => (
                    <Marker
                        key={museo.id}
                        position={museo.position}
                        icon={L.icon({ iconUrl: icon, iconAnchor: [13, 40] })}
                    eventHandlers={{click:()=>handleClick(museo)}}>
                        <Tooltip >{museo.name}</Tooltip>
                    </Marker>
                ))}
            </>
        );
    }


    function MainPage(){
        return(<Stack direction={"column"} sx={{ height: "100vh" }} alignItems={"stretch"}>
            <Box sx={{flexGrow:"grow"}}>
                <AppBar position="static">
                    <Toolbar>
                        <IconButton
                            size="large"
                            edge="start"
                            color="inherit"
                            aria-label="menu"
                            sx={{ mr: 2 }}
                        >

                        </IconButton>
                        <Typography variant="h5" component="div" sx={{ flexGrow: 1 }}>
                            Main Page
                        </Typography>

                    </Toolbar>
                </AppBar>
            </Box>
            <Stack direction={"row"}>
                <MapContainer style={{ flex: 1 }} center={[45.06467, 7.656784]} zoom={5}>
                <Mappa />
            </MapContainer>
            <Box sx={{ width: "15em", overflow: "scroll" , px:"1em", py:"0.5em"}} >
                <Elenco/>
            </Box>
            </Stack>
        </Stack>)

    }
    return (
        <MainPage/>


    );
}

export default MainPanel;
