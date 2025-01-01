import {Item} from "./Reducer";

export type Action=
    |{type:"setPosizione", posizione:L.LatLng}
    |{type:"setMarker", item:Item}
|{type:"setOpen"}
|{type:"setCurrentMarker",item:Item}
export const setPosizione=(posizione:L.LatLng):Action=>({type:"setPosizione", posizione})
export const setMarker=(item:Item):Action=>({type:"setMarker",item})
export const setOpen=():Action=>({type:"setOpen"})
export const setCurrentMarker=(item:Item):Action=>({type:"setCurrentMarker",item})