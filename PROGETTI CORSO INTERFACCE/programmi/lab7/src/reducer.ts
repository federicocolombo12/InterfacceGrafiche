import {Casa, ListaAppartamenti} from "./Casa";
import {Action} from "./Action";
import {createContext} from "react";
import exp from "constants";
import L from "leaflet";

interface State{
    listaAppartamenti:Casa[]
    currentAppartamento:Casa
}
export function Reducer(state:State,action:Action){
    switch (action.type){
        case "setPrezzoMax":
            return (
                {
                    ...state,
                    listaAppartamenti:[ListaAppartamenti.filter((casa)=>
                        Number(casa.prezzo)<=action.prezzo)]
                }
            )
        case "setPrezzoMin":
            return (
                {
                    ...state,
                    listaAppartamenti:ListaAppartamenti.filter((casa)=>
                        Number(casa.prezzo)>action.prezzo)
                }
            )
        case "FilterPosizione":
            return {
                ...state,
                listaAppartamenti: ListaAppartamenti.filter((casa) => (
                    casa.pos.lat > (action.center.lat - action.raggio) &&
                    casa.pos.lat < (action.center.lat + action.raggio) &&
                    casa.pos.lng > (action.center.lng - action.raggio) && // Correzione qui
                    casa.pos.lng < (action.center.lng + action.raggio)    // Correzione qui
                ))
            };

        case "FilterTipologia":
            return (
                {
                    ...state,
                    listaAppartamenti: ListaAppartamenti.filter((casa)=>
                    casa.tipo===action.tipo)
                }
            )
        case "FilterPiano":
            return (
                {
                    ...state,
                    listaAppartamenti: ListaAppartamenti.filter((casa)=>
                        (Number(casa.piano)===action.piano))
                }
            )
        case "FilterNumeroLocali":
            return (
                {
                    ...state,
                    listaAppartamenti: ListaAppartamenti.filter((casa)=>
                        (Number(casa.Locali)===action.numero))
                }
            )
        case "FilterClasseEnergetica":
            return (
                {
                    ...state,
                    listaAppartamenti: ListaAppartamenti.filter((casa)=>
                        (casa.classe===action.classe))
                }
            )
        case "SetCurrentAppartamento":
            return (
                {
                    ...state,
                    currentAppartamento:action.appartamento
                }
            )

    }
}

export const statoIniziale:State={listaAppartamenti:ListaAppartamenti,currentAppartamento: {id:0, tipo:"Appartamento",pos:new L.LatLng(45.06467,7.656784),Area:"50mq",Locali:"5",piano:"3",classe:"2",prezzo:"100000",
        descrizione:"casa de gasperi",foto:"/appartamentotorino.jpg"}}
export const StateContext=createContext<[State,React.Dispatch<Action>]>([statoIniziale,(_:Action)=>{}])