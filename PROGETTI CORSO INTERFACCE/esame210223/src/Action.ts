import {Crimine} from "./Crimine";

export type Action=
    |{type:"DinamicZoom", point:L.LatLng,listaCrimini:Crimine[]}
    |{type:"SwitchMonth",month:number}
    |{type:"SwitchYear",year:number}
    |{type:"SetCurrentCrime",crimine:Crimine}
export const DynamicZoom=(point:L.LatLng,listaCrimini:Crimine[]):Action=>
    ({type:"DinamicZoom",point,listaCrimini})
export const SwitchMonth=(month:number):Action=>({type:"SwitchMonth",month})
export const SwitchYear=(year:number):Action=>({type:"SwitchYear",year})
export const SetCurrentCrime=(crimine:Crimine):Action=>({type:"SetCurrentCrime",crimine})