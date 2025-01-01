import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter} from "react-router-dom";
import {createTheme, Theme, ThemeProvider} from "@mui/material";
import {blue, green} from "@mui/material/colors";
import {StateContext} from "./Reducer";
const theme:Theme=createTheme({palette:{primary:green,
secondary:blue},
    breakpoints: {
        values: {
            xs: 0,
            sm: 640,
            md: 1024,
            lg: 1200,
            xl:1700
        },
    },
})

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>

      <ThemeProvider theme={theme}>
        <BrowserRouter>
            <App/>
        </BrowserRouter>
      </ThemeProvider>

  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
