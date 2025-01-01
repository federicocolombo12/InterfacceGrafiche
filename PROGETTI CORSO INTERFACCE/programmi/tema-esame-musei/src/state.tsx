import {Action, Prenotazione} from "./reducer";
import {createContext} from "react";
import {MuseoProp} from "./MainPanel";
import L from "leaflet";

export type State={
    listaPrenotazioni:Prenotazione[]
    currentMuseum:MuseoProp
}
export function Reducer(state:State,action:Action){
    switch (action.type){
        case "addPrenotazione":
            return (
                {...state,
                    listaPrenotazioni:[...state.listaPrenotazioni, action.prenotazione]
                }
            )
        case "removePrenotazione":
            return (
                {...state,
                listaPrenotazioni: [...state.listaPrenotazioni.filter((prenotazione)=>prenotazione
                    !==action.prenotazione)]}
            )
        case "setCurrentMuseum":
            return (
                {...state,
                currentMuseum:action.museo}
            )

    }
}
export const initialState:State={listaPrenotazioni:[], currentMuseum:
        { id: 1, name: "Museo Egizio", position: new L.LatLng(45.11371975013867, 7.670686678487164), descrizione: "Il museo è stato fondato nel 1824 e raccoglie tesori culturali e artistici dell'antico Egitto." }}
export const StateContext=createContext<[State,React.Dispatch<Action>]>([initialState,(_:Action)=>{}])