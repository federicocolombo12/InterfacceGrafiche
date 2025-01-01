import {Fermata, Stazione} from "./Reducer";

export type Action=
    |{type:"nuovaLista", listaStazioni:Stazione[]}
    |{type:"setStartingPoint", stazione:Stazione}
|{type:"setFinishPoint",stazione:Stazione}
|{type:"setTable", fermate:Fermata[]}

export const nuovaLista=(listaStazioni:Stazione[]):Action=>({type:"nuovaLista",listaStazioni})
export const setStartingPoint=(stazione:Stazione):Action=>({type:"setStartingPoint",stazione})
export const setFinishPoint=(stazione:Stazione):Action=>({type:"setFinishPoint",stazione})
export  const setTable=(fermate:Fermata[]):Action=>({type:"setTable",fermate})