import {Stack} from "@mui/material";
import ResponsiveAppBar from "./AppBar";
import {useContext} from "react";
import {StateContext} from "./Reducer";
import Giornaliero from "./Giornaliero";
import Settimanale from "./Settimanale";
import Mensile from "./Mensile";

export default function PaginaPrincipale(){
    const [state,dispatch]=useContext(StateContext)
    return (<Stack>
        <ResponsiveAppBar/>
        {state.visualizzazione==="giornaliero"&&<Giornaliero/>}
        {state.visualizzazione==="settimanale"&&<Settimanale/>}
        {state.visualizzazione==="mensile"&&<Mensile/>}

    </Stack>)
}