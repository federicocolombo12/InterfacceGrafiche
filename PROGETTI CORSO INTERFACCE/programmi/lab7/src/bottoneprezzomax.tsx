import {FormControl, InputLabel, MenuItem, Select} from "@mui/material";
import {useContext} from "react";
import {StateContext} from "./reducer";
import {Action, setPrezzoMax} from "./Action";

function Bottoneprezzomax(){

    const listaprezzi=[{ value: 10000, nome: "10000" },
        { value: 20000, nome: "20000" },
        { value: 50000, nome: "50000" },
        { value: 100000, nome: "100000" },
        { value: 500000, nome: "500000" },
        { value: 1000000, nome: "1000000" },
        { value: 3000000, nome: "3000000" },
        { value: 4000000, nome: "4000000" },
        ]
    const [state,dispatch]=useContext(StateContext)
    function handleChange(value:number){
        dispatch(setPrezzoMax(state.listaAppartamenti,value))
    }
    return (<FormControl fullWidth sx={{mx:"1em"}}>
        <InputLabel>PrezzoMax</InputLabel>
        <Select
            label={"Prezzi"}>
            {listaprezzi.map((obj)=>(
                <MenuItem value={obj.value} onClick={()=>handleChange(obj.value)}>{obj.nome}</MenuItem>)
            )}


        </Select>
    </FormControl>)
}
// @ts-ignore
export default Bottoneprezzomax