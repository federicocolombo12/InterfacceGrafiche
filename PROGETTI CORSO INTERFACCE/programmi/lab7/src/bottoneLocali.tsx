import {FormControl, InputLabel, MenuItem, Select} from "@mui/material";
import {useContext} from "react";
import {StateContext} from "./reducer";
import {Action, FilterNumeroLocali, setPrezzoMax} from "./Action";

function Bottoneprezzomax(){

    const listaprezzi=[{ value: 10000, nome: "10000" },
        { value: 1, nome: "1" },
        { value: 2, nome: "2" },
        { value: 3, nome: "3" },
        { value: 4, nome: "4" },
        { value: 5, nome: "5" },
        { value: 6, nome: "6" },
        { value: 10, nome: "10" },
    ]
    const [state,dispatch]=useContext(StateContext)
    function handleChange(value:number){
        dispatch(FilterNumeroLocali(state.listaAppartamenti,value))
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