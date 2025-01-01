import React, {useReducer} from 'react';
import {Route, Routes} from "react-router-dom";
import PaginaPrincipale from "./PaginaPrincipale";
import {Reducer, StateContext, statoIniziale} from "./Reducer";
import PaginaSecondaria from "./PaginaSecondaria";
import Tabella from "./Tabella";


function App() {
  return (
      <StateContext.Provider value={useReducer(Reducer,statoIniziale)}>
      <Routes>
        <Route element={<PaginaPrincipale/>} path={"/"}/>
          <Route element={<PaginaSecondaria/>} path={"/seconda"}/>
          <Route element={<Tabella/>} path={"/tabella"}/>
      </Routes>
      </StateContext.Provider>
  );
}

export default App;
