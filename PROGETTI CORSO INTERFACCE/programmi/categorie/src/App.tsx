import React, {useReducer} from 'react';
import logo from './logo.svg';
import './App.css';
import {Reducer, statoIniziale, StateContext} from "./Reducer";
import {Route, Routes} from "react-router-dom";
import PaginaPrincipale from "./PaginaPrincipale";
import Dettagli from "./Dettagli";

function App() {
  return (
      <>
        <StateContext.Provider value={useReducer(Reducer,statoIniziale)}>
          <Routes>
                <Route element={<PaginaPrincipale/>} path={"/"}/>
                <Route element={<Dettagli/>} path={"/dettagli"}/>
          </Routes>
        </StateContext.Provider>
      </>
  );
}

export default App;
