import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter } from "react-router-dom";
import { AppContextProvider } from './AppContext';

const container = document.querySelector('#root')
const root = ReactDOM.createRoot(container!)
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <AppContextProvider />
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
