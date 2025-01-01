import {Stack} from "@mui/material";
import {useContext, useState} from "react";
import {StateContext} from "./Reducer";
import { BarChart } from '@mui/x-charts/BarChart';

function Statistiche(){
    const [state, dispatch]=useContext(StateContext)
    const [listacount,setListacount]=useState([])
    console.log(state.listaCrimini.map((crimine)=>
        (crimine.category)))
    return (
        <Stack>
            <BarChart
                xAxis={[{ scaleType: 'band', data: state.listaCrimini.map((crimine)=>
                        (crimine.category)) }]}
                series={[{ data: [4, 3, 5] }, { data: [1, 6, 3] }, { data: [2, 5, 6] }]}
                width={1000}
                height={1000}
            />
        </Stack>
    )
}
export default Statistiche