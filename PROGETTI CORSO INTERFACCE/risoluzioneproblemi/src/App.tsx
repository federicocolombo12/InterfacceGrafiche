import React, {useReducer} from 'react';

import {Reducer, statoIniziale, StateContext} from "./Reducer";



function App() {
  return (
      <>
        <StateContext.Provider value={useReducer(Reducer,statoIniziale)}>

        </StateContext.Provider>
      </>
  );
}

export default App;
