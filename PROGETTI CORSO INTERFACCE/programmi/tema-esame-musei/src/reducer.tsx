import {MuseoProp} from "./MainPanel";

export interface Prenotazione{
    id:number

    data:string,
    ora:string,
    nome:string,
    cognome:string,
    numero:string
}



export type Action=
    |{type:"addPrenotazione", prenotazione:Prenotazione}
    |{type:"removePrenotazione", prenotazione:Prenotazione}
    |{type:"setCurrentMuseum", museo:MuseoProp}


export const addPrenotazione=(prenotazione:Prenotazione):Action=>({type:"addPrenotazione",prenotazione})
export const removePrenotazione=(prenotazione:Prenotazione):Action=>({type:"removePrenotazione",prenotazione})
export const setCurrentMuseum=(museo:MuseoProp):Action=>({type:"setCurrentMuseum", museo})
