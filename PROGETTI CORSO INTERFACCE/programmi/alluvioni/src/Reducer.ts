import {Action} from "./Action";
import {createContext} from "react";
import {LatLng} from "leaflet";

interface State{
    posizione:L.LatLng
    listaMarkers:Item[],
    loading:boolean
    currentMarker:Item
}
export interface Item{
    id:string,
    label:string,
    lat:number,
    lng:number
}
export function Reducer(state:State,action:Action){
    switch (action.type) {
        case "setPosizione":
            return ({
                ...state,
                posizione:action.posizione,
                listaMarkers: []
            })
        case "setMarker":
            return ({
                ...state,
                listaMarkers:[...state.listaMarkers,action.item]
            })
        case "setOpen":
            return (
                {
                    ...state,
                    loading:!state.loading
                }
            )
        case "setCurrentMarker":
            return (
                {
                    ...state,
                    currentMarker:action.item

                }
            )

    }}
export const statoIniziale:State={posizione:new LatLng(54.5445, -4.0649), listaMarkers:[],loading:false,currentMarker:{id:"0",
        label:"0",
        lat:0,
        lng:0}}
export const StateContext=createContext<[State,React.Dispatch<Action>]>([statoIniziale,(_:Action)=>{}])