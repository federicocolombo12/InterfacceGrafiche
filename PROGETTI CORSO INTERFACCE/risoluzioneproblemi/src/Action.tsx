import {Citta, Stazione} from "./Reducer";

export type Action=
    |{type:"setStation", citta:string}
    |{type:"setStationList",citta:Stazione}
    |{type:"setCityList",listaCitta:Citta[]}
export const setStation=(citta:string):Action=>({type:"setStation", citta})
export const setStationList=(citta:Stazione):Action=>({type:"setStationList", citta})
export const setCityList=(listaCitta:Citta[]):Action=>({type:"setCityList", listaCitta})