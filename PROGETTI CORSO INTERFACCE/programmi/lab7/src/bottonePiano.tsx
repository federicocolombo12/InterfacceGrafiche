import {FormControl, InputLabel, MenuItem, Select} from "@mui/material";
import {useContext} from "react";
import {StateContext} from "./reducer";
import {Action, FilterNumeroLocali, FilterPiano, FilterTipologia, setPrezzoMax} from "./Action";

function Bottoneprezzomax(){

    const listaprezzi=[{value:1, nome:"1"},
        {value:2,nome:"2"},
        {value:3, nome:"3"},
        {value:4,nome:"4"},
    ]
    const [state,dispatch]=useContext(StateContext)
    function handleChange(value:number){
        dispatch(FilterPiano(state.listaAppartamenti,value))
    }
    return (<FormControl fullWidth sx={{mx:"1em"}}>
        <InputLabel>Piano</InputLabel>
        <Select
            label={"Piano"}>
            {listaprezzi.map((obj)=>(
                <MenuItem value={obj.value} onClick={()=>handleChange(obj.value)}>{obj.nome}</MenuItem>)
            )}


        </Select>
    </FormControl>)
}
// @ts-ignore
export default Bottoneprezzomax