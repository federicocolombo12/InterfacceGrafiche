import React, {useContext, useReducer} from 'react';
import './App.css';

import Elenco from "./Elenco";
import MainPanel from "./MainPanel";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Data from "./Data";
import Prenotazioni from "./Prenotazioni";
import Descrizione from "./Descrizione"
import {initialState, Reducer, StateContext} from "./state";



function App() {

    return (
        <StateContext.Provider value={useReducer(Reducer,initialState)}>


            <Routes>
                <Route path={"/"} element={<MainPanel/>}/>
                    <Route path={"/descrizione"} element={<Descrizione/>}/>
                        <Route path={"/raccoltadati"} element={<Data/>}/>
                            <Route path={"/prenotazioni"} element={<Prenotazioni/>}/>


            </Routes>

        </StateContext.Provider>
    );
}

export default App;
