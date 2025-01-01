import {FormControl, InputLabel, MenuItem, Select} from "@mui/material";
import {useContext} from "react";
import {StateContext} from "./reducer";
import {Action, FilterNumeroLocali, FilterTipologia, setPrezzoMax} from "./Action";

function Bottoneprezzomax(){

    const listaprezzi=[{value:"Appartamento", nome:"Appartamento"},
        {value:"Villa",nome:"Villa"}
    ]
    const [state,dispatch]=useContext(StateContext)
    function handleChange(value:string){
        dispatch(FilterTipologia(state.listaAppartamenti,value))
    }
    return (<FormControl fullWidth sx={{mx:"1em"}}>
        <InputLabel>Locali</InputLabel>
        <Select
            label={"Locali"}>
            {listaprezzi.map((obj)=>(
                <MenuItem value={obj.value} onClick={()=>handleChange(obj.value)}>{obj.nome}</MenuItem>)
            )}


        </Select>
    </FormControl>)
}
// @ts-ignore
export default Bottoneprezzomax