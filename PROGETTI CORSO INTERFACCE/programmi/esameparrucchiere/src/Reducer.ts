import {Action} from "./Action";
import {createContext} from "react";

interface State{
    visualizzazione:string,
    listaAppuntamenti:Appuntamento[],
    dataCorrente:string
}
export interface Appuntamento{
    nome:string,
    cognome:string,
    numeroTelefono:string,
    prestazione:string,
    data:string,
    ora:string
}
export function Reducer(state:State,action:Action){
    switch (action.type) {
        case "setVisualizzazione":
            return (
                {...state,
                visualizzazione:action.visualizzazione}
            )
        case "aggiungiAppuntamento":
            return (
                {...state,
                listaAppuntamenti:[...state.listaAppuntamenti,action.appuntamento]}
            )
        case "setData":
            return (
                {...state,
                    dataCorrente:action.data
                }
            )
    }}
export const statoIniziale:State={visualizzazione:"giornaliero", listaAppuntamenti:[], dataCorrente:""}
export const StateContext=createContext<[State,React.Dispatch<Action>]>([statoIniziale,(_:Action)=>{}])