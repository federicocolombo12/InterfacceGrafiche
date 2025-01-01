import {Casa} from "./Casa";
import appartamento from "./Appartamento";

export type Action=
    |{type:"setPrezzoMax", listacase:Casa[], prezzo:number}
    |{type:"setPrezzoMin", listacase:Casa[], prezzo:number}
    |{type:"FilterPosizione", listacase:Casa[], center:L.LatLng, raggio:number }
    |{type:"FilterTipologia", listacase:Casa[], tipo:string}
    |{type:"FilterNumeroLocali", listacase:Casa[], numero:number}
    |{type:"FilterPiano", listacase:Casa[], piano:number}
    |{type:"FilterClasseEnergetica", listacase:Casa[], classe:string}
    |{type:"SetCurrentAppartamento",appartamento:Casa}


export const setPrezzoMax=(listacase:Casa[],prezzo:number):Action=>({type:"setPrezzoMax", listacase,prezzo})
export const setPrezzoMin=(listacase:Casa[],prezzo:number):Action=>({type:"setPrezzoMin", listacase,prezzo})
export const FilterPosizione=(listacase:Casa[], center:L.LatLng,raggio:number):Action=>
    ({type:"FilterPosizione", listacase,center,raggio})
export const FilterTipologia=(listacase:Casa[],tipo:string):Action=>({type:"FilterTipologia", listacase,tipo})
export const FilterNumeroLocali=(listacase:Casa[], numero:number):Action=>({type:"FilterNumeroLocali", listacase, numero})
export const FilterPiano=(listacase:Casa[],piano:number):Action=>({type:"FilterPiano", listacase,piano})
export const FilterClasseEnergetica=(listacase:Casa[],classe:string):Action=>({type:"FilterClasseEnergetica", listacase,classe})
export const SetCurrentAppartamento=(appartamento:Casa):Action=>({type:"SetCurrentAppartamento",appartamento})
