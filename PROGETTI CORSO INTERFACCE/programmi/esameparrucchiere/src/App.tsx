import React, {useReducer} from 'react';
import logo from './logo.svg';
import './App.css';
import {Reducer, statoIniziale, StateContext} from "./Reducer";
import {Route, Routes} from "react-router-dom";
import PaginaPrincipale from "./PaginaPrincipale";

function App() {
  return (
      <>
        <StateContext.Provider value={useReducer(Reducer,statoIniziale)}>
          <Routes>
            <Route element={<PaginaPrincipale/>} path={"/"}/>
          </Routes>
        </StateContext.Provider>
      </>
  );
}

export default App;
