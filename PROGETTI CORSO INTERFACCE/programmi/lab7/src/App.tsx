import React, {useReducer} from 'react';
import './App.css';
import {Route, Routes} from "react-router-dom";
import PaginaPrincipale from "./PaginaPrincipale";
import {Reducer, statoIniziale} from "./reducer";
import {StateContext} from "./reducer";
import Appartamento from "./Appartamento";

function App() {
  return (
    <>
        <StateContext.Provider value={useReducer(Reducer,statoIniziale)}>
      <Routes>
        <Route element={<PaginaPrincipale/>} path={"/"}/>
          <Route element={<Appartamento/>} path={"/appartamento"}/>

      </Routes>
        </StateContext.Provider>
    </>

  );
}

export default App;
