import {useContext} from "react";
import {StateContext} from "./Reducer";
import {Stack} from "@mui/material";

export default function Tabella(){
    const [state,dispatch]=useContext(StateContext)
    return (<Stack>
        {state.fermate.map(fermata => (<Stack>{fermata.from.name}{fermata.to.name}</Stack>))}
    </Stack>)
}