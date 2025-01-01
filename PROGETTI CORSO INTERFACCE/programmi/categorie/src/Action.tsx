import {Categoria, Spesa} from "./Reducer";

export type Action=
    |{type:"aggiungiCategoria", categoria:Categoria}
    |{type:"setCategoria",categoria:Categoria}
|{type:"aggiungiSpesa",spesa:Spesa,categoria:Categoria}
|{type:"eliminaSpesa", spesa:Spesa,categoria:Categoria}
export const aggiungiCategoria=(categoria:Categoria):Action=>({type:"aggiungiCategoria", categoria})
export const setCategoria=(categoria:Categoria):Action=>({type:"setCategoria",categoria})
export const aggiungiSpesa=(spesa:Spesa,categoria:Categoria):Action=>({type:"aggiungiSpesa",spesa,categoria})
export const eliminaSpesa=(spesa:Spesa,categoria:Categoria):Action=>({type:"eliminaSpesa",spesa,categoria})
