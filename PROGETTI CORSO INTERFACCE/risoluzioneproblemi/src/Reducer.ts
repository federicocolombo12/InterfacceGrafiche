import {Action} from "./Action";
import {createContext} from "react";
import {LatLng} from "leaflet";


export interface Stazione {

    Citta:string,
    Coordinate:string,
    Id:string,
}
export interface Citta{
    Citta:string,
    Coordinate:L.LatLng
}
interface State{
    listaStazioni:Stazione[],
    stazioneCorrente:Citta|undefined,
    listaCitta:Citta[]
}
export function Reducer(state:State,action:Action){
    switch (action.type) {
        case "setStation":
            const stazione = state.listaCitta.find(citta => citta.Citta === action.citta);
            return {
                ...state,
                stazioneCorrente: stazione
            }
        case "setStationList":
            return (
                {...state,
                    listaStazioni: [...state.listaStazioni,action.citta]}
            )
        case "setCityList":
            return (
                {...state,
                    listaCitta:action.listaCitta}
            )
    }}
export const statoIniziale:State={listaStazioni:[],stazioneCorrente:{Citta:"Thun",
        Coordinate:new LatLng(46.740399, 7.6222611)}, listaCitta:[]}
export const StateContext=createContext<[State,React.Dispatch<Action>]>([statoIniziale,(_:Action)=>{}])