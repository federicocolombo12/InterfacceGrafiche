import {Action} from "./Action";
import {createContext} from "react";

export interface Stazione{
    id:number,
    name:string,
    score:any,
    coordinate:{type:string,x:number,y:number},
    distance:any,
    icon:string

}
export interface Fermata{
    connections:Stazione[]
    from:Stazione,
    to:Stazione,
    stations:{from:Stazione[],to:Stazione[]}
}
interface State{
    listaStazioni:Stazione[],
    puntoPartenza:Stazione,
    puntoArrivo:Stazione,
    fermate:Fermata[]

}
export function Reducer(state:State,action:Action){
    switch (action.type){
        case "nuovaLista":
            return (
                {...state,
                listaStazioni:action.listaStazioni}
            )
        case "setStartingPoint":
            return (
                {...state,
                puntoPartenza:action.stazione}
            )
        case "setFinishPoint":
            return (
                {...state,
                    puntoArrivo:action.stazione}
            )
        case "setTable":
            return (
                {...state,
                fermate:action.fermate}
            )
    }
}
export const statoIniziale:State={listaStazioni:[],puntoPartenza:{id:8503000,name:"Z\u00fcrich HB",score:null,
        coordinate:{type:"WGS84",x:47.377847,y:8.540502},distance:null,icon:"train"},puntoArrivo:{id:8503000,name:"Z\u00fcrich HB",score:null,
        coordinate:{type:"WGS84",x:47.377847,y:8.540502},distance:null,icon:"train"},fermate:[]}

export const StateContext=createContext<[State,React.Dispatch<Action>]>([statoIniziale,(_:Action)=>{}])
