import {Action} from "./Action";
import {Crimine} from "./Crimine";
import {LatLng} from "leaflet";
import {createContext} from "react";
interface State{
    listaCrimini:Crimine[],
    posizione:L.LatLng,
    mese:number,
    anno:number
    currentCrime:Crimine
}
export function Reducer(state:State,action:Action){
    switch (action.type){
        case "DinamicZoom":

            return ({...state,
                listaCrimini:action.listaCrimini,
                posizione:action.point
            })
        case "SwitchYear":
            return ({
                ...state,
                anno:action.year
            })
        case "SwitchMonth":
            return ({
                ...state,
                mese:action.month
            })
        case "SetCurrentCrime":
            return ({
                ...state,
                currentCrime:action.crimine
            })
    }
}
export const statoIniziale:State={listaCrimini:[],posizione:new LatLng(51.58563634563626, -0.09287205833366016),
    mese:12,anno:2020, currentCrime:{"category":"anti-social-behaviour",
        "location_type":"Force","location":{"latitude":"52.635598",
            "street":{"id":883314,"name":"On or near Yeoman Lane"},"longitude":"-1.129330"},
        "context":"","persistent_id":"","id":97881175,"location_subtype":"","month":"2021-12"}}
export const StateContext=
    createContext<[State,React.Dispatch<Action>]>([statoIniziale,(_:Action)=>{}])