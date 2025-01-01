import {Appuntamento} from "./Reducer";

export type Action=
    |{type:"setVisualizzazione", visualizzazione:string}
    |{type:"aggiungiAppuntamento",appuntamento:Appuntamento}
    |{type:"setData",data:string}

export const setVisualizzazione=(visualizzazione:string):Action=>({type:"setVisualizzazione", visualizzazione})
export const aggiungiAppuntamento=(appuntamento:Appuntamento):Action=>({type:"aggiungiAppuntamento", appuntamento})
export const setData=(data:string):Action=>({type:"setData", data})