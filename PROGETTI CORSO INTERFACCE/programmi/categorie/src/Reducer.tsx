import {Action} from "./Action";
import {createContext} from "react";

interface State{
    listaCategorie:Categoria[]
    categoriaAttuale:Categoria

}
export interface Categoria{
    nome:string,
    listaspese:Spesa[],
    totspese:number

}
export interface Spesa{
    data:string,
    descrizione:string,
    importo:number
}
export function Reducer(state:State,action:Action){
    switch (action.type) {
        case "aggiungiCategoria":
        return ({
            ...state,
            listaCategorie:[...state.listaCategorie,action.categoria]
        })
        case "setCategoria":
            return ({
                ...state,
                categoriaAttuale:action.categoria
            })
        case "aggiungiSpesa":
            let NuovaLista=state.listaCategorie.filter(categoria=>categoria!==state.categoriaAttuale)
            let listaSpeseAggiornata=[...action.categoria.listaspese,action.spesa]
            let categoriaAggiornata:Categoria={nome:action.categoria.nome,listaspese:listaSpeseAggiornata,totspese:state.categoriaAttuale.totspese+action.spesa.importo}
            return ({
                    ...state,
                listaCategorie:[...NuovaLista,categoriaAggiornata],
                categoriaAttuale:categoriaAggiornata
                })
        case "eliminaSpesa":
            let NuovaCategoria=state.listaCategorie.filter(categoria=>categoria!==state.categoriaAttuale)
            let listaSpeseEliminata=action.categoria.listaspese.filter((spesa)=>spesa!==action.spesa)
            let categoriaNuova:Categoria={nome:action.categoria.nome,listaspese:listaSpeseEliminata,totspese:state.categoriaAttuale.totspese-action.spesa.importo}
            return ({
                ...state,
                listaCategorie:[...NuovaCategoria,categoriaNuova],
                categoriaAttuale:categoriaNuova
            })
    }}
export const statoIniziale:State={listaCategorie:[{nome:"viaggi", listaspese:[],totspese:0}], categoriaAttuale:{nome:"viaggi", listaspese:[],totspese:0}}
export const StateContext=createContext<[State,React.Dispatch<Action>]>([statoIniziale,(_:Action)=>{}])