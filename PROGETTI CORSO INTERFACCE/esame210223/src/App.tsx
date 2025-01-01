import React, {useReducer} from 'react';
import './App.css';
import {Route, Routes} from "react-router-dom";
import PaginaPrincipale from "./PaginaPrincipale";
import {Reducer, statoIniziale} from "./Reducer";
import {StateContext} from "./Reducer";
import Specifiche from "./specifiche";
import Statistiche from "./Statistiche";

function App() {
  return (

        <StateContext.Provider value={useReducer(Reducer,statoIniziale)}>
      <Routes>
        <Route element={<PaginaPrincipale/>} path={"/"}/>
          <Route element={<Specifiche/>} path={"/specifiche"}/>
          <Route element={<Statistiche/>} path={"/statistiche"}/>

      </Routes>
        </StateContext.Provider>
  );
}

export default App;
